// ==UserScript==
// @name         LSS Manager Add-in
// @namespace    https://phoenixcrew.net/
// @version      3.x (Autoupdate)
// @description  Mit der Tastatur Alarmieren oder sonstiges
// @author       PhoenixHell
// @match        http://www.leitstellenspiel.de/
// @match        https://www.leitstellenspiel.de/
// @match        http://www.leitstellenspiel.de/*
// @match        https://www.leitstellenspiel.de/*
// @grant        none
// @run          document-start
// ==/UserScript==

if(typeof(jQuery) == 'undefined')
{
	throw new Error("LSS-Manager-LSTinfo: No jQuery!");
}
$('head').append('<script id="lss_manager_addon_lstinfo" src="https://lab.phoenixcrew.net/phoenixhell/lss-manager-addin/raw/master/lssm-lstinfo.js" type="text/javascript"></script>');