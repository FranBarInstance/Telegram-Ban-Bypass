# Telegram Ban Bypass

**Leer en:** [English](README.md) | **Español** | [Русский](README.ru.md) | [Português](README.pt.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Polski](README.pl.md) | [Nederlands](README.nl.md)

## Descripción

Una herramienta web mejorada que te permite ver el contenido de cualquier canal público de Telegram, incluso si tu cuenta está baneada en ese canal en concreto. Incluye optimizaciones de rendimiento y funciones mejoradas.

**Demo en vivo:** [DEMO](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)

## Instalación

No requiere instalación. Puedes:
1. Usar la **[versión web en vivo](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)**, o
2. Descargar el **[único archivo HTML](https://github.com/franbarinstance/Telegram-Ban-Bypass/blob/master/public/index.html)** y abrirlo en cualquier navegador

## Características

- **Sin inicio de sesión** - No se necesita cuenta de Telegram para leer canales
- **Búsqueda multipase tolerante a huecos** - Encuentra la última publicación incluso a través de huecos de mensajes borrados
- **Retoma donde lo dejaste** - Al volver a un canal se abre al instante desde el último ID guardado; una búsqueda detenida guarda su progreso y la siguiente búsqueda continúa desde ahí, y "Buscar de nuevo" fuerza una búsqueda nueva
- **Comprobar Nuevos Mensajes** - Las siguientes publicaciones aparecen al instante mientras la comprobación sigue ejecutándose en segundo plano; botón manual, temporizador de comprobación automática opcional y una comprobación extendida con límite configurable (hasta 1000 publicaciones por delante) que salta huecos más grandes
- **Modo Start ID manual** - Para canales donde la búsqueda automática se atasca, empieza desde un ID de mensaje conocido
- **Retroalimentación en tiempo real** - Muestra el progreso de la búsqueda
- **Temas claro y oscuro, 9 idiomas** - Sigue las preferencias del sistema, instalable como PWA
- **Optimizado para móviles** - Funciona en todos los dispositivos
- **Sin instalación** - Se ejecuta directamente en el navegador

## Cómo funciona

Esta herramienta usa la [API de widgets de Telegram](https://core.telegram.org/widgets/post), diseñada para incrustar publicaciones concretas de Telegram.

En canales y grupos de Telegram, los IDs de mensaje son secuenciales. Esto significa que si conoces el ID de la última publicación, puedes mostrar cualquier número de mensajes anteriores con el widget de publicaciones de Telegram.

#### El reto: encontrar el ID del último mensaje

El principal obstáculo es determinar el ID del mensaje más reciente de un canal o grupo. Las API oficiales de Telegram podrían dar esos datos, pero tienen limitaciones:

- Los límites de frecuencia restringen las consultas repetidas.
- Las restricciones CORS dificultan la implementación en JavaScript del lado del cliente.

#### La solución: un apaño basado en el widget

Para esquivar estas limitaciones y no depender de una API, esta herramienta usa el widget de publicaciones de Telegram para detectar el último mensaje. Una *sonda* carga el widget para un ID de mensaje supuesto en un contenedor oculto y lee la altura del iframe resultante:

- Iframe alto (redimensionado por la incrustación) → el mensaje existe.
- Iframe fino → Telegram renderizó su página "post not found": el mensaje no existe.
- Iframe de ~150 px por defecto (nunca redimensionado) → ambiguo: la petición de incrustación fue limitada o el canal no existe. Las respuestas ambiguas se reintentan una vez antes de contarlas como inexistentes.

Detectar un mensaje así nunca lee el contenido del widget (CORS lo impide): solo el tamaño del iframe.

Con la detección de existencia resuelta, la búsqueda avanza en pasadas de resolución decreciente, tolerando huecos de mensajes borrados:

1. Rejilla de anclaje – Una pequeña rejilla de IDs sonda encuentra un mensaje que se sabe que existe.
2. Barrido hacia arriba – Sondas gruesas (pasos de 100k) acotan la región por encima del último mensaje existente.
3. Refinamiento – Pasadas sucesivas de 10k, 1k, 100 y 10 estrechan la región.
4. Escaneo final – Un escaneo de resolución 1 fija el ID exacto del último mensaje.

Cada pasada avanza hacia delante y se detiene tras una racha de fallos consecutivos (10 por defecto), que es lo que le permite saltar huecos de borrado: en la pasada de 1k puede cruzar un hueco de hasta ~10.000 mensajes borrados, en la de 100 unos ~1.000, y así sucesivamente. Las sondas se ejecutan en lotes paralelos de 3. Un botón Detener aborta la búsqueda en cualquier momento; se guarda el ID más alto verificado hasta el momento, y la siguiente búsqueda de ese canal continúa desde él en lugar de empezar de cero.

#### Por qué la búsqueda puede ser lenta

Cada sonda es una petición de incrustación real a t.me, y una sola respuesta tarda aproximadamente entre 0,1 y 1,5 segundos. Una búsqueda completa cuesta unas 150–250 sondas, así que suele tardar decenas de segundos. Dos cosas la hacen más lenta:

- **Límites de frecuencia de Telegram.** Tras muchas peticiones, t.me empieza a descartar respuestas de incrustación (el caso ambiguo de ~150 px de arriba). Las sondas entonces consumen toda la espera más un reintento, y toda la búsqueda puede alargarse a minutos. Los límites son por IP y se levantan solos pasado un tiempo.
- **Huecos de mensajes borrados.** Los huecos más grandes obligan a más sondas de refinamiento antes de alcanzar el umbral de la racha.

Volver a un canal que ya abriste es instantáneo: el ID del último mensaje queda guardado y se reutiliza, con cero sondas. "Comprobar Nuevos Mensajes" entonces solo trabaja sobre los pocos IDs por encima de él: los siguientes diez IDs se renderizan en el feed de inmediato (las publicaciones inexistentes se ocultan solas), así que cualquier novedad aparece a la vez que el escaneo sigue determinando el verdadero último mensaje en segundo plano. Esas diez incrustaciones sirven también como sondas de existencia para sus IDs, así que la comprobación no cuesta peticiones extra.

#### Problemas conocidos de búsqueda

- **Canales con borrados masivos.** Si un canal tiene un hueco de borrado mayor de lo que una pasada puede cruzar —por ejemplo una purga de spam que eliminó la mayor parte del historial, dejando la publicación más nueva aislada miles de IDs por encima del último bloque superviviente—, la búsqueda se detiene por debajo del verdadero último mensaje. No hay forma barata de detectar ese hueco; usa el modo Start ID manual en esos canales.
- **Canales muy grandes.** Los canales cuyo último ID de mensaje supera los 3 millones se reportan como "demasiado grande" en vez de buscarse; de nuevo, el modo Start ID manual funciona ahí.
- **Canales inexistentes o privados.** Telegram sirve una página de vista previa para *cada* ID de mensaje de un canal que no existe, así que todas las sondas parecen "altas". La búsqueda lo detecta con una sonda centinela en un ID que ningún canal real puede tener, y avisa de que el canal no se ha encontrado.

## Tecnologías

- Uso de la API pública de widgets de Telegram, que no está sujeta a baneos
- Carga dinámica de publicaciones en orden cronológico inverso
- Detección y eliminación automática de publicaciones borradas
- Un único archivo HTML sin dependencias (JS/CSS vanilla), instalable como PWA

## Limitaciones

- Solo funciona con canales públicos
- Puede haber problemas con conexiones a internet lentas.
- Algunas publicaciones muy antiguas pueden no cargarse
- Sin capacidad de descarga de medios
- Los canales con borrados extremadamente masivos (por ejemplo purgas de spam que eliminan más de la mitad de todos los mensajes) pueden vencer a la búsqueda automática; usa el modo Start ID manual ahí

## Licencia

Licencia MIT - Libre para uso personal y comercial

---

**[README](https://franbarinstance.github.io/Telegram-Ban-Bypass/)** | **[Repositorio](https://github.com/FranBarInstance/Telegram-Ban-Bypass)** | **[Demo](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)**
