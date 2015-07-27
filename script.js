// ==UserScript==
// @name         Grooveshark Script
// @namespace    http://your.homepage/
// @version      0.1.2
// @description  enter something useful
// @author       Jeremy Mathon (adrijere on GitHub)
// @match        http://grooveshark.com/    
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

console.log("---> Init grooveshark script..");
window.setTimeout(main, 3000)

function main() {
    var pub = document.getElementsByClassName('capital');
    var id_p = $(pub[0]).attr("id");
    var id_p2 = $(pub[1]).attr("id");
    if (id_p) {
	document.getElementById(id_p).style.display = 'none';
    }
    if (id_p2) {
	document.getElementById(id_p2).style.display = 'none';
    }
    document.getElementById('capital-standalone-upgrade').style.display = 'none';
    var helper = document.getElementsByClassName('helper');
    $(helper[0]).attr("hidden", "true");
    console.log(window.location.href);
    setTimeout(main, 10000);
}