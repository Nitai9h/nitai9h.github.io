"use strict";var precacheConfig=[["/22326.html","fb6323e17ed5b9356765351a61745ccb"],["/22327.html","6476dcfb78a798234b43f26a2058ad5b"],["/22328.html","d25f5ad3e885a0dbf0f7496b53cbf0a4"],["/22330.html","b274ab5370397f1af7bd5d9d445df1cc"],["/404.html","0cc5acf69fe4fa62b5a9c093dbfb6c67"],["/about/index.html","c9fba0775b8a23f2b0363b6819c23e5a"],["/album/index.html","171edfaf341e93ca1af15967d3532327"],["/anzhiyu/random.js","65f4108eb74af882a3153a5e752efea6"],["/archives/2024/03/index.html","860d949aa105a406c6969135af5a202e"],["/archives/2024/07/index.html","9143c05063e6d184efcfc0056b561899"],["/archives/2024/index.html","2ac4809e41fb912ac5b2d10a84d0356a"],["/archives/index.html","16558b994f21fbba7c665d2071f403e1"],["/categories/Hexo/Linux-Debian/index.html","9ebbffeaefcdf80db74353e96fdf9147"],["/categories/Hexo/index.html","e29bb1813bdc10aef6d6ff3f9303f032"],["/categories/index.html","e04afeb156e2f3938ac55e94c569541e"],["/categories/技术/NAS/index.html","aa9f8442e2d590950adff4aa8682bec7"],["/categories/技术/index.html","b640386de85f545475a73b329445ee66"],["/comments/index.html","a91535834c9736d6f4aea648ab0a3c72"],["/cookies.html","d5bbc4b053ac04f3d823daf029d2d8d6"],["/copyright.html","b73969f334142fd785ea3c4deb5f7fda"],["/css/index.css","384e220ae4b07a998d01a8e598f42589"],["/css/spoiler.css","0d25ebe46b5d9c8149ff53d519c278e5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dailyPhoto/index.html","13c68782c9f45d3474fe7a0609748550"],["/equipment/index.html","d126d723283234dc4e0eefb709e5289d"],["/essay/index.html","ef85f3329dc2b1107bf80a93a8a17e6a"],["/ganjuelianghao/index.html","e71ee8d5ba1b8fa44bfe728c9634e0af"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","5f94f6d02628eef771fe4bb2d548af28"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/index.html","c2686e3b63c4a700571147e8c1d0ffdc"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","b2bbde9d96fc4ded6c7a163038818ae5"],["/link/index.html","1044ef7d3763d30d60f0bb06c9679f67"],["/luckybohe/index.html","2fce655e4f9544b25b0ef4f76c0ee0bc"],["/music/index.html","507b0f81b0b026e6efbd8afb2e1cee7b"],["/pay.html","5e1665e0fe7cae65b6568e2a0b194f59"],["/privacy.html","1098a142041f791931377220f7f06d24"],["/sw-register.js","9d08096467b994595f7e52f0d2483882"],["/tags/Anzhiyu主题/index.html","2e23f0802e23424a9d71533fcec4e627"],["/tags/Armbian/index.html","23dea9eb666df26a613d6e1d37b26ac1"],["/tags/CasaOS/index.html","4ec6c6afe59e60111f1d89378ba0b14b"],["/tags/Hexo/index.html","c81884d68b50494a57dfd765eaee1810"],["/tags/N1/index.html","1cc70684d5df278d228a0a7d6e6d3147"],["/tags/index.html","0e3c4943daff7574222cd14182790ec6"],["/tags/技术/index.html","5376bdd41a9b53f2deb62eea60351556"],["/tags/玩客云/index.html","09549ec9a54fc8913b5d54094ad8a379"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some((function(e){return t.match(e)}))},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return a.every((function(a){return!a.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),t.toString()},hashParamName=(addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then((function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then((function(a){return e.put(t,a)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(t){return Promise.all(t.map((function(t){if(!a.has(t.url))return e.delete(t)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";!(a=urlsToCacheKeys.has(t))&&n&&(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(t)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)})))}}));