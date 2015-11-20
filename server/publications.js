Meteor.publish("oldPosts", function(){
	return Posts.find();
});

Meteor.publish("posts", function(type){
	return Posts.find({type:type});
});
