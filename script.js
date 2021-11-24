
	$(function() { 
		$(".tog-mob-nav").click(function() { 
			$(".mob-nav").toggleClass("open-mob-nav");     
		});
	});


	$(function() { 

	  $(".tog-modal").click(function() { 
	    $(".modal").toggleClass("open");      
	  });

	  $(".log-in-btn").click(function() { 
	    $(".modal").removeClass("sign-up-modal");      
	    $(".modal").addClass("log-in-modal");      
	  });

	  $(".sign-up-btn, .send-message-form").click(function() { 
	    $(".modal").removeClass("log-in-modal");      
	    $(".modal").addClass("sign-up-modal");      
	  });

	});