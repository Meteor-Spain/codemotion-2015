Meteor.publish("oldPosts", function(){
	return Posts.find({old:true});
});

Meteor.publish("posts", function(type){
	return Posts.find({type:type});
});
