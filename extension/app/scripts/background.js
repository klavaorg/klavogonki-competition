'use strict';
// setDriver(localforage.LOCALSTORAGE);
// localforage.getItem('keys', function(err, value) {
// 	console.log(value);
// });


// localforage.key(1).then(console.log);
// localforage.keys().then(console.log);


// chrome.runtime.onInstalled.addListener(function (details) {
//   console.log('previousVersion', details.previousVersion);
// });

// chrome.tabs.onUpdated.addListener(function (tabId) {
//   chrome.pageAction.show(tabId);
// });


function checkForValidUrl(tabId, changeInfo, tab) {
// If the tabs url starts with "http://specificsite.com"...
	if (tab.url.indexOf('http://klavogonki.ru') == 0) {
		// ... show the page action.
		chrome.pageAction.show(tabId);
	};
	if (tab.url.indexOf('http://localhost:9000') == 0) {
		// ... show the page action.
		chrome.pageAction.show(tabId);
	};
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);





// //Connect to App
// ddp.connect().then(function(){

// 	//Subscribe to a publication - in this case I publish the collection 'posts' as 'all_posts'
// 	ddp.subscribe('all_posts');

// 	//Watch that collection
// 	ddp.watch('posts', function (changedDoc, message){

// 		if (message === "added")
// 			posts++;
// 		if (message === "removed")
// 			posts--;

// 		//Update the browser badge to show how many posts there are
// 		chrome.browserAction.setBadgeText({text: posts.toString()});
// 	});
// });

// chrome.browserAction.setBadgeText({text: '5'});

var competitionStart = function() {
	console.log('cometitionStart');
}
var competitionAdd = function() {
	console.log('cometitionAdd');
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "competitionAdd"}, function(response) {
			console.log(response.farewell);
		});
	});
}
var competitionRepeat = function() {
	console.log('cometitionRepeat');
}
var competitionStop = function() {
	console.log('cometitionStop');
}

// METEOR
// var ddp = new MeteorDdp("ws://localhost:3000/websocket");
// // // TEST CONNECTION IS MADE
// ddp.connect().done(function() {
//   console.log('Connected!');
// });