Competitions = new Mongo.Collection("competitions");
// simple-todos.js


console.log('Meteor console:');
Meteor.methods({
    getResult : function(err, res) {
        console.log('getResult: ' + res);
    }
});

if (Meteor.isServer) {
	Meteor.publish("competitions", function () {
	return Competitions.find();
	});

	if (Competitions.find().count() === 0) {
		Competitions.insert({
			title: 'Introducing Telescope',
			url: 'http://sachagreif.com/introducing-telescope/'
		});

		Competitions.insert({
			title: 'Meteor',
			url: 'http://meteor.com'
		});

		Competitions.insert({
			title: 'The Meteor Book',
			url: 'http://themeteorbook.com'
		});
	};
};
if (Meteor.isClient) {
	Meteor.subscribe("competitions");

	Template.body.helpers({
		competitions: function() {
			return Meteor.Competitions.find();
		}
	});
};