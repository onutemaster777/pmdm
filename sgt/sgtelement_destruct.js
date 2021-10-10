// Danielius Paulavičius
// Created by SgtDiscordWorld
// Created in 2021-10-09
// sgtelement_destruct.js
// Animated Function Style Destruction - The Code

// version v1.0.1

"use strict"

function Destruction(){
	var eee = prompt('1. Explode\n2. Simple Remove\n3. Rotate\n4. Stone\n5. Minecraft\n6. Freeze & Destroy\n7. Magic Wand\n8. Ban Hammer\n9. Fire\n10. Push')
	if(eee==="1"){
		var x, i;   x = document.querySelectorAll("*");   for (i = 0; i < x.length; i++) {x[i].style.cursor = "url(https://onutemaster777.github.io/pmdm/sgt/bomb.png), auto"}
		addEventListener('click', function(ev) {var eea1 = 0; var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/explode.mp3');aud.play(); var el = ev.target, rfs = el.style.transition = "2s"; el.style.transform = "scale(" + Math.floor(Math.random()*9) + ")"; rfs.call(el);});
	}
	else
	if(eee==="2"){
		addEventListener('click', function(ev) {var eea1 = 0; var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/disappear.mp3');aud.play(); var el = ev.target, rfs = el.remove(); rfs.call(el);});
	}
	else
	if(eee==="3"){
		var rotations = ['45','0','90','180','240','360','480',Math.random()*360]
		var x, i;   x = document.querySelectorAll("*");   for (i = 0; i < x.length; i++) {x[i].style.cursor = "url(https://onutemaster777.github.io/pmdm/sgt/can.png), auto"}
		addEventListener('click', function(ev) {var eea1 = 0; var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/spin.mp3');aud.play(); var el = ev.target, rfs = el.style.transition = "1s"; el.style.transform = "rotate(" + rotations[Math.floor(Math.random()*rotations.length)] + "deg)"; rfs.call(el);});
	}
	else
	if(eee==="4"){
		var x, i;   x = document.querySelectorAll("*");   for (i = 0; i < x.length; i++) {x[i].style.cursor = "url(https://onutemaster777.github.io/pmdm/sgt/stone.png), auto"}
		addEventListener('click', function(ev) {var eea1 = 0; var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/stone.mp3');aud.play(); var el = ev.target, rfs = el.style.transition = "2s"; el.style.background = "silver"; el.style.textAlign = "center"; el.style.padding = "0px"; el.insertAdjacentHTML('beforeend','<br>This element was stoned.'); el.style.color = "silver"; rfs.call(el);});
	}
	else
	if(eee==="5"){
		var score = 0;
		document.title = "Score: " + score;
		var x, i;   x = document.querySelectorAll("*");   for (i = 0; i < x.length; i++) {x[i].style.cursor = "url(https://onutemaster777.github.io/pmdm/sgt/mc.png), auto"}
		var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/mysterious.mp3');aud.play();
		setInterval(function(){var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/mysterious.mp3');aud.play();}, 21000)
		var eeeaa = Math.floor(Math.random()*9);
		addEventListener('click', function(ev) {var eea1 = 0; for (let i = 0; i < Math.floor(Math.random()*4); i++) {score++}; document.title = "Score: " + score; var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/dig.mp3');aud.play(); var el = ev.target, rfs = el.style.transition = "1s"; el.style.transform = "rotate(" + Math.random()*360 + "deg)"; eeeaa = Math.floor(Math.random()*9); if(eeeaa===2){el.style.transition = "1s"; var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/break.mp3');aud.play(); el.style.transform = "scaleY(0." + Math.floor(Math.random()*10) + ")";for (let i = 0; i < Math.floor(Math.random()*400); i++) {score++};document.title = "Score: " + score;setTimeout(function(){for (let i = 0; i < el.children.length; i++) {score++};document.title = "Bonus Score: " + score;el.remove()}, 1000)}; rfs.call(el);});
	}
	else
	if(eee==="6"){
		var x, i;   x = document.querySelectorAll("*");   for (i = 0; i < x.length; i++) {x[i].style.cursor = "url(https://onutemaster777.github.io/pmdm/sgt/ice.png), auto"}
		var eeeaa = Math.floor(Math.random()*4);
		addEventListener('click', function(ev) {var eea1 = 0; var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/freeze.mp3');aud.play(); var el = ev.target, rfs = el.style.transition = "1s"; el.style.background = "cyan"; el.style.color = "cyan"; el.style.border = "1ox dashed blue"; eeeaa = Math.floor(Math.random()*9); if(eeeaa===2){el.style.transition = "1s"; var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/harp.mp3');aud.play(); setTimeout(function(){el.style.transform = "scale(0.01)";}, Math.random()*2000); setTimeout(function(){var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/ice_end.mp3');aud.play(); el.remove()}, 5000)}; rfs.call(el);});
	}
	else
	if(eee==="7"){
		var x, i;   x = document.querySelectorAll("*");   for (i = 0; i < x.length; i++) {x[i].style.cursor = "url(https://onutemaster777.github.io/pmdm/sgt/wand.png), auto"}
		addEventListener('click', function(ev) {var eea1 = 0; var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/magicwand.mp3');aud.play(); var el = ev.target, rfs = el.style.transition = "1.5s"; el.style.transform = "scale(0.1)"; el.style.opacity = "0"; setTimeout(function(){el.remove()}, 1500); rfs.call(el);});
	}
	else
	if(eee==="8"){
		var x, i;   x = document.querySelectorAll("*");   for (i = 0; i < x.length; i++) {x[i].style.cursor = "url(https://onutemaster777.github.io/pmdm/sgt/ban.png), auto"}
		addEventListener('click', function(ev) {var eea1 = 0; var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/ban.mp3');aud.play(); var el = ev.target, rfs = el.style.transition = "1s"; el.style.background = "red"; el.style.color = "white"; el.style.fontFamily = "Eurostile, Verdana, sans-serif"; document.title = "THIS PAGE IS BANNED"; el.style.textAlign = "center"; el.style.fontSize = Math.floor(Math.random()*200) + "px"; el.innerHTML = "<p>BANNED</p>"; rfs.call(el);});
	}
	else
	if(eee==="9"){
		var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/burning.mp3');aud.play();
		setInterval(function(){var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/burning.mp3');aud.play();}, 18000)
		document.body.style.backgroundImage = "url('https://onutemaster777.github.io/pmdm/sgt/flame.jpg')";
		document.body.style.backgroundRepeat = "repeat";
		document.body.style.backgroundPosition = "center";
		var x, i;   x = document.querySelectorAll("*");   for (i = 0; i < x.length; i++) {x[i].style.cursor = "url(https://onutemaster777.github.io/pmdm/sgt/fire.png), auto"}
		addEventListener('click', function(ev) {var eea1 = 0; var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/fire.mp3');aud.play(); var el = ev.target, rfs = el.style.transition = "3s"; el.style.color = "red"; el.style.background = "red"; el.style.padding = "20px 20px"; el.style.transform = "scaleY(" + Math.floor(Math.random()*4) + ")"; rfs.call(el);});
	}
	else
	if(eee==="10"){
		var x, i;   x = document.querySelectorAll("*");   for (i = 0; i < x.length; i++) {x[i].style.cursor = "url(https://onutemaster777.github.io/pmdm/sgt/move.png), auto"}
		addEventListener('click', function(ev) {var eea1 = 0; var aud = new Audio('https://onutemaster777.github.io/pmdm/sgt/move.mp3');aud.play(); var el = ev.target, rfs = el.style.transition = "5s"; el.style.position = "fixed"; el.style.left = Math.floor(Math.random()*1001) + "cm"; el.style.perspective = Math.floor(Math.random()*1001) + "px"; el.style.transform = "scale(" + Math.floor(Math.random()*10) + ", " + Math.floor(Math.random()*10) + ")"; el.style.top = "" + Math.floor(Math.random()*1001) + "cm"; rfs.call(el);});
	}
}
// end of script
