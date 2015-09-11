var loginAndRegister = new LoginAndRegister();
loginAndRegister.render();

function checkRegisterForm(){
	if(($('#submitForRegister').data('username') == "true") && ($('#submitForRegister').data('psw') == "true")
	($('#submitForRegister').data('rePsw') == "true") && ($('#submitForRegister').data('email') == "true"))
	{
		$('#submitForRegister').removeAttr("disabled");
	}
	else
	{
		$('#submitForRegister').attr("disabled", "disabled");
	}	

}