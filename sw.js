"use strict";var precacheConfig=[["/22326.html","e07c8a1756cb82c6d16ef942b1b596f9"],["/22327.html","3f6072a51f497f05aec690bdf765b61a"],["/22328.html","6276b285a08f1b12797d19f9f9a76fff"],["/22330.html","996a86d8ffe0bfad0628f8d21e19728d"],["/22331.html","c89fb1c1ceefb72ce35744d9319c0712"],["/22332.html","8881a49ba00704f3a5f1e24b82824792"],["/404.html","b23bf0f0402c13155df1add11181c093"],["/abcdtodo.html","975518e9a6dcfbc99b105edb26cd171e"],["/about/index.html","bb8fc71eb5a78789aab74a0261964b18"],["/album/index.html","c44596c320aa04fc37139ed4d3111ecd"],["/anzhiyu/random.js","907a89f09a8ac5dbf711324a5163705e"],["/archives/2024/03/index.html","02c827230d0227b4744e1f06f59ede0d"],["/archives/2024/07/index.html","d04a0a6051d6b5dda7d117c24b4c816d"],["/archives/2024/index.html","80ab01d633e5aa38003e0aacd341b459"],["/archives/index.html","53ee040ac38f23b64b790889b299b2ad"],["/categories/docker/index.html","cb6cb8154b5ccc8cc4fd985dcee21a2c"],["/categories/docker/书签管理/index.html","e6db4d1cb5e26d281242b39bbfac4cc6"],["/categories/index.html","a36a6db8ed1c04693ba60db11e587bbd"],["/categories/技术/NAS/index.html","37ae2ed5f23d1d58fdfa7135f4a70187"],["/categories/技术/index.html","5c7bcf448d2d61d6690176980b3402dc"],["/comments/index.html","1f40a2cf904c02eec365b84a4dfa1696"],["/cookies.html","8ef9779e97aaa0c1b39591480641deb6"],["/copyright.html","a4622f70d9bc4da2f8aa8810af118af8"],["/css/index.css","aef4ab6d94d6e5ee5641eee94204302a"],["/css/spoiler.css","0d25ebe46b5d9c8149ff53d519c278e5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dailyPhoto/index.html","73e99d94edfbf7c37ea8a448d6efb1af"],["/equipment/index.html","e82d2d6bdad11fe902c6ba42cf5bf91e"],["/essay/index.html","76acd4a5de2c3fccade479b1900a25bb"],["/ganjuelianghao/index.html","dc558c6b9bb39afa6c2579bea577eaaf"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","5f94f6d02628eef771fe4bb2d548af28"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/index.html","ef9bea631fb4381b54bee8a83038b031"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","b2bbde9d96fc4ded6c7a163038818ae5"],["/link/index.html","163a6512344639d63309f4d1e3576b0a"],["/luckybohe/index.html","ced168fa8e7ca8f44d19b87fc15245f6"],["/music/index.html","f04417e2567023b275931d825e9947e8"],["/pay.html","1ee735e28f6475f388cd071dcfb55f6c"],["/privacy.html","c817b44a62fe7f25a86ce71f2ff1d60d"],["/sw-register.js","e0728fb8f16e76ab98f586f73f331a2b"],["/tags/Armbian/index.html","906ff274e94ec5019c9d3eb9933016eb"],["/tags/CasaOS/index.html","96250749f38af71b3a27926f27be009e"],["/tags/Docker/index.html","1c95aa45b8545956cc1a1f9f91c80ed6"],["/tags/N1/index.html","a69e9b1f2e2160f7cb808160a77039a1"],["/tags/OneNav/index.html","4e102004dcfae3249bd8332925daf8c5"],["/tags/Shaarli/index.html","b37cce46a6733d559888461607b6296d"],["/tags/index.html","74b943fb6e1fe503495df91ee8842e75"],["/tags/技术/index.html","70e127ffa140ea893f77cfbff5ec35f0"],["/tags/玩客云/index.html","aa6cc81f5822e23e793b33123817ee0f"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some((function(e){return t.match(e)}))},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return a.every((function(a){return!a.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),t.toString()},hashParamName=(addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,!1);return[c.toString(),n]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then((function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then((function(a){return e.put(t,a)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(t){return Promise.all(t.map((function(t){if(!a.has(t.url))return e.delete(t)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";!(a=urlsToCacheKeys.has(t))&&c&&(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(t)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)})))}}));