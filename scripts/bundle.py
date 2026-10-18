#!/usr/bin/env python3
"""Bundle the sources in src/ into a single self-contained public/index.html.

Standard library only - no dependencies, no virtualenv. Run it from anywhere:

    python3 scripts/bundle.py

src/index.html references local assets with plain tags:

    <link rel="stylesheet" href="style.css">
    <script src="app.js"></script>

Each tag pointing to a file inside src/ is replaced by the file contents
inlined inside <style>/<script> tags. Remote references (http/https) are
left untouched, so telegram-widget.js and the rest keep loading from the
network exactly as before.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
OUTPUT = ROOT / "public" / "index.html"

TAG = re.compile(
    r'([ \t]*)<link rel="stylesheet" href="([^"]+)">'
    r'|([ \t]*)<script src="([^"]+)"></script>'
)


def is_local(ref):
    return not re.match(r'https?://', ref)


def inline(match):
    if match.group(2) is not None:
        indent, ref, kind = match.group(1), match.group(2), 'style'
    else:
        indent, ref, kind = match.group(3), match.group(4), 'script'
    if not is_local(ref):
        return match.group(0)
    path = (SRC / ref).resolve()
    if not path.is_relative_to(SRC.resolve()) or not path.is_file():
        sys.exit(f"error: local asset not found: {ref}")
    content = path.read_text(encoding='utf-8').rstrip('\n')
    return f"{indent}<{kind}>\n{content}\n{indent}</{kind}>"


def bundle():
    html = (SRC / "index.html").read_text(encoding='utf-8')
    return TAG.sub(inline, html)


def main():
    if not (SRC / "index.html").is_file():
        sys.exit(f"error: missing source: {SRC / 'index.html'}")
    html = bundle()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(html, encoding='utf-8')
    print(f"bundled -> {OUTPUT} ({len(html)} bytes)")


if __name__ == '__main__':
    main()
