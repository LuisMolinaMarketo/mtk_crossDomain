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


    function GetUrlValue(VarSearch) {
        var retValue = "";

        var SearchString = window.location.search.substring(1);

        var VariableArray = SearchString.split('&');
        for (var i = 0; i < VariableArray.length; i++) {
            var KeyValuePair = VariableArray[i].split('=');


            if (KeyValuePair[0] == VarSearch) {
                retValue = KeyValuePair[1];
                break;
            }
        }

        return (retValue);
    }


    function getPath(pathname){
        var retValue;
	var parts= pathname.split('/');
		
		
	if (parts.length==0){
	  retValue= "";
	} else
	{
		
	   retValue= parts[1];
		
	
			for(var i= 2; i< (parts.length -1); i++)
			{
				retValue= retValue  + '/' + parts[i];
				//alert(retValue);
			}
		}
		
		return retValue;
	};


    var $jQ = jQuery.noConflict();

    // Use jQuery via $j(...)
    $jQ(document).ready(function () {

        id = GetUrlValue('id_mkto');
        token = GetUrlValue('token_mkto');
		console.log('Cookie2: ' + id);



        //Create Cookie
        var d = new Date();
        d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();

		

        var cookieData = "id:" + id + "&token:" + token + "; " + expires;
        var cookieName = "_mkto_trk";

		

        if (id != '') {

            document.cookie = cookieName + "=" + cookieData + ';path=/';
        } else {
            //alert("No cookie was sent");
        }


    });