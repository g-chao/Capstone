var LoginAndRegister = Backbone.View.extend({
	el:"#loginAndRegisterForm",
	events:{
		'click #signUp':'showSignUpForm',
		'click #login':'showLogin',
		'click #submitForLogin':'submitForLogin',
	},
	showSignUpForm:function(ev){
		$('#loginForm').hide();
		$('#registerForm').show();

	},
	showLogin:function(ev){
		$('#loginForm').show();
		$('#registerForm').hide();

	},
	submitForLogin:function(ev){

		var userLogin = new UserLogin();

		var userDetails = {
			username: $('#usrname').val(),
			password: $('#psw').val(),
		};

		userLogin.save(userDetails,{
			success:function(response){
				console.log(response.toJSON());
			},
			error:function(response){
				alert(response.toJSON());
			}
		});

	},
	render:function(){
		var template = _.template($('#login-register-template').html());
		$("#loginAndRegisterForm").html(template());

		$('#loginForm').show();
		$('#registerForm').hide();

		$(document).ready(function(){
		    $("#myBtn").click(function(){
		        $("#myModal").modal();
		    });
		});
	}

});
