var posts=["/22331.html","/22328.html","/22327.html","/22326.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}var friend_link_list=[{name:"anzhiyu主题",link:"https://blog.anheyu.com/",avatar:"https://pic.imgdb.cn/item/6698cba9d9c307b7e9789a70.jpg",descr:"生活明朗，万物可爱",siteshot:"https://pic.imgdb.cn/item/6698cbaad9c307b7e9789ae6.jpg"},{name:"安知鱼",link:"https://blog.anheyu.com/",avatar:"https://pic.imgdb.cn/item/6698cba9d9c307b7e9789a70.jpg",descr:"生活明朗，万物可爱",siteshot:"https://pic.imgdb.cn/item/6698cbaad9c307b7e9789ae6.jpg",color:"vip",tag:"技术"},{name:"安知鱼",link:"https://blog.anheyu.com/",avatar:"https://pic.imgdb.cn/item/6698cba9d9c307b7e9789a70.jpg",descr:"生活明朗，万物可爱",recommend:!0}],refreshNum=1;function friendChainRandomTransmission(){const t=Math.floor(Math.random()*friend_link_list.length),{name:n,link:e}=friend_link_list.splice(t,1)[0];Snackbar.show({text:"点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「"+n+"」",duration:8e3,pos:"top-center",actionText:"前往",onActionClick:function(t){t.style.opacity=0,window.open(e,"_blank")}})}function addFriendLinksInFooter(){var t=document.getElementById("footer-random-friends-btn");if(!t)return;t.style.opacity="0.2",t.style.transitionDuration="0.3s",t.style.transform="rotate("+360*refreshNum+++"deg)";const n=[];let e=0;for(;friend_link_list.length&&e<3;){const t=Math.floor(Math.random()*friend_link_list.length),{name:a,link:i,avatar:o}=friend_link_list.splice(t,1)[0];n.push({name:a,link:i,avatar:o}),e++}let a=n.map((({name:t,link:n})=>"<a class='footer-item' href='"+n+"' target='_blank' rel='noopener nofollow'>"+t+"</a>")).join("");a+="<a class='footer-item' href='/link/'>更多</a>",document.getElementById("friend-links-in-footer").innerHTML=a,setTimeout((()=>{t.style.opacity="1"}),300)}