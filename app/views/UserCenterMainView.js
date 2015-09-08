var UserCenterMainView = Backbone.View.extend({
	el:"#main",
	render:function(){
		var template = _.template($('#userCenter-template').html()); 
		var user = new User();	            
        $("#main").html(template({username:user.username}));
	},
});
