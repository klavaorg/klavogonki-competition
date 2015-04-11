'use strict';

// METEOR
var ddp = new MeteorDdp("ws://localhost:3000/websocket");
// TEST CONNECTION IS MADE
ddp.connect().then(function() {
	console.log('Connected!');
	ddp.subscribe('competitions');
	// var competitions = ddp.getCollection('competitions');
	// console.log(ddp);
	// console.log(ddp.competitions);
	ddp.watch("competitions", function (changedDoc, message) {
		console.log(changedDoc);
		console.log(message);
	});
});
// CREATE COLLECTION
// var publicCompetitions = new ddp.Collection('competitions', ddp);
// ddp.subscribe('competitions', function() {
// 	console.log('Data list starts here:');
// 	publicCompetitions.find().forEach(function(data){console.log(data)});
// });


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.greeting == "competitionStart") {
		console.log('competitionStart button clicked');
	};
	if (request.greeting == "competitionAdd") {
		console.log('competitionAdd button clicked');
		var publicCompetition = [];
		$('#players .player').each(function(){
			var user = {};
			user.nick = $(this).find('.name_content .nick_content a').text();
			user.profile = $(this).find('.name_content .nick_content a').attr('href');
			user.rang = $(this).find('.name_content .nick_content a').attr('class')[4];
			user.rangColor = $(this).find('.name_content .nick_content a').css('color');
			user.avatar = $(this).find('.name_content th img').attr('src');
			user.speed = $(this).find('.stats div:nth-child(2) .bitmore .bitmore').text();
			user.errors = $(this).find('.stats div:nth-child(3) .bitmore:nth-child(1) .bitmore').text();
			user.carBg = $(this).find('.car td:nth-child(2) .imgcont').css('background');
			publicCompetition.push(user);
		});
		console.log(publicCompetition);
		// ddp.subscribe('competitions');
		// ddp.call('getResult', publicCompetition, function(err,res){
		// 	if (err){
		// 		console.error(err);
		// 	} else {

		// 		console.log('server response', res);

		// 		Archive.add(message.from);
		// 		showSpottingNoification(res.newSpotting);

		// 		sendResponse({ 
		// 			newSpotting : res.newSpotting || ApplicationSettings.alwaysNewSpotting,
		// 			needsClaim : res.needsClaim,
		// 			claimUrl : ApplicationSettings.explorerRegistrationUrl + Identity.getUserId(),
		// 			siteUrl : ApplicationSettings.siteUrl
		// 		});
		// 	}

		// 	console.log(res);
		// });
	};
	if (request.greeting == "competitionRepeat") {
		console.log('competitionRepeat button clicked');
	};
	if (request.greeting == "competitionStop") {
		console.log('competitionStop button clicked');
	};
});