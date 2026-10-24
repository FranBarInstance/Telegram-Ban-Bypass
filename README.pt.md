# Telegram Ban Bypass

**Ler em:** [English](README.md) | [Español](README.es.md) | [Русский](README.ru.md) | **Português** | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Polski](README.pl.md) | [Nederlands](README.nl.md)

## Visão geral

Uma ferramenta web aprimorada que permite ver o conteúdo de qualquer canal público do Telegram — mesmo se a sua conta estiver banida naquele canal específico. Inclui otimizações de desempenho e recursos aprimorados.

**Demonstração ao vivo:** [DEMO](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)

## Instalação

Não é preciso instalar nada. Você pode:
1. Usar a **[versão web ao vivo](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)**, ou
2. Baixar o **[único arquivo HTML](https://github.com/franbarinstance/Telegram-Ban-Bypass/blob/master/public/index.html)** e abri-lo em qualquer navegador

## Recursos

- **Sem login** - não é preciso conta do Telegram para ler canais
- **Busca multipassagem tolerante a lacunas** - encontra a publicação mais recente mesmo através de lacunas de mensagens apagadas
- **Retoma de onde parou** - reabrir um canal abre instantaneamente a partir do último ID salvo; uma busca interrompida salva o progresso e a próxima busca continua dele, e "Buscar de novo" força uma busca nova
- **Verificar Novas Mensagens** - as próximas publicações aparecem na hora enquanto a verificação continua em segundo plano; botão manual, temporizador opcional de verificação automática e uma verificação estendida com limite configurável (até 1000 publicações à frente) que salta lacunas maiores
- **Modo Start ID manual** - para canais onde a busca automática trava, comece a partir de um ID de mensagem conhecido
- **Feedback em tempo real** - mostra o progresso da busca
- **Temas claro e escuro, 9 idiomas** - segue as preferências do sistema, instalável como PWA
- **Otimizado para celular** - funciona em todos os dispositivos
- **Sem instalação** - roda direto no navegador

## Como funciona

Esta ferramenta usa a [API Telegram Widgets](https://core.telegram.org/widgets/post), projetada para incorporar publicações específicas do Telegram.

Em canais e grupos do Telegram, os IDs de mensagem são sequenciais. Isso significa que, se você conhece o ID da última publicação, pode exibir qualquer número de mensagens anteriores com o widget de publicação do Telegram.

#### O desafio: encontrar o ID da última mensagem

O principal obstáculo é determinar o ID da mensagem mais recente em um canal ou grupo. As APIs oficiais do Telegram poderiam fornecer esses dados, mas têm limitações:

- Limites de frequência restringem consultas repetidas.
- Restrições de CORS dificultam a implementação em JavaScript do lado do cliente.

#### A solução: um contorno baseado no widget

Para contornar essas limitações e não depender de uma API, esta ferramenta usa o widget de publicação do Telegram para detectar a última mensagem. Uma *sonda* carrega o widget para um ID de mensagem suposto em um contêiner oculto e lê a altura do iframe resultante:

- Iframe alto (redimensionado pela incorporação) → a mensagem existe.
- Iframe fino → o Telegram renderizou sua página "post not found": a mensagem não existe.
- Iframe padrão de ~150 px (nunca redimensionado) → ambíguo: a requisição de incorporação foi limitada ou o canal não existe. Respostas ambíguas são repetidas uma vez antes de contarem como inexistentes.

Detectar uma mensagem assim nunca lê o conteúdo do widget (o CORS impede) — apenas o tamanho do iframe.

Com a detecção de existência resolvida, a busca avança em passagens de resolução decrescente, tolerando lacunas de mensagens apagadas:

1. Grade de âncora – uma pequena grade de IDs de sonda encontra uma mensagem sabidamente existente.
2. Varredura para cima – sondas grosseiras (passos de 100k) delimitam a região acima da última mensagem existente.
3. Refinamento – passagens sucessivas de 10k, 1k, 100 e 10 estreitam a região.
4. Varredura final – uma varredura de resolução 1 fixa o ID exato da última mensagem.

Cada passagem avança para frente e para após uma sequência de falhas consecutivas (10 por padrão), e é isso que permite saltar lacunas de exclusão: na passagem de 1k ela pode cruzar uma lacuna de até ~10.000 mensagens apagadas, na de 100 cerca de ~1.000, e assim por diante. As sondas rodam em lotes paralelos de 3. Um botão Parar interrompe a busca a qualquer momento; o maior ID verificado até então é salvo, e a próxima busca desse canal continua a partir dele em vez de começar do zero.

#### Por que a busca pode ser lenta

Cada sonda é uma requisição de incorporação real ao t.me, e uma única resposta leva aproximadamente de 0,1 a 1,5 segundo. Uma busca completa custa cerca de 150–250 sondas, então normalmente leva dezenas de segundos. Duas coisas a deixam mais lenta:

- **Limites de frequência do Telegram.** Depois de muitas requisições, o t.me começa a descartar respostas de incorporação (o caso ambíguo de ~150 px acima). As sondas então gastam a espera inteira mais uma repetição, e a busca inteira pode se estender por minutos. Os limites são por IP e se desfazem sozinhos depois de um tempo.
- **Lacunas de mensagens apagadas.** Lacunas maiores exigem mais sondas de refinamento antes de o limiar da sequência ser atingido.

Reabrir um canal que você já abriu é instantâneo: o ID da última mensagem fica salvo e é reutilizado, com zero sondas. "Verificar Novas Mensagens" então só trabalha nos poucos IDs acima dele: os dez IDs seguintes são renderizados no feed na hora (publicações inexistentes se escondem sozinhas), então qualquer novidade aparece de imediato enquanto a varredura continua determinando a verdadeira última mensagem em segundo plano. Essas dez incorporações também servem como sondas de existência para seus IDs, então a verificação não custa requisições extras.

#### Problemas conhecidos da busca

- **Canais com exclusão pesada.** Se um canal tem uma lacuna de exclusão maior do que uma passagem consegue cruzar — por exemplo, uma limpeza de spam que removeu a maior parte do histórico, deixando a publicação mais recente isolada milhares de IDs acima do último bloco sobrevivente —, a busca para abaixo da verdadeira última mensagem. Não há maneira barata de detectar essa lacuna; use o modo Start ID manual nesses canais.
- **Canais muito grandes.** Canais cujo último ID de mensagem passa de 3 milhões são reportados como "grande demais" em vez de buscados; de novo, o modo Start ID manual funciona aí.
- **Canais inexistentes ou privados.** O Telegram serve uma página de prévia para *todo* ID de mensagem de um canal que não existe, então todas as sondas parecem "altas". A busca detecta isso com uma sonda sentinela em um ID que nenhum canal real pode ter, e informa que o canal não foi encontrado.

## Tecnologias

- Uso da API pública de widgets do Telegram, que não está sujeita a banimentos
- Carregamento dinâmico de publicações em ordem cronológica inversa
- Detecção e remoção automáticas de publicações apagadas
- Único arquivo HTML sem dependências (JS/CSS puro), instalável como PWA

## Limitações

- Só funciona com canais públicos
- Pode haver problemas com conexões de internet lentas.
- Algumas publicações muito antigas podem não carregar
- Sem capacidade de baixar mídia
- Canais com exclusão extremamente pesada (por exemplo, limpezas de spam que removem mais da metade de todas as mensagens) podem derrotar a busca automática; use o modo Start ID manual nesses casos

## Licença

Licença MIT - livre para uso pessoal e comercial
