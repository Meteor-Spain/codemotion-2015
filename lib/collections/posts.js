Posts = new Mongo.Collection("Posts");

Posts.allow({
	insert: function(){
		return true;
	}
});
