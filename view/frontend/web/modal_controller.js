require(
    [
        'jquery'
    ],
    function($) {

      var dacodExternalLink = '';

      var anchors = document.getElementsByTagName('a');

	  for (var i=0; i<anchors.length; i++){


	  if(!((anchors[i].href.indexOf(window.location.hostname) >= 0) || anchors[i].href=="#" || anchors[i].href=="javascript:void(0)")){

	   anchors[i].setAttribute('data-target', '#myModal');
	   anchors[i].setAttribute('data-toggle', 'modal');
	   

	  }
	    
	  }

       $("a").on("click",function(event){


        	if(!(($(this).attr('href').indexOf(window.location.hostname) >= 0) || $(this).attr('href')=="#" || $(this).attr('href')=="javascript:void(0)")){

            	event.preventDefault();
            	dacodExternalLink = $(this).attr('href');


        }       	

        });

        $("#dacod-external-links-continue").on("click",function(event){

        	event.preventDefault();
        	window.open(dacodExternalLink,'_blank');

        });


        
    }
);
