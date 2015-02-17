Meteor.startup(function() {

	return Meteor.methods({

		removeAllMessages: function() {
			return Messages.remove({});
		}

	});

});

// Publishing messages
/*Meteor.publish('messages', function(limit) {
  if (limit > Messages.find().count()) {
    limit = 0;
  }

  return Messages.find({ }, { limit: limit });
});

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