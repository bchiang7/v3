$(function(){const e=new Date,t=e.getHours(),n=t>=19||t<=7,o=document.querySelector("body"),c=document.getElementById("toggle"),d=document.getElementById("switch");n&&(d.checked=!0,o.classList.add("night")),c.addEventListener("click",function(){const e=d.checked;e?o.classList.remove("night"):o.classList.add("night")});const s=document.querySelector(".intro").offsetHeight,i=document.getElementById("top-button"),a=$("#top-button");window.addEventListener("scroll",function(){window.scrollY>s?a.fadeIn():a.fadeOut()},!1),i.addEventListener("click",function(){$("html, body").animate({scrollTop:0},500)});const u=document.querySelector(".emoji.wave-hand");u.addEventListener("mouseover",function(){u.classList.add("wave")}),u.addEventListener("mouseout",function(){u.classList.remove("wave")})});