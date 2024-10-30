/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/22326.html","61fd94dc63aaa39011bacbbe65367696"],["/22327.html","1c0dec1ca0f138727a1dbc5c6236a9d9"],["/22328.html","9e59c0f35b1923a2e8f5b34cdfb54feb"],["/22330.html","7f4e7c5819ac16367dab34ccc21d4c16"],["/22331.html","75dd4d3e6db173827dcbe5b3317dd30f"],["/22332.html","707f80ee5ed60f598200f234dbbb494b"],["/404.html","578bbc66d364f5b59891e7a044f4c621"],["/abcdtodo.html","12b26be95c4ea4d04df17d5528d1fd77"],["/about/index.html","cd56423fe8ed049fb123b706fd24a663"],["/album/index.html","e77f4ea3834f4e39a648e6dcb956a426"],["/anzhiyu/random.js","4a180b80e8832928dddddc11dbc0a570"],["/archives/2024/03/index.html","cc5370e18e4ecc0d3588be8897df7e67"],["/archives/2024/07/index.html","edc4854dc90e0a760db55e52698fc7fa"],["/archives/2024/index.html","4d5f0ad1ab771ecd987c890dab9cbf17"],["/archives/index.html","0aad5bd4cdcaaff8924dd05817224a13"],["/baidu_verify_codeva-yBQQAyLIRM.html","4ddb6fa0a1f161f2fcd8158299f43213"],["/categories/docker/index.html","6cbde933cf778b181f2c09cb6161cdad"],["/categories/docker/书签管理/index.html","dc00d69baea81fd1289a1c7fbda5863e"],["/categories/index.html","140d4cab8304649fc93eb183878123ab"],["/categories/技术/NAS/index.html","3cd7a71003aeb1974e4ef2398d91f50f"],["/categories/技术/index.html","22a374e851360680d83357a5db711dd3"],["/comments/index.html","d6190c003e096ef233c4db933d702344"],["/cookies.html","479f5815144dc4c9ef9600745fdb9d53"],["/copyright.html","a7a3ec6445e1fdcb65b4359ebd1fe732"],["/css/index.css","c841142c2da7b959d753a11b521e47c7"],["/css/spoiler.css","a4f2d0b4410654bb9e05440dc546ed2a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dailyPhoto/index.html","8cdf15ef77e569af9f1664be37e336c0"],["/equipment/index.html","291570f38b584863f1ae8e17c392a316"],["/essay/index.html","a2849274cb20dc763bb710fe514ada67"],["/fonts/font.css","7927c3b44ddba80d5b89c92675848232"],["/ganjuelianghao/index.html","1c9fab3b6d2657c3a109dd0b38c9ce0d"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","5f94f6d02628eef771fe4bb2d548af28"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/index.html","8d63c5b39763be683e61265c6fe145dc"],["/js/anzhiyu/ai_abstract.js","bd7d0416a912651499efa1a2089a9fa0"],["/js/anzhiyu/comment_barrage.js","d27c413b80b8b250eb1493281299a4e3"],["/js/anzhiyu/people.js","19feb32bba8ba6faf0ec882112eb749b"],["/js/anzhiyu/random_friends_post.js","41796840c1aeb32f3407b426744953f5"],["/js/anzhiyu/right_click_menu.js","97b668396daaae5e05b11c7bfd612519"],["/js/main.js","736c8b13deaf2883426039e2897c8c08"],["/js/search/algolia.js","d6e42f82f4a683ff9ed2796b2839e5db"],["/js/search/local-search.js","408666da48024f36cdc803686fb19da9"],["/js/spoiler.js","656570ca16ebe658b46ef468b16f1bb5"],["/js/tw_cn.js","1ab93057e66c00a59bd33c93abd48932"],["/js/utils.js","bf86a9b13c8c46426f7e742165230372"],["/link/index.html","5738c35cc2629cadf03d77ef8d803bcd"],["/luckybohe/index.html","115126d335f3ebe8b68cc93952ddd902"],["/music/index.html","67517c8cbe5ebb6f552d40a9ec503e9d"],["/pay.html","c04e9b4ea85d4f6d7af6236b1e021174"],["/privacy.html","29c46b23197f1b7fc53162f10084bcb9"],["/sw-register.js","5124706973bec9475ef71ff079dba463"],["/tags/Armbian/index.html","554f50074cc7a66a5dc2c24e886f10a5"],["/tags/CasaOS/index.html","560b82a00c3ab20eb048f6b856c84fd5"],["/tags/Docker/index.html","9103bfe52e830cfcf8da5ff29c8c1ba3"],["/tags/N1/index.html","fd7cf8a093d9fe739278e9b43049c76e"],["/tags/OneNav/index.html","ca0c29f3b7f2ba73941a2ac3b4dda42e"],["/tags/Shaarli/index.html","9d1f51986b878956158433b7bf818961"],["/tags/index.html","2db9df5cd72eeed1baf8d2ce4f1583d8"],["/tags/技术/index.html","9b01866ac2b61e86731658860f1330fe"],["/tags/玩客云/index.html","37608638b04f5a4908342c47ca1e27c3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
