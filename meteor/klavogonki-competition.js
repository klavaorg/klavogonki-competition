Tasks = new Mongo.Collection("competitions");
// simple-todos.js
if (Meteor.isClient) {
  // This code only runs on the client
  // Template.body.helpers({
  //   competitions: [
  //     { text: "This is task 1" },
  //     { text: "This is task 2" },
  //     { text: "This is task 3" }
  //   ]
  // });
}

// Meteor.methods({
//     getResult : function() {
//         console.log('getResult');
//     });
// });