// wii remake internet channel js

function searchPopup(){document.getElementById('searchKey').style.display = "block";}

var ee = ['key.wav','key2.wav']
function newKeyS(){var kk = new Audio(ee[Math.floor(Math.random()*ee.length)]);kk.play()}

function okSearch(){if(document.getElementById('searchKB').value === ""){document.getElementById('operaifm').src = "error.html"} else {document.getElementById('operaifm').src = document.getElementById('searchKB').value;}}
function okFullscreen(){var ll = document.getElementById('operaifm'); ll.requestFullscreen()}