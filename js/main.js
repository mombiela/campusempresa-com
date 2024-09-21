// Cookies
$(document).ready(function(){
	checkCookies();
	$("#btn_accept_cookies").click(accept);
	mathReload();
});
    
function checkCookies()
{
	var x = Cookies.get('cookies_informed');
	if (x == "OK") $("#cookies_adv").remove();
}

function accept()
{
	Cookies.set('cookies_informed', "OK", {expires: 365});
	$("#cookies_adv").remove();
}
