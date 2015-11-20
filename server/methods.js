Meteor.methods({
	votePost:function(postId){
		 Posts.update({_id:postId},{$set:{voted:true}});
	}
});
