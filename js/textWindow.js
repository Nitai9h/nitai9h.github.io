var popup=document.createElement("div"),button=document.createElement("button");button.id="close",button.textContent="X",popup.id="popup",popup.className="popup";var title=document.createElement("h1");title.textContent="<欢迎！>";var content=document.createElement("p");content.textContent="<为了及时获取更新内容，建议进入网站后手动刷新一次>",popup.appendChild(title),popup.appendChild(content),document.body.insertAdjacentHTML("afterbegin",'<div id="popup" class="popup"><h1>欢迎！</h1><p>为了及时获取更新内容，建议进入网站后手动刷新一次</p></div>'),document.body.insertAdjacentElement("afterbegin",button);popup=document.getElementById("popup");var close=document.getElementById("close");function show(){popup.style.opacity=1,popup.animate([{transform:"translateX(110%)"},{transform:"translateX(0)"}],{duration:1e3,fill:"forwards",easing:"ease-in-out"})}function hide(){popup.animate([{transform:"translateX(0)"},{transform:"translateX(110%)"}],{duration:1e3,fill:"forwards",easing:"ease-in-out"})}window.onload=function(){show()},popup.insertBefore(close,popup.firstChild),close.onclick=function(){hide()};