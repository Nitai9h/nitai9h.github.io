/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/22326.html","97542dc6201264047b935d266f52f4db"],["/22327.html","8d6545d826d43a96cd66606d01f5d32f"],["/22328.html","a0a653cf7850f238f955ee486835ff89"],["/22330.html","a43540da3ff9eeaec2d130c1463ee338"],["/22331.html","39f0c612f0fe6c696e6a56a41d04d5d0"],["/22332.html","efa60b372b0055292cc8fe86d4773f14"],["/404.html","c5cd1cd6086e3459bee235c67ff3e11e"],["/about/index.html","2f97425c24a5d0a0704fc6e865992455"],["/album/index.html","39618dae0135f9012f5231fccfb32d41"],["/anzhiyu/random.js","261e119ca1cca3d5516d47f84a308d4d"],["/archives/2024/03/index.html","dbc1b5ec6d6832626949a36e18221186"],["/archives/2024/07/index.html","0adc30a27e34936acd4ba0569cfe6624"],["/archives/2024/index.html","b4a294fc91e9f905383ba59a5ff16f8c"],["/archives/index.html","e6c215cf49e5082bddd5dbd48952930a"],["/baidu_verify_codeva-yBQQAyLIRM.html","4ddb6fa0a1f161f2fcd8158299f43213"],["/categories/Hexo/Linux-Debian/index.html","02b12b68d43afb6a1d5006af950bd5b7"],["/categories/Hexo/git/index.html","119d48ae3e26f2f1d84622d959b10ca9"],["/categories/Hexo/index.html","e8c64fc9f53e0dc44e933347be9091d2"],["/categories/docker/index.html","c17edab8e76c2f7bd3243163980444cc"],["/categories/docker/书签管理/index.html","4aae67d4c061136497bbe7b0519136a7"],["/categories/index.html","20d6db90da64352fabf1f90dde730e56"],["/categories/技术/NAS/index.html","f853d962c7c0ad3fe373225e604eecf7"],["/categories/技术/index.html","af69ff664b2545f9738a8ecdc0b368fa"],["/comments/index.html","2c8dba68d92e8efea18578deb753059b"],["/cookies.html","873f5226a3688d50f285a31aee40bbe9"],["/copyright.html","ac9080fcde9c6eb54381c71214b34446"],["/css/index.css","67dc6671536b14860f7c835879f59a78"],["/css/spoiler.css","a4f2d0b4410654bb9e05440dc546ed2a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dailyPhoto/index.html","4ccaa039ce1800cb1d35d9de325a55d7"],["/equipment/index.html","139c92f2818dc576e91799d83f0db1a8"],["/essay/index.html","7028361aedfc6dae9f6a933a45cc4aaf"],["/fonts/font.css","7927c3b44ddba80d5b89c92675848232"],["/ganjuelianghao/index.html","b696dd977846ba02b87beeb56c17009a"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","5f94f6d02628eef771fe4bb2d548af28"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/index.html","dc745730aa4e8e9ac9f41f0c0b10fadd"],["/js/anzhiyu/ai_abstract.js","bd7d0416a912651499efa1a2089a9fa0"],["/js/anzhiyu/comment_barrage.js","d27c413b80b8b250eb1493281299a4e3"],["/js/anzhiyu/people.js","19feb32bba8ba6faf0ec882112eb749b"],["/js/anzhiyu/random_friends_post.js","41796840c1aeb32f3407b426744953f5"],["/js/anzhiyu/right_click_menu.js","97b668396daaae5e05b11c7bfd612519"],["/js/main.js","736c8b13deaf2883426039e2897c8c08"],["/js/search/algolia.js","d6e42f82f4a683ff9ed2796b2839e5db"],["/js/search/local-search.js","408666da48024f36cdc803686fb19da9"],["/js/spoiler.js","656570ca16ebe658b46ef468b16f1bb5"],["/js/tw_cn.js","1ab93057e66c00a59bd33c93abd48932"],["/js/utils.js","bf86a9b13c8c46426f7e742165230372"],["/link/index.html","2bf6edc173b2474cc125a21be08cdbf2"],["/luckybohe/index.html","02b37a99f3e936efc25857ccd68bdf2c"],["/music/index.html","e21d3fa06e7eb4b9ab1b3294d94ac617"],["/pay.html","65667cd96d322d30c2b8654acc5f17c8"],["/privacy.html","cd422d9eaa1dae6013f2eb535f1a8d92"],["/sw-register.js","ff375f5bf3808a7c7cbe097e3b5b8029"],["/tags/Anzhiyu主题/index.html","0b40f0c0ce9614ec083e37256c4a728c"],["/tags/Armbian/index.html","bda31bbd3c6a0f52c6fc9dbcf773b16c"],["/tags/CasaOS/index.html","590308b09fb8568c257ef5d03270b1a4"],["/tags/Cloudflare/index.html","69796b4acf385286231d169522ba03e9"],["/tags/Docker/index.html","4d8681dfaf39d78fb53a9c76ecdffb53"],["/tags/Github/index.html","f8eef9fd598a6404b0b11e515bc97477"],["/tags/Hexo/index.html","47ba4215e31119e7790f5256eb5bb603"],["/tags/N1/index.html","9d24fcd904a75b8ef08a772ab2812e3b"],["/tags/OneNav/index.html","86b2718f659de30b0125f5c9411ce3ca"],["/tags/Shaarli/index.html","70011bbde65b285dc4345ec9b8e59bae"],["/tags/index.html","9bf75f362a4d7be375eb730afdeccf65"],["/tags/技术/index.html","9cdd3ac310efa6b00535508ba374195b"],["/tags/玩客云/index.html","51b4143881f31f2a3aaf2b3b009703b6"]];
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
