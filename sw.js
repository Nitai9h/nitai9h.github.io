/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/22326.html","36954f427be7d55082b4a781516841c8"],["/22327.html","9dfa0a8834f0bdb60a8fd7d54ac8b4ee"],["/22328.html","f6afeca57c76a9d4fe00955407f2c660"],["/22330.html","58ec673cd2a87b961de58b7159111c81"],["/404.html","a1d5abd841919b4b9bb74beec0bd2851"],["/about/index.html","00f446f10dbce755c6c6ab359d02472d"],["/album/index.html","041804853b8bdeacfeb645632bfb9b4a"],["/anzhiyu/random.js","b41bb9ce3c1f85480ee9b2ef22eab7e6"],["/archives/2024/03/index.html","379642b34be96ea5a57e63b7d3d3af78"],["/archives/2024/07/index.html","b9c614c99db74440815ed1361dbc3e83"],["/archives/2024/index.html","f8932a457efc5b630b280f16c26af9c7"],["/archives/index.html","86eb3607365b8b35d6d429c0628394c6"],["/baidu_verify_codeva-yBQQAyLIRM.html","4ddb6fa0a1f161f2fcd8158299f43213"],["/categories/Hexo/Linux-Debian/index.html","65f640e4017a0ccf48a563ccfe23a8e1"],["/categories/Hexo/index.html","e767594082a1f2b5e531bc197c4864c8"],["/categories/index.html","fdee43be71d1ebde9b48112ecfdb28db"],["/categories/技术/NAS/index.html","069884f7ba552a2196039cf64735d7c6"],["/categories/技术/index.html","432929044a3f0cb431a8fb08901e4ac4"],["/comments/index.html","3f17698c88ef9468bf70cb1450603cb0"],["/cookies.html","f9a24dcfe30a672ad74ad55c8096d79f"],["/copyright.html","6e1d1a3730fd08cc9fa03fe96108b5c6"],["/css/index.css","dba3a605d2065e8877f3e9f6ce78b5ae"],["/css/spoiler.css","a4f2d0b4410654bb9e05440dc546ed2a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dailyPhoto/index.html","e9c305984fefc5f273122fa07ddec50f"],["/equipment/index.html","65fc6aff22dbc42959c38530ab9274d6"],["/essay/index.html","1bc2ef03f8953f14b12d61c186c04669"],["/fonts/font.css","7927c3b44ddba80d5b89c92675848232"],["/ganjuelianghao/index.html","dbee6b005d228d2f366a588eb18c9af7"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","5f94f6d02628eef771fe4bb2d548af28"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/index.html","481d18f84fb835b5ff320a1fe4a023a6"],["/js/anzhiyu/ai_abstract.js","bd7d0416a912651499efa1a2089a9fa0"],["/js/anzhiyu/comment_barrage.js","d27c413b80b8b250eb1493281299a4e3"],["/js/anzhiyu/people.js","19feb32bba8ba6faf0ec882112eb749b"],["/js/anzhiyu/random_friends_post.js","41796840c1aeb32f3407b426744953f5"],["/js/anzhiyu/right_click_menu.js","97b668396daaae5e05b11c7bfd612519"],["/js/main.js","736c8b13deaf2883426039e2897c8c08"],["/js/search/algolia.js","d6e42f82f4a683ff9ed2796b2839e5db"],["/js/search/local-search.js","408666da48024f36cdc803686fb19da9"],["/js/spoiler.js","656570ca16ebe658b46ef468b16f1bb5"],["/js/tw_cn.js","1ab93057e66c00a59bd33c93abd48932"],["/js/utils.js","bf86a9b13c8c46426f7e742165230372"],["/link/index.html","52580e850ee5e72d632c287f0a92cee0"],["/luckybohe/index.html","8ab0633e8c54ccc06b1bce7f8b32f5e5"],["/music/index.html","21dea9aeba9f4701e197492e7ddf6afc"],["/pay.html","c15e25062d875a6268df78b0775b5524"],["/privacy.html","fa0062f3493e9ddff95bc57467262dab"],["/sw-register.js","d752ea7c66baa239d063d63342edc8f3"],["/tags/Anzhiyu主题/index.html","d6c2e49976da37ab694de27656348100"],["/tags/Armbian/index.html","e72fce2eba6945c225c739b98ff82ac7"],["/tags/CasaOS/index.html","9a5ac5b4e898e0e0d8eb8ee4da031725"],["/tags/Hexo/index.html","1fede65a0be6aada8358a7a6ac8a0f13"],["/tags/N1/index.html","518e17c02a419d39b0be8567d147dd92"],["/tags/index.html","2a70c3d2104bf85e62926786d98a7a63"],["/tags/技术/index.html","3ccce5aac1aa3a4b2379b16288c7ad8c"],["/tags/玩客云/index.html","f8080031197afcb77d82ccabb875df99"]];
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
