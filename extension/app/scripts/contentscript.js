'use strict';

	// console.clear();


// localforage.setItem('publicCompetition', publicCompetition);
// setDriver(localforage.LOCALSTORAGE);
// localforage.setItem('keys', 'some value', function(err, value) {
// 	console.log(value);
// });

// console.log('\'Hello \'Allo! Content script');


// var publicCompetition = [];

// METEOR
// var ddp = new MeteorDdp("ws://localhost:3000/websocket");
// // TEST CONNECTION IS MADE
// ddp.connect().done(function() {
//   console.log('Connected!');
// });
// ddp.connect().then(function () {
// 	ddp.subscribe("competition");
// });

// $('#competition-add').click(function(){
// 	$(this).toggleClass('suenot2');
// });


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.greeting == "competitionStart") {
		console.log('competitionStart');
	};
	if (request.greeting == "competitionAdd") {
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
		console.log('competitionAdd');
		// sendResponse({farewell: "goodbye"});
		// отправляем данные метеору
        // Meteor.call('reportSpotting',spotting, function(err,res){
        //     if (err){ 
        //         console.error(err);
        //     } else {

        //         console.log('server response', res);

        //         Archive.add(message.from);
        //         showSpottingNoification(res.newSpotting);

        //         sendResponse({ 
        //             newSpotting : res.newSpotting || ApplicationSettings.alwaysNewSpotting,
        //             needsClaim : res.needsClaim,
        //             claimUrl : ApplicationSettings.explorerRegistrationUrl + Identity.getUserId(),
        //             siteUrl : ApplicationSettings.siteUrl
        //         });
        //     }

        //     console.log(res);
        // });
	};
	if (request.greeting == "competitionRepeat") {
		console.log('competitionRepeat');
	};
	if (request.greeting == "competitionStop") {
		console.log('competitionStop');
	};
});

// METEOR
var ddp = new MeteorDdp("ws://localhost:3000/websocket");
// // TEST CONNECTION IS MADE
ddp.connect().done(function() {
  console.log('Connected!');
});
Meteor.call('getResult', function(err, result) {
  if (result) {
    return console.log(result);
  }
});