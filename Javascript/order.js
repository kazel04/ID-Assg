var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  
}

//JS for button description//
$(".contact-btn").click(function () {
	$(this).addClass("clicked");
});

$(".close").click(function (e) {
	$(".clicked").removeClass("clicked");
	e.stopPropagation();
	$(".send-clicked").removeClass("send-clicked");
	e.stopPropagation();
});

$(".send-btn").click(function () {
	$(this).addClass("send-clicked");
	setTimeout(function () {
		$(".clicked").removeClass("clicked");

		$(".send-clicked").removeClass("send-clicked");
	}, 5000);
});

$(".msg-close").click(function (e) {
	$(".send-clicked").removeClass("send-clicked");
	e.stopPropagation();
});

/* JS for tab menu and its contents, referenced from codepen: https://codepen.io/derekjp/pen/pPqwXJ */

$("document").ready(function(){
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
  });
  
  $(".tab-slider--nav li").click(function() {
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();
      if($(this).attr("rel") == "tab2"){
          $('.tab-slider--tabs').addClass('slide');
      }else{
          $('.tab-slider--tabs').removeClass('slide');
      }
    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
  });
