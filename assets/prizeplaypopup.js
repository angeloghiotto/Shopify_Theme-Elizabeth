
    jQuery(document).ready(function(){
      var check;
      var tscript = document.getElementsByTagName('script');
      for (var i = tscript.length; i--;) {
        var script_src = tscript[i].src;
	    if(script_src != '' && script_src != undefined){
	    	if(script_src.search('/bootstrap.min.js') > 0){
	    		check = script_src.search('/bootstrap.min.js');
	    		break;
	    	}else if(script_src.search('/bootstrap.js') > 0){
	    		check = script_src.search('/bootstrap.js');
	    		break;
	    	}else{
	    		check = 0;
	    	}
	    }    
	  }
      // jQuery('script').each(function(){
      //   var scripts = jQuery(this).attr('src');
      //   if(scripts != undefined) {
      //     scripts = scripts.search('bootstrap');
      //     if(scripts > 0) {
      //       check = scripts;
      //       return false;
      //     }else{
      //       check = 0;
      //       return false;
      //     }
      //   }
      // }); 
      if(check <= 0) {
        //var script = '<link rel=stylesheet href=https://apps.thescorpiolab.com/PrizePlay/app/include/css/popupbootstrap.min.css><script src=https://apps.thescorpiolab.com/PrizePlay/app/include/js/popupjquery.min.js></script><script src=https://apps.thescorpiolab.com/PrizePlay/app/include/js/popupbootstrap.min.js></script>';
        //jQuery('head').append(script);
      } 
      var page = jQuery('body').attr('class');
      var storeName = 'nova-crystal.myshopify.com'; 
      var current_page = window.location.href;
      jQuery.ajax({
        type:'GET',
        url:'https://apps.thescorpiolab.com/PrizePlay/app/FrontPopUp.php',
        data:'storeName='+storeName+'&width='+screen.width+'&page='+current_page,
        success:function(data){
          jQuery('body').append(data);
        }
      });

    });
    