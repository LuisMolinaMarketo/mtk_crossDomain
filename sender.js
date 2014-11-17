
	function readCookie(name) {
		var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
					while (c.charAt(0) == ' ') c = c.substring(1, c.length);
					if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}
	


$(document).ready(function(){

	setTimeout(function(){
		url= $("a").attr("href");

		mkto_cookie = readCookie("_mkto_trk");
		console.log('Cookie2: ' + mkto_cookie);
		
		mkto_cookie= mkto_cookie.replace(/id:/g, 'id_mkto=');
		mkto_cookie= mkto_cookie.replace(/token:/g, 'token_mkto=');
		
		$("a").each(function(){
			url= $(this).attr("href");
			if (url.indexOf("?") > -1){
			url= url+ "&" + mkto_cookie;
			}else{
			url= url+ "?" + mkto_cookie;
			}
		    $(this).attr("href", url);
			
		});

	}, 2000
	);
	
});

