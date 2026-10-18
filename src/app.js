        const translations = {
            en: {
                enterChannel: "Enter Telegram Channel:",
                byAuto: "Auto",
                byManual: "Manual",
                loadChannel: "Load",
                loading: "Loading...",
                loadingLatestPost: "Loading latest post...",
                startingAutoSearch: "Starting automatic search...",
                searchingInitialRange: "Searching initial range...",
                testingMessage: "Testing message",
                rangeFound: "Range found:",
                verifyingLastMessage: "Verifying last message:",
                noValidMessages: "No valid messages found",
                noMessages: "No messages found - channel may not exist or have no public messages",
                currentlyViewing: "Currently viewing:",
                latestPostId: "Latest post ID:",
                searchCompleted: "✅ Search completed. Last message:",
                loadMore: "Load More Posts",
                invalidChannel: "Please enter a valid channel name",
                quickGuideTitle: "Quick Guide: View Banned Channels:",
                quickGuideDescription: "Allows you to access blocked Telegram channels or groups. You can read the messages of a channel without appearing in the history, no one knows if you have read it.",
                searchInfoText: "Automatic search fails in channels where many messages have been deleted. In that case you can use manual search, entering manually the ID of the last message of the group or channel. You must find that ID yourself.",
                features: [
                    "No login required. No Telegram account needed to read channels",
                    "Use channel names (e.g., \"telegram\")",
                    "Full URLs are supported (e.g., \"https://t.me/telegram\")",
                    "Use in the URL the \"channel\" parameter for the default channel: ?channel=channelname",
                    "Use in the URL the \"add\" parameter to add channels to the history, separated by commas: ?add=channel1,channel2,...",
                    "Allows you to skip the ban of any telegram channel or group.",
                    "Alternatively you can download a HTML that works in any browser"
                ],
                saveAsCookie: "Save as Cookie"
            },
            es: {
                enterChannel: "Introduce el Canal de Telegram:",
                byAuto: "Auto",
                byManual: "Manual",
                loadChannel: "Load",
                loading: "Cargando...",
                loadingLatestPost: "Cargando último mensaje...",
                startingAutoSearch: "Iniciando búsqueda automática...",
                searchingInitialRange: "Buscando rango inicial...",
                testingMessage: "Probando mensaje",
                rangeFound: "Rango encontrado:",
                verifyingLastMessage: "Verificando último mensaje:",
                noValidMessages: "No se encontraron mensajes válidos",
                noMessages: "No se encontraron mensajes - el canal puede no existir o no tener mensajes públicos",
                currentlyViewing: "Viendo actualmente:",
                latestPostId: "Último ID:",
                searchCompleted: "✅ Búsqueda completada. Último mensaje:",
                loadMore: "Cargar Más Mensajes",
                invalidChannel: "Por favor, introduce un nombre de canal válido",
                quickGuideTitle: "Guía Rápida: Ver Canales Bloqueados:",
                quickGuideDescription: "Permite acceder a canales o grupos bloqueados de Telegram. Puedes leer los mensajes de un canal sin aparecer en el historial, nadie sabe si lo has leído.",
                searchInfoText: "La búsqueda automática falla en canales donde se han borrado muchos mensajes. En ese caso puedes usar la búsqueda manual, poniendo manualmente el ID del último mensaje del grupo o canal. Tú debes encargarte de encontrar ese ID.",
                features: [
                    "No requiere inicio de sesión. No necesitas cuenta de Telegram para leer canales",
                    "Usa nombres de canal (ej: \"telegram\")",
                    "URLs completas son soportadas (ej: \"https://t.me/telegram\")",
                    "Usa en la URL el parámetro \"channel\" para el canal por defecto: ?channel=nombrecanal",
                    "Usa en la URL el parámetro \"add\" para añadir canales al historial, separados por comas: ?add=canal1,canal2,...",
                    "Permite saltarse el bloqueo de cualquier canal o grupo de telegram.",
                    "Alternativamente puedes descargar un HTML que funciona en cualquier navegador"
                ],
                saveAsCookie: "Guardar Cookie"
            }
        };
        const getPreferredLanguage = () => {
            const savedLang = localStorage.getItem('preferredLanguage');
            if (savedLang) return savedLang;
            const userLang = navigator.language || navigator.userLanguage;
            return userLang.startsWith('es') ? 'es' : 'en';
        };
        let currentLang = getPreferredLanguage();
        let t = translations[currentLang];
        function changeLanguage(lang) {
            currentLang = lang;
            t = translations[lang];
            localStorage.setItem('preferredLanguage', lang);
            document.documentElement.lang = lang;
            i18n.updateUITexts();
            updateLanguageSelector();
        }
        function updateLanguageSelector() {
            document.getElementById('lang-select').value = currentLang;
        }
        const CONFIG = {
            NUM_POSTS: 25,
            CACHE_DURATION: 600000,
            TIMEOUT_DURATION: 5000,
            MIN_IFRAME_HEIGHT: 60,
            MAX_POSTS_BEFORE_CLEAR: 200,
            INTERVAL_CHECKS: 25,
            LOAD_MORE_POST: 10,
            DELETED_POST_CHECK_MAX_TIMES: 1500,
            DELETED_POST_CHECK_INTERVAL: 10,
            WIDGET_SCRIPT_URL: 'https://telegram.org/js/telegram-widget.js?22',
            LOAD_MORE_DELAY: 900,
            RETRY_IFRAME_DELAY: 1500,
            INITIAL_RANGE_MAX: 100000000
        };
        const state = {
            countInterval: 0,
            intervalId: null,
            countPosts: 0,
            lastPostId: 0,
            currentChannel: '',
            isLoading: false
        };
        const elements = {
            loading: document.getElementById('loading'),
            error: document.getElementById('error'),
            currentChannel: document.getElementById('current-channel'),
            widgetContainer: document.getElementById('widget-container'),
            loadMoreButton: document.querySelector('.widget-load-more-button'),
            channelInput: document.getElementById('channel-input'),
            loadChannelBtn: document.getElementById('load-channel-btn'),
            startIdInput: document.getElementById('start-id-input'),
            startIdContainer: document.getElementById('start-id-container'),
            saveCookieBtn: document.getElementById('save-cookie-btn'),
            searchInfo: document.getElementById('searchInfo'),
            searchInfoText: document.getElementById('searchInfoText'),
            toolbarChannel: document.getElementById('toolbar-channel'),
            tipsCard: document.getElementById('tips-card')
        };
        const postCache = new Map();
        const manualCache = new Map();
        const utils = {
            isValidChannelName(name) {
                return /^[A-Za-z0-9_]{5,32}$/.test(name);
            },
            extractChannelName(input) {
                const cleanInput = input.trim();
                let name = cleanInput;
                if (cleanInput.includes('t.me/')) {
                    const parts = cleanInput.split('/');
                    name = parts[parts.length - 1] || parts[parts.length - 2];
                }
                if (name.startsWith('@')) {
                    name = name.substring(1);
                }
                return utils.isValidChannelName(name) ? name : '';
            },
            setLoadingState(isLoading, message = 'Loading...') {
                state.isLoading = isLoading;
                elements.loading.textContent = message;
                elements.loading.style.display = isLoading ? 'block' : 'none';
            },
            showError(message) {
                elements.error.textContent = message;
                elements.error.style.display = 'block';
                elements.loading.style.display = 'none';
            },
            clearContainer() {
                elements.widgetContainer.innerHTML = '';
                elements.loadMoreButton.style.display = 'none';
                elements.currentChannel.style.display = 'none';
                elements.toolbarChannel.textContent = '';
                elements.toolbarChannel.style.display = 'none';
            },
            createTestElement() {
                const testContainer = document.createElement('div');
                Object.assign(testContainer.style, {
                    position: 'absolute',
                    left: '-9999px',
                    visibility: 'hidden'
                });
                document.body.appendChild(testContainer);
                return testContainer;
            },
            saveChannel(channelName) {
                const savedChannels = JSON.parse(localStorage.getItem('telegramSavedChannels') || '[]');
                if (!savedChannels.includes(channelName)) {
                    savedChannels.push(channelName);
                    localStorage.setItem('telegramSavedChannels', JSON.stringify(savedChannels));
                    return true;
                }
                return false;
            },
            loadSavedChannels() {
                return JSON.parse(localStorage.getItem('telegramSavedChannels') || '[]');
            },
            removeChannel(channelName) {
                let savedChannels = utils.loadSavedChannels();
                savedChannels = savedChannels.filter(ch => ch !== channelName);
                localStorage.setItem('telegramSavedChannels', JSON.stringify(savedChannels));
            },
            displaySavedChannels() {
                const savedChannels = utils.loadSavedChannels();
                const listContainer = document.getElementById('saved-channels-list');
                const savedChannelsContainer = document.querySelector('.saved-channels');
                if (savedChannels.length > 0) {
                    listContainer.innerHTML = '';
                    savedChannels.forEach(channel => {
                        const li = document.createElement('li');
                        const span = document.createElement('span');
                        span.dataset.channel = channel;
                        span.textContent = `@${channel}`;
                        const removeButton = document.createElement('button');
                        removeButton.className = 'remove-channel';
                        removeButton.dataset.channel = channel;
                        removeButton.textContent = '×';
                        li.appendChild(span);
                        li.appendChild(removeButton);
                        listContainer.appendChild(li);
                    });
                    savedChannelsContainer.style.display = 'block';
                    document.querySelectorAll('.remove-channel').forEach(button => {
                        button.addEventListener('click', (e) => {
                            const channelToRemove = e.target.dataset.channel;
                            utils.removeChannel(channelToRemove);
                            utils.displaySavedChannels();
                        });
                    });
                    document.querySelectorAll('#saved-channels-list li span').forEach(span => {
                        span.addEventListener('click', (e) => {
                            elements.channelInput.value = e.target.dataset.channel;
                            utils.loadChannelStartId(e.target.dataset.channel);
                            elements.loadChannelBtn.click();
                        });
                    });
                } else {
                    savedChannelsContainer.style.display = 'none';
                }
            },
            setCookie(name, value, days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                const expires = "expires=" + date.toUTCString();
                document.cookie = name + "=" + value + ";" + expires + ";path=/";
            },
            getCookie(name) {
                const nameEQ = name + "=";
                const ca = document.cookie.split(';');
                for(let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            },
            deleteCookie(name) {
                document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            },
            saveChannelStartId(channelName, startId) {
                const channelStartIds = JSON.parse(utils.getCookie('telegram_channel_start_ids') || '{}');
                channelStartIds[channelName] = startId;
                const date = new Date();
                date.setMonth(date.getMonth() + 1);
                const expires = "expires=" + date.toUTCString();
                document.cookie = "telegram_channel_start_ids=" + JSON.stringify(channelStartIds) + ";" + expires + ";path=/";
            },
            getChannelStartId(channelName) {
                const channelStartIds = JSON.parse(utils.getCookie('telegram_channel_start_ids') || '{}');
                return channelStartIds[channelName] || null;
            },
            deleteChannelStartId(channelName) {
                const channelStartIds = JSON.parse(utils.getCookie('telegram_channel_start_ids') || '{}');
                delete channelStartIds[channelName];
                const date = new Date();
                date.setMonth(date.getMonth() + 1);
                const expires = "expires=" + date.toUTCString();
                document.cookie = "telegram_channel_start_ids=" + JSON.stringify(channelStartIds) + ";" + expires + ";path=/";
            },
            loadChannelStartId(channelName) {
                const savedStartId = utils.getChannelStartId(channelName);
                if (savedStartId) {
                    elements.startIdInput.value = savedStartId;
                }
                return savedStartId;
            },
            loadCurrentChannelStartId() {
                const channelName = utils.extractChannelName(elements.channelInput.value);
                if (channelName) {
                    return utils.loadChannelStartId(channelName);
                }
                return null;
            }
        };
        const cache = {
            get(channel) {
                const cached = postCache.get(channel);
                if (cached && Date.now() - cached.timestamp < CONFIG.CACHE_DURATION) {
                    return cached.value;
                }
                postCache.delete(channel);
                return null;
            },
            set(channel, value) {
                postCache.set(channel, {
                    value,
                    timestamp: Date.now()
                });
            }
        };
        const manualCacheUtil = {
            get(channel) {
                return manualCache.get(channel) || null;
            },
            set(channel, value) {
                manualCache.set(channel, value);
            }
        };
        const messageChecker = {
            async checkExists(channelName, messageId) {
                return new Promise((resolve) => {
                    const testContainer = utils.createTestElement();
                    let isResolved = false;
                    const cleanup = () => {
                        if (!isResolved) {
                            isResolved = true;
                            testContainer.remove();
                        }
                    };
                    const resolveWith = (result) => {
                        if (!isResolved) {
                            cleanup();
                            resolve(result);
                        }
                    };
                    const timeout = setTimeout(() => resolveWith(false), CONFIG.TIMEOUT_DURATION);
                    const script = document.createElement('script');
                    script.async = true;
                    script.src = CONFIG.WIDGET_SCRIPT_URL;
                    script.setAttribute('data-telegram-post', `${channelName}/${messageId}`);
                    script.setAttribute('data-width', '100%');
                    const verifyIframe = () => {
                        const iframe = testContainer.querySelector('iframe');
                        if (!iframe) {
                            clearTimeout(timeout);
                            resolveWith(false);
                            return;
                        }
                        const height = iframe.offsetHeight;
                        // An embed whose request was throttled by t.me never
                        // receives the widget's resize postMessage and keeps
                        // the browser default height (~150px), which would
                        // pass the 60px threshold and be miscounted as an
                        // existing message. Re-measure once after a delay;
                        // if it is still in the default band, treat it as
                        // not loaded.
                        if (height >= 145 && height <= 155) {
                            setTimeout(() => {
                                const retryHeight = iframe.offsetHeight;
                                const loaded = retryHeight < 145 || retryHeight > 155;
                                clearTimeout(timeout);
                                resolveWith(loaded && retryHeight >= CONFIG.MIN_IFRAME_HEIGHT);
                            }, CONFIG.RETRY_IFRAME_DELAY);
                            return;
                        }
                        clearTimeout(timeout);
                        resolveWith(height >= CONFIG.MIN_IFRAME_HEIGHT);
                    };
                    script.onload = () => {
                        const iframe = testContainer.querySelector('iframe');
                        if (iframe) {
                            iframe.onload = verifyIframe;
                            setTimeout(verifyIframe, CONFIG.LOAD_MORE_DELAY);
                        } else {
                            resolveWith(false);
                        }
                    };
                    script.onerror = () => resolveWith(false);
                    testContainer.appendChild(script);
                });
            }
        };
        const autoSearch = {
            testValues: [
                1000020, 1000000, 999980,
                500020, 500000, 499980,
                100020, 100000, 99980,
                80020, 80000, 79980,
                60020, 60000, 59980,
                40020, 40000, 39980,
                20020, 20000, 19980,
                10020, 10000, 9980,
                1020, 1000, 980,
                120, 100, 80
            ],
            updateInfo(message) {
                elements.currentChannel.textContent = message;
                elements.currentChannel.style.display = 'block';
            },
            async findLastPost(channelName) {
                const cachedResult = cache.get(channelName);
                if (cachedResult) {
                    autoSearch.displayResult(channelName, cachedResult);
                    return;
                }
                try {
                    utils.setLoadingState(true, t.startingAutoSearch);
                    autoSearch.updateInfo(t.searchingInitialRange);
                    const { lower, upper } = await autoSearch.findInitialRange(channelName);
                    autoSearch.updateInfo(`${t.rangeFound} ${lower} - ${upper}. ${t.startingAutoSearch}`);
                    const lastPostId = await autoSearch.performBinarySearch(channelName, lower, upper);
                    autoSearch.updateInfo(`${t.verifyingLastMessage} ${lastPostId}`);
                    const finalExists = await messageChecker.checkExists(channelName, lastPostId);
                    if (!finalExists) {
                        throw new Error(t.noValidMessages);
                    }
                    cache.set(channelName, lastPostId);
                    autoSearch.displayResult(channelName, lastPostId);
                } catch (error) {
                    console.error('Error in auto search:', error);
                    utils.showError(`Error in auto search: ${error.message}`);
                    elements.loadChannelBtn.disabled = false;
                    elements.loadChannelBtn.textContent = t.loadChannel;
                    utils.setLoadingState(false);
                }
            },
            async findInitialRange(channelName) {
                let lower = 1;
                let upper = 1;
                let foundGap = false;
                for (const testValue of autoSearch.testValues) {
                    autoSearch.updateInfo(`${t.testingMessage} ${testValue}...`);
                    const exists = await messageChecker.checkExists(channelName, testValue);
                    if (exists) {
                        lower = testValue;
                    } else {
                        upper = testValue;
                        foundGap = true;
                        break;
                    }
                }
                if (!foundGap) {
                    // Every grid probe exists: the channel is larger than the
                    // top probe, so expand exponentially until a gap appears.
                    upper = lower * 2;
                    while (await messageChecker.checkExists(channelName, upper)) {
                        lower = upper;
                        upper *= 2;
                        autoSearch.updateInfo(`${t.testingMessage} ${upper}...`);
                        if (upper >= CONFIG.INITIAL_RANGE_MAX) break;
                    }
                }
                return { lower, upper };
            },
            async performBinarySearch(channelName, lower, upper) {
                let lastValid = lower;
                let quickCheckDone = false;
                while (lower <= upper) {
                    const mid = Math.floor((lower + upper) / 2);
                    autoSearch.updateInfo(`Testing message ${mid}...`);
                    const exists = await messageChecker.checkExists(channelName, mid);
                    if (exists) {
                        lastValid = mid;
                        lower = mid + 1;
                        if (upper - mid < 10 && !quickCheckDone) {
                            quickCheckDone = true;
                            for (let i = mid + 1; i <= upper; i++) {
                                const quickExists = await messageChecker.checkExists(channelName, i);
                                if (quickExists) lastValid = i;
                                else break;
                            }
                            break;
                        }
                    } else {
                        upper = mid - 1;
                    }
                }
                if (lastValid > 0) {
                    // Forward probes past the binary-search result. Only the
                    // probed IDs matter for the maximum: scanning the IDs
                    // between them could move lastValid back below an ID
                    // already verified to exist.
                    const forwardSteps = [10, 15, 20, 25, 30, 35, 40, 45, 50];
                    for (const step of forwardSteps) {
                        const nextId = lastValid + step;
                        autoSearch.updateInfo(`${t.testingMessage} ${nextId}...`);
                        const exists = await messageChecker.checkExists(channelName, nextId);
                        if (exists) lastValid = nextId;
                    }
                }
                return lastValid;
            },
            displayResult(channelName, lastPostId) {
                state.lastPostId = lastPostId;
                state.currentChannel = channelName;
                elements.toolbarChannel.textContent = `@${channelName}`;
                elements.toolbarChannel.style.display = 'inline-block';
                elements.currentChannel.textContent = '';
                const channelLabel = document.createElement('strong');
                channelLabel.textContent = `@${channelName}`;
                elements.currentChannel.append(
                    `${t.currentlyViewing} `,
                    channelLabel,
                    ` (${t.latestPostId} ${lastPostId})`
                );
                elements.currentChannel.style.display = 'block';
                autoSearch.updateInfo(`${t.searchCompleted} ${lastPostId}`);
                elements.currentChannel.style.backgroundColor = '#d4edda';
                elements.currentChannel.style.color = '#155724';
                setTimeout(() => {
                    elements.currentChannel.style.backgroundColor = '';
                    elements.currentChannel.style.color = '';
                }, 1000);
                utils.setLoadingState(false);
                elements.widgetContainer.dataset.num = 20;
                elements.widgetContainer.innerHTML = '';
                elements.loadChannelBtn.disabled = false;
                elements.loadChannelBtn.textContent = t.loadChannel;
                window.dispatchEvent(new CustomEvent('telegramLoaded'));
            }
        };
        const manualSearch = {
            async findLastPost(channelName, startId) {
                const start = parseInt(startId, 10);
                if (isNaN(start) || start <= 0) throw new Error('Invalid start ID');
                utils.setLoadingState(true, 'Searching...');
                let highestFound = null;
                for (let offset = 1; offset <= 100; offset++) {
                    const testId = start + offset;
                    autoSearch.updateInfo(`Testing ${testId}...`);
                    const exists = await messageChecker.checkExists(channelName, testId);
                    if (exists) {
                        highestFound = testId;
                        for (let nextOffset = offset + 1; nextOffset <= 100; nextOffset++) {
                            const nextId = start + nextOffset;
                            autoSearch.updateInfo(`Testing ${nextId}...`);
                            const nextExists = await messageChecker.checkExists(channelName, nextId);
                            if (nextExists) {
                                highestFound = nextId;
                                offset = nextOffset;
                            } else {
                                break;
                            }
                        }
                        break;
                    }
                    if (offset >= 10 && highestFound === null) break;
                }
                if (highestFound === null) {
                    let lowestFound = null;
                    for (let offset = 1; offset <= 100; offset++) {
                        const testId = start - offset;
                        if (testId < 1) break;
                        autoSearch.updateInfo(`Testing ${testId}...`);
                        const exists = await messageChecker.checkExists(channelName, testId);
                        if (exists) {
                            lowestFound = testId;
                            highestFound = testId;
                            for (let upOffset = 1; upOffset <= 100; upOffset++) {
                                const upId = testId + upOffset;
                                if (upId > start) break;
                                autoSearch.updateInfo(`Testing ${upId}...`);
                                const upExists = await messageChecker.checkExists(channelName, upId);
                                if (upExists) {
                                    highestFound = upId;
                                } else {
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    if (highestFound === null && lowestFound !== null) {
                        highestFound = lowestFound;
                    }
                }
                let finalId;
                if (highestFound !== null) {
                    finalId = highestFound;
                } else {
                    autoSearch.updateInfo(`Testing 1...`);
                    const existsAtOne = await messageChecker.checkExists(channelName, 1);
                    finalId = existsAtOne ? 1 : Math.max(1, start - 100);
                }
                manualCacheUtil.set(channelName, finalId);
                utils.saveChannelStartId(channelName, finalId);
                elements.startIdInput.value = finalId;
                autoSearch.displayResult(channelName, finalId);
            }
        };
        const widgetLoader = {
            load(start, numPosts = CONFIG.NUM_POSTS) {
                if (!elements.widgetContainer) return;
                iframeMonitor.start();
                elements.loadMoreButton.style.display = 'block';
                const end = start - numPosts + 1;
                const fragment = document.createDocumentFragment();
                for (let n = start; n >= end; n--) {
                    const script = document.createElement('script');
                    script.async = true;
                    script.src = CONFIG.WIDGET_SCRIPT_URL;
                    script.setAttribute('data-telegram-post', `${state.currentChannel}/${n}`);
                    script.setAttribute('data-width', '100%');
                    fragment.appendChild(script);
                    state.countPosts++;
                }
                elements.widgetContainer.appendChild(fragment);
                if (end > 1) {
                    widgetLoader.setupLoadMoreButton(end);
                } else {
                    elements.loadMoreButton.style.display = 'none';
                }
            },
            setupLoadMoreButton(end) {
                const newButton = elements.loadMoreButton.cloneNode(true);
                elements.loadMoreButton.replaceWith(newButton);
                newButton.addEventListener('click', () => {
                    if (state.countPosts > CONFIG.MAX_POSTS_BEFORE_CLEAR) {
                        state.countPosts = 0;
                        elements.widgetContainer.innerHTML = '';
                        setTimeout(() => { window.scrollTo(0, 0); }, 100);
                    }
                    const newStart = end - 1;
                    widgetLoader.load(newStart);
                });
                elements.loadMoreButton = newButton;
            }
        };
        const iframeMonitor = {
            checkHeight() {
                const iframes = document.querySelectorAll('iframe[src*="t.me"]');
                iframes.forEach(iframe => {
                    const { offsetHeight } = iframe;
                    if (offsetHeight < CONFIG.MIN_IFRAME_HEIGHT && offsetHeight > 0) {
                        iframe.style.display = 'none';
                    }
                });
                state.countInterval++;
                if (state.intervalId && state.countInterval >= CONFIG.DELETED_POST_CHECK_MAX_TIMES) {
                    clearInterval(state.intervalId);
                    state.countInterval = 0;
                    state.intervalId = null;
                }
            },
            start() {
                if (state.intervalId) {
                    clearInterval(state.intervalId);
                }
                state.intervalId = setInterval(() => iframeMonitor.checkHeight(), CONFIG.DELETED_POST_CHECK_INTERVAL);
            }
        };
        const i18n = {
            updateUITexts() {
                document.getElementById('enterChannelLabel').textContent = t.enterChannel;
                document.getElementById('byAutoLabel').textContent = t.byAuto;
                document.getElementById('byManualLabel').textContent = t.byManual;
                document.getElementById('load-channel-btn').textContent = t.loadChannel;
                document.getElementById('loadMoreBtn').textContent = t.loadMore;
                document.getElementById('quickGuideTitle').textContent = t.quickGuideTitle;
                document.getElementById('quickGuideDescription').textContent = t.quickGuideDescription;
                document.getElementById('searchInfoText').textContent = t.searchInfoText;
                document.getElementById('save-cookie-btn').textContent = t.saveAsCookie;
                const featuresList = document.getElementById('featuresList');
                featuresList.innerHTML = t.features.map(feature => `<li>${feature}</li>`).join('');
            }
        };
        const eventListeners = {
            init() {
                i18n.updateUITexts();
                updateLanguageSelector();
                window.addEventListener('telegramLoaded', () => {
                    if (elements.widgetContainer && state.lastPostId > 0) {
                        state.countPosts = 0;
                        const startPost = state.lastPostId + CONFIG.LOAD_MORE_POST;
                        widgetLoader.load(startPost);
                    }
                });
                document.querySelectorAll('input[name="method"]').forEach(radio => {
                    radio.addEventListener('change', () => {
                        const isManual = document.querySelector('input[name="method"]:checked').value === 'manual';
                        elements.startIdContainer.style.display = isManual ? 'block' : 'none';
                        if (isManual) {
                            utils.loadCurrentChannelStartId();
                        }
                    });
                });
                elements.saveCookieBtn.addEventListener('click', () => {
                    const channelName = utils.extractChannelName(elements.channelInput.value);
                    const startId = elements.startIdInput.value.trim();
                    if (channelName && startId) {
                        utils.saveChannelStartId(channelName, startId);
                        alert('Start ID for channel @' + channelName + ' saved in cookie for 30 days');
                    } else {
                        alert('Please enter a channel and a Start ID');
                    }
                });
                elements.channelInput.addEventListener('input', () => {
                    if (document.querySelector('input[name="method"]:checked').value === 'manual') {
                        utils.loadCurrentChannelStartId();
                    }
                });
                elements.loadChannelBtn.addEventListener('click', async () => {
                    const channelName = utils.extractChannelName(elements.channelInput.value);
                    if (!channelName) {
                        alert(t.invalidChannel);
                        return;
                    }
                    if (state.isLoading) return;
                    const selectedMethod = document.querySelector('input[name="method"]:checked').value;
                    if (selectedMethod === 'manual') {
                        let startId = elements.startIdInput.value.trim();
                        if (!startId) {
                            const savedStartId = utils.getChannelStartId(channelName);
                            if (savedStartId) {
                                startId = savedStartId;
                                elements.startIdInput.value = savedStartId;
                            } else {
                                alert('Please enter a Start ID');
                                return;
                            }
                        }
                    }
                    utils.clearContainer();
                    elements.tipsCard.style.display = 'none';
                    elements.loadChannelBtn.disabled = true;
                    elements.loadChannelBtn.textContent = t.loading;
                    elements.error.style.display = 'none';
                    try {
                        if (selectedMethod === 'auto') {
                            await autoSearch.findLastPost(channelName);
                        } else if (selectedMethod === 'manual') {
                            await manualSearch.findLastPost(channelName, elements.startIdInput.value);
                        }
                        if (utils.saveChannel(channelName)) {
                            utils.displaySavedChannels();
                        }
                    } catch (error) {
                        console.error('Error loading channel:', error);
                        utils.showError(error.message);
                    } finally {
                        elements.loadChannelBtn.disabled = false;
                        elements.loadChannelBtn.textContent = t.loadChannel;
                    }
                });
                document.addEventListener('DOMContentLoaded', () => {
                    const urlParams = new URLSearchParams(window.location.search);
                    const channelParam = urlParams.get('channel');
                    if (channelParam) {
                        elements.channelInput.value = channelParam;
                    }
                    utils.addChannelsFromURL();
                    utils.displaySavedChannels();
                });
                utils.addChannelsFromURL = function () {
                    const urlParams = new URLSearchParams(window.location.search);
                    const channelsToAdd = urlParams.get('add');
                    if (channelsToAdd) {
                        const channelsArray = channelsToAdd
                            .split(',')
                            .map(ch => utils.extractChannelName(ch))
                            .filter(ch => ch);
                        let addedAny = false;
                        channelsArray.forEach(channel => {
                            if (utils.saveChannel(channel)) {
                                addedAny = true;
                            }
                        });
                        if (addedAny) {
                            utils.displaySavedChannels();
                        }
                    }
                };
                elements.channelInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        elements.loadChannelBtn.click();
                    }
                });
            }
        };
        eventListeners.init();
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js').then((registration) => {
                    console.log('Service Worker registrado con scope:', registration.scope);
                }).catch((error) => {
                    console.error('Error al registrar el service worker:', error);
                });
            });
        }
