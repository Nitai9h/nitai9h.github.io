/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/22326.html","b434548cdd26f2d5c33d162c8a46138b"],["/22327.html","0a57cc9e683053bc024c825897e6bea6"],["/22328.html","95d945a593875d20b2a211f5e73fc76a"],["/22330.html","817ff24130f651984438405d47615f7e"],["/22331.html","41ecb5669d800d17403258d9ebe2ac0b"],["/22332.html","df30e3c53454f155287561f601cdeec6"],["/404.html","f9961e8027931e161e0d01c4196461cf"],["/about/index.html","177fdfc2c2372417b1a08c62e7c4f1f7"],["/album/index.html","197e63a1306121e55e5f57bf587fdce9"],["/anzhiyu/random.js","261e119ca1cca3d5516d47f84a308d4d"],["/archives/2024/03/index.html","5f3a7e54a10337f27713af6cd770155e"],["/archives/2024/07/index.html","b9065e0e531c768b10287cfeae6f14bb"],["/archives/2024/index.html","8d86844ccdd9d33dd70fe7a091864123"],["/archives/index.html","abb9df55294f1f59f191894646658891"],["/baidu_verify_codeva-yBQQAyLIRM.html","4ddb6fa0a1f161f2fcd8158299f43213"],["/categories/Hexo/Linux-Debian/index.html","ee6a63e79c9f9c0256b44ff6dfb54b3f"],["/categories/Hexo/git/index.html","836d9e20e74193194a1c91273c1b49c2"],["/categories/Hexo/index.html","339ef9b292d859c932f8f341f69a7937"],["/categories/docker/index.html","0eb2f8dbbdb1637dff09c112193f683a"],["/categories/docker/书签管理/index.html","89165747333c9d976cd02b3434351a57"],["/categories/index.html","b46f6fa3aea64cd7612819abd8c1d0a6"],["/categories/技术/NAS/index.html","1c25c9d42d3a64a42351cbcaf66fed1f"],["/categories/技术/index.html","74af55a38580c1691fff39d8298ac115"],["/comments/index.html","e07088f583b45370134c4e45e6a25f0b"],["/cookies.html","daa5db94de42ced96667a9027c4ba762"],["/copyright.html","d1adceaf61acae39c9f9a721533b955b"],["/css/index.css","67dc6671536b14860f7c835879f59a78"],["/css/spoiler.css","a4f2d0b4410654bb9e05440dc546ed2a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dailyPhoto/index.html","7d01830ede3488bc9c860426e8b6ef2b"],["/equipment/index.html","e0137dc8b1c5211c730c07bf62dac51f"],["/essay/index.html","ae02c56c350da8b3328054f5e48d8cf6"],["/fonts/font.css","7927c3b44ddba80d5b89c92675848232"],["/ganjuelianghao/index.html","3a8cf9e6d1426d6d8ce79113440cebe2"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","5f94f6d02628eef771fe4bb2d548af28"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/index.html","3e30ce3a0e4f0fa544817225956834a7"],["/js/anzhiyu/ai_abstract.js","bd7d0416a912651499efa1a2089a9fa0"],["/js/anzhiyu/comment_barrage.js","d27c413b80b8b250eb1493281299a4e3"],["/js/anzhiyu/people.js","19feb32bba8ba6faf0ec882112eb749b"],["/js/anzhiyu/random_friends_post.js","41796840c1aeb32f3407b426744953f5"],["/js/anzhiyu/right_click_menu.js","97b668396daaae5e05b11c7bfd612519"],["/js/main.js","736c8b13deaf2883426039e2897c8c08"],["/js/search/algolia.js","d6e42f82f4a683ff9ed2796b2839e5db"],["/js/search/local-search.js","408666da48024f36cdc803686fb19da9"],["/js/spoiler.js","656570ca16ebe658b46ef468b16f1bb5"],["/js/tw_cn.js","1ab93057e66c00a59bd33c93abd48932"],["/js/utils.js","bf86a9b13c8c46426f7e742165230372"],["/link/index.html","d829050c71e0eb91ff27632db312936e"],["/luckybohe/index.html","45a7a2f252e1b82c5de1fdc0bad55930"],["/music/index.html","72dc55120bcaf6d03350ade6b3228259"],["/pay.html","edae634d9259ab69c56f992ebdd7cb39"],["/privacy.html","49a5a57a82c53b35f1ba283c7c4df740"],["/sw-register.js","2503455def7af5eb65fbff2ce96f8675"],["/tags/Anzhiyu主题/index.html","012ead3581a9e5cd3e4508a46592871b"],["/tags/Armbian/index.html","b8b88f819c7c1d690e3a6c94da94dcbb"],["/tags/CasaOS/index.html","c37f597562bdc46aeed8dcc7b19de8c1"],["/tags/Cloudflare/index.html","48910b0ef729ba6951f778db9b0dacc0"],["/tags/Docker/index.html","ec47f98244f3bbc45a0778a23f1f889f"],["/tags/Github/index.html","4e8bd3b693ed96ac903d4c3c0fe4119e"],["/tags/Hexo/index.html","b34d89fd5056ed9aa657a620076525f7"],["/tags/N1/index.html","17b6ab638aedd968358bab12a901839f"],["/tags/OneNav/index.html","6d0d83e2fe6a03018fc78d2a1f934305"],["/tags/Shaarli/index.html","830ff6d89c9dc6a1695dd55c3a858bdb"],["/tags/index.html","a5b0f8fcc9d588a67279864f0660266a"],["/tags/技术/index.html","5692556266a617ffa9d30a654814d182"],["/tags/玩客云/index.html","c4af50619aaa3c0b33f117f8c486bac5"]];
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
