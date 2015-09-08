var PersonalInfoView = Backbone.View.extend({
	el:"#personal",
	events:{
		'click #modifyPersonalInfo':'modifyPersonalInfo',
		'click #cancelModifyPersonalInfo':'cancelModifyPersonalInfo',
		'click #saveModifyPersonalInfo':'saveModifyPersonalInfo',
	},
	modifyPersonalInfo:function(){
		$('#personalInfo').hide();
		$('#personalInforModify').show();
	},
	cancelModifyPersonalInfo:function(){
		this.render();
	},
	saveModifyPersonalInfo:function(ev){
		var user = new User();
		var userProfile = new UserProfile();
		
		var userProfileDetails = {
			username: user.username,
			firstname: $('#firstname').val(),
		    lastname: $('#lastname').val(),
		    gender: $("input[type='radio'].gender:checked").val(),
		    age: $('#age').val(),
		};
		
		userProfile.save(userProfileDetails,{
			success:function(){				
				var personalInfoView = new PersonalInfoView();
                personalInfoView.render();				
			},
		})		
	},
	
	
	render:function(){
		var template = _.template($('#userCenterPersonalInfo-template').html()); 
		var user = new User();
		var userProfile = new UserProfile();
		userProfile.fetch({data:$.param({username: user.username}),
			success: function(userProfile){
				$("#personal").html(template({username:userProfile.attributes[0].username,firstname:userProfile.attributes[0].firstname,
				lastname:userProfile.attributes[0].lastname,gender:userProfile.attributes[0].gender,age:userProfile.attributes[0].age,date:                userProfile.attributes[0].date}));
			},
		});	
		            
        
	},
		
})