// counter starts at 0
Session.setDefault('type', '0');

Template.hello.onRendered(function () {
    var that = this;
    this.autorun(function(){
        Meteor.subscribe("posts",Session.get('type'));
    })
});

Template.hello.helpers({
    posts: function(){
        return Posts.find({type:Session.get('type')});
    },
    oldPosts: function(){
        return Posts.find({old:true});
    }
});

Template.hello.events({
    'click button': function () {
        // increment the counter when button is clicked
        Posts.insert({name:"nuevo",type:Session.get('type')});
        Posts.insert({name:"viejo",old:true});
    },
    'change #select':function(e,t){
        Session.set('type',e.currentTarget.value);
    }
});
