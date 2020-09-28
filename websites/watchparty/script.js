



			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);

			// We listen to the resize event
			window.addEventListener('resize', () => {
				let vh = window.innerHeight * 0.01;
				document.documentElement.style.setProperty('--vh', `${vh}px`);
			});


		    $(window).scroll(function() {    
			    var scrollTop = $(window).scrollTop();

			    if (scrollTop > 1) {
			        $("body").addClass("scrolled");
			        $(".chat").removeClass("open");
			        $("body").removeClass("chat-open");
			    } else {
			        $("body").removeClass("scrolled");
			    }
			});

			$(function() { 
				$('.scrollToTop').on("click",function(){
				      $('html,body').animate({ scrollTop: 0 }, 499);
				      setTimeout(function () { 
					    $(".chat").addClass("open");
						$("body").addClass("chat-open");
					}, 500);
				      
				});
			});

						$('video').on('ended', function () {
						  this.load();
						  this.play();
						});

						$(function() { 
							$(".tog-product-list-view").click(function() { 
								$(".product-tiles").toggleClass("list-view-open");          
							});
						});

						$(function() { 
							$(".tog-content-list-view").click(function() { 
								$(".movie-tiles").toggleClass("list-view-open");          
							});
						});


						$(function() { 
							$(".mob-search-icon").click(function() { 
								$(".search-widget-container").toggleClass("search-open");  
								$("body").removeClass("chat-open");    
								$(".chat").removeClass("open");  
								// $(".search-widget-container").addClass("open");
								// $(".search-container input").focus();          
							});
						});


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

						$(document).ready(function(){

							$("#ccmusic").click(function(){
							$(".cott-status").text("Live Music");
							$(".cott-text").text("Travis Scott Summer Mix");
						    $(".ccvideo").removeClass("selectedvideo"); 
						    $(".ccmusic").addClass("selectedvideo"); 
							})

							$("#ccmovies").click(function(){
							$(".cott-status").text("Live Movies");
							$(".cott-text").text("Avengers - Endgame");
						    $(".ccvideo").removeClass("selectedvideo"); 
						    $(".ccmovies").addClass("selectedvideo"); 
							})

							$("#ccshows").click(function(){
							$(".cott-status").text("Live Shows");
							$(".cott-text").text("The Office - S02E04");
						    $(".ccvideo").removeClass("selectedvideo"); 
						    $(".ccshows").addClass("selectedvideo"); 
							})

							$("#ccgaming").click(function(){
							$(".cott-status").text("Live Gaming");
							$(".cott-text").text("PS5 Console Design Leak");
						    $(".ccvideo").removeClass("selectedvideo"); 
						    $(".ccgaming").addClass("selectedvideo"); 
							})

							$("#ccsports").click(function(){
							$(".cott-status").text("Live Sports");
							$(".cott-text").text("Remembering Kobe Bryant");
						    $(".ccvideo").removeClass("selectedvideo"); 
						    $(".ccsports").addClass("selectedvideo"); 
							})

							$("#ccnews").click(function(){
							$(".cott-status").text("Live News");
							$(".cott-text").text("Has Trump trumped himself?");
						    $(".ccvideo").removeClass("selectedvideo"); 
						    $(".ccnews").addClass("selectedvideo"); 
							})

							$("#ccstocks").click(function(){
							$(".cott-status").text("Live Stocks");
							$(".cott-text").text("Bitcoin at an all time high!");
						    $(".ccvideo").removeClass("selectedvideo"); 
						    $(".ccstocks").addClass("selectedvideo"); 
							})

							$("#cctech").click(function(){
							$(".cott-status").text("Live Tech");
							$(".cott-text").text("UberEats finally at a tipping point?");
						    $(".ccvideo").removeClass("selectedvideo"); 
						    $(".cctech").addClass("selectedvideo"); 
							})

							$("#ccdance").click(function(){
							$(".cott-status").text("Live Dance");
							$(".cott-text").text("The WOAH dance challenge");
						    $(".ccvideo").removeClass("selectedvideo"); 
						    $(".ccdance").addClass("selectedvideo"); 
							})

							$("#ccfood").click(function(){
							$(".cott-status").text("Live Food");
							$(".cott-text").text("Gordon Ramsy - Hell's Kitchen");
						    $(".ccvideo").removeClass("selectedvideo"); 
						    $(".ccfood").addClass("selectedvideo"); 
							})

							$("#ccart").click(function(){
							$(".cott-status").text("Live Art");
							$(".cott-text").text("The Life and times of famous Painters");
						    $(".ccvideo").removeClass("selectedvideo"); 
						    $(".ccart").addClass("selectedvideo"); 
							})

							$("#ccscience").click(function(){
							$(".cott-status").text("Live Science");
							$(".cott-text").text("Bill Nye back at it agin!");
						    $(".ccvideo").removeClass("selectedvideo"); 
						    $(".ccscience").addClass("selectedvideo"); 
							})

							$("#ccspace").click(function(){
							$(".cott-status").text("Live Space");
							$(".cott-text").text("SpaceX Celebrates Launch");
						    $(".ccvideo").removeClass("selectedvideo"); 
						    $(".ccspace").addClass("selectedvideo"); 
							})

						});

						$(function() { 
						  $(".open-search").click(function() { 
						    $(".search-widget-container").addClass("open");
						    $(".search-container input").focus();      
						  });
						});

						$(function() { 
						  $("#mainsearch .close-search").click(function() {  
						    $("#mainsearch.search-widget-container").removeClass("open");     
						  });
						});

						$(document).click(function(event) { 
						  $target = $(event.target);
						  if(!$target.closest('.search-widget-container').length && 
						  $('.search-widget-container').is(":visible")) {
						    $('.search-widget-container').removeClass("open");
						  }        
						});

						$(document).ready(function(){
						    // $(".search").click(function(){
						    //     $(".search").toggleClass("open");
						    // });

						    $(".feed, .close").click(function(){
						        $(".chat").toggleClass("open");
						        $("body").toggleClass("chat-open");
						    });

						    $(".vidwrap .tile").click(function(){
						    	$(".vidwrap .tile").removeClass("selected");
						        $(this).toggleClass("selected");
						        $(".vidwrap").toggleClass("switchvid");
						        // $("body").toggleClass("chat-open");
						    });
						});

						var coll = document.getElementsByClassName("collapsible");
						var i;

						for (i = 0; i < coll.length; i++) {
						  coll[i].addEventListener("click", function() {
						    this.classList.toggle("active");
						    var content = this.nextElementSibling;
						    if (content.style.display === "block") {
						      content.style.display = "none";
						    } else {
						      content.style.display = "block";
						    }
						  });
						}

						$(function () {
					      $('form').on('submit', function (event) {
					        event.preventDefault();
					        var message = $('.message').first().clone();
					        message.find('.speech').text($('input.usercomment').val());
					        message.prependTo('.log');
					        $('input').val('');
					      });
					    });

						$(document).ready(function(){
						    $(".movie-tiles .arrow-left").click(function(){
						        $(".movie-scroll-widget").animate({scrollLeft: "-="+1200});
						    });
						    $(".movie-tiles .arrow-right").click(function(){
						        $(".movie-scroll-widget").animate({scrollLeft: "+="+1200});
						    });        
						});

						$(document).ready(function(){
						    $(".product-tiles .arrow-left").click(function(){
						        $(".product-scroll-widget").animate({scrollLeft: "-="+1200});
						    });
						    $(".product-tiles .arrow-right").click(function(){
						        $(".product-scroll-widget").animate({scrollLeft: "+="+1200});
						    });        
						});

						$(document).ready(function(){
						    $(".vidwrap .arrow-left").click(function(){
						        $(".splash-scroll-widget").animate({scrollLeft: "-="+400});
						    });
						    $(".vidwrap .arrow-right").click(function(){
						        $(".splash-scroll-widget").animate({scrollLeft: "+="+400});
						    });        
						});
