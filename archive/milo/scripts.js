$(document).ready(function(){

    $(".menu").click(function(){
        $(".nav-popup").toggleClass("open");
        $(".menu").toggleClass("close");
        $('video.reel').trigger('pause');
    });

    $(".cta").click(function(){
        $(".nav-popup").toggleClass("open");
        $(".menu").toggleClass("close");
        $(".video-reel").toggleClass("play");
    });

    $(".menu").click(function(){
        $(".video-reel").removeClass("play");
    });

    $(".title").click(function(){
        $(".nav-popup").removeClass("open");
        $(".menu").removeClass("close");
    });


	function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	$("#section_1").click(function() {
	   scrollToAnchor('section_1');
	});

	$("#section_2").click(function() {
	   scrollToAnchor('section_2');
	});

	$("#section_3").click(function() {
	   scrollToAnchor('section_3');
	});

    $("#section_4").click(function() {
       scrollToAnchor('section_4');
    });

    $("#section_5").click(function() {
       scrollToAnchor('section_5');
    });



	$(".cta").click(function() {
    var video = $("#myVideo").get(0);
    video.play();

    // $(this).css("visibility", "hidden");
    // return false;
	});

	$("#myVideo").bind("pause ended", function() {
	    $("#videocover").css("visibility", "visible");
	});

});
		