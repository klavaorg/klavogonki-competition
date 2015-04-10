'use strict';

$('#competition-start').click(function(){
	chrome.extension.getBackgroundPage().competitionStart();
});
$('#competition-add').click(function(){
	chrome.extension.getBackgroundPage().competitionAdd();
});
$('#competition-repeat').click(function(){
	chrome.extension.getBackgroundPage().competitionRepeat();
});
$('#competition-stop').click(function(){
	chrome.extension.getBackgroundPage().competitionStop();
});