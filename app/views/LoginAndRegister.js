var LoginAndRegister = Backbone.View.extend({
	el:"#loginAndRegisterForm",
	events:{
		'click #signUp':'showSignUpForm',
		'click #login':'showLogin',
		'click #submitForLogin':'submitForLogin',
		'click #logOutBtn':'logOut',
		'click #submitForRegister':'submitForRegister'
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
			success:function(model,response){
				setCookie("username", response.username, 0.05);
				location.reload();
			},
			error:function(model,response){
				alert(response.responseJSON.Message);
			}
		});

	},
	logOut:function(){
		document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
		this.render();
	},
	submitForRegister:function(){
		
	},
	render:function(){
		var template = _.template($('#login-register-template').html());
		$("#loginAndRegisterForm").html(template());
		$('#loginForm').show();
		$('#registerForm').hide();
		$(document).ready(function(){
		    $("#loginBtn").click(function(){
		        $("#myModal").modal();
		    });
		});	
		var user = getCookie("username");
		if (user != "") 
		{
			$("#loginBtn").hide();
			$("#loginDiv").show();
			$("#displayUsername").html(user);
		} 
		else 
		{
			$("#loginBtn").show();
			$("#loginDiv").hide();
		}
	}
});
