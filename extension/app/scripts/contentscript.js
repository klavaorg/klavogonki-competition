'use strict';

	// console.clear();

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
	// localforage.setItem('publicCompetition', publicCompetition);
	// setDriver(localforage.LOCALSTORAGE);
	chrome.extension.getBackgroundPage().localforage.setItem('keys', 'some value', function(err, value) {
		console.log(value);
	});

// console.log('\'Hello \'Allo! Content script');