Meteor.publish('jobs', function(limit) {
	return Jobs.find({}, {sort: {createdAt: -1}});
});
// Meteor.startup(function() {

// 	return Meteor.methods({

// 		removeAllMessages: function() {
// 			return Messages.remove({});
// 		}

// 	});

// });

// Publishing messages

/*
// Publishing replies
Meteor.publish('replies', function(limit) {
	return Replies.find();
});

// Publishing user
Meteor.publish('userData', function(limit){
	return Meteor.users.find(this.userId, {fields: {
        services: 1,
    }});
});

Meteor.publish('replyVotes', function(){
	return ReplyVotes.find();
})*/