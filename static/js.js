/* Based on @prx's script available there : https://ybad.name/js.js */
/* License : CC-BY 4.0 */
/* night mode */
/* each getElement declaration erase and add a special class "night" in the CSS file */
function setNightMode() {
	document.body.className = "night";
	document.getElementById("switch").innerHTML = "Mode sombre";
	document.getElementsByTagName("nav")[0].className = "night";
	document.getElementsByTagName("footer")[0].className = "night center";
}
function setDayMode() {
	document.body.className = "";
	document.getElementById("switch").innerHTML = "Mode clair";
	document.getElementsByTagName("nav")[0].className = "";
	document.getElementsByTagName("footer")[0].className = "center";
}
/* this is the switch */
function toggleNightMode() {
    if (localStorage.nightMode == 'off') {
        setNightMode();
        localStorage.setItem('nightMode', 'on');
    } 
    else {
        setDayMode();
        localStorage.setItem('nightMode', 'off');
    }
}
/* this allows a persistent theming */
function setcolormode() {
	if (typeof (Storage) !== 'undefined') {
		if (localStorage.nightMode) {
			if (localStorage.nightMode == 'on') {
				setNightMode();
			}
		} 
		else {
			localStorage.setItem('nightMode', 'off');
		}
	} else {
		/* Sorry! No Web Storage support..*/
	}
}
/* startall */
function start() {
	setcolormode();
}
/* let's load the thing ! */
window.onload = function(){start()};