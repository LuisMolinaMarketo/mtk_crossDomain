<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/2000/REC-xhtml1-200000126/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
 
<!-- SYSTEM CSS - DO NOT EDIT -->
<link rel="stylesheet" type="text/css" media="screen" href="http://localhost/demo/commun/bootstrap-3.3.0/dist/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" media="screen" href="http://localhost/demo/commun/bootstrap-3.3.0/dist/css/bootstrap-theme.min.css" />

<!-- SYSTEM JAVASCRIPT - DO NOT EDIT -->
<script type="text/javascript">
function fieldValidate(field) {
  /* call Mkto.setError(field, message) and return false to mark a field value invalid */
  /* return 'skip' to bypass the built-in validations */
  return true;
}
</script>

<!-- Jquery for fancy things!-->
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>


<script src="sender.js"></script>

</script>
<script language="JavaScript" src="https://na-lon02.marketo.com/js/public/jquery-latest.min.js" type="text/javascript"></script>
   <script>
    // to make fancy buttons.  Uses noConflict just in case
     var $jQ = jQuery.noConflict();

     // Use jQuery via $j(...)
     $jQ(document).ready(function(){

       
       $jQ("#mktFrmSubmit").wrap("<div class='buttonSubmit'></div>");
       $jQ(".buttonSubmit").prepend("<span></span>");
     });
   </script>
</head>
<body id="bodyId" class="mktEditable" align="center" >
<div class="container ">
<div class="jumbotron">
	<h1>Sender Page</h1>
<div class="panel panel-default">
  <div class="panel-body">
		<h3>
		<a href="receiver.php">Link to receiver - relative path</a>
		</h3>
</div>
  </div>
  <div class="panel panel-default">
  <div class="panel-body">
		<h3>
		<a href="http://localhost/demo/solutions/crossdomain/sender.php">Link to receiver - with domain</a>
		</h3>
</div>
  </div><div class="panel panel-default">
  <div class="panel-body">
		<h3>
		<a href="receiver.php?parm1=1&param2=2">Link to receiver with GET parameters</a>
		</h3>
</div>
  </div>	</div>
</div>
  </div>
</div>
</div>
</div>
<script type="text/javascript" src="//munchkin.marketo.net//munchkin.js"></script><script>Munchkin.init('184-XFT-949', {customName: 'cross-test_send', wsInfo: 'j0hRdNjP'});</script>

</body>
</html>