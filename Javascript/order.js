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

  /* JS for loot boxes (TBD: add perks as a random variable after box opened and do not allow others to be opened after) */
  function checkOpen() {
	var allBoxes = $('.box-list li button');
	var allOpenBoxes = $('.box-list li button.open');
	var allBoxesAreOpen = (allBoxes.length === allOpenBoxes.length);
	
	if(allBoxesAreOpen)
		{
			$('#again').show();
		}
}

$(document).ready(function(){ 
    
    var object = ["$5 off subscription","Free 1 month trial", "Free 30 days trial"];
    var box = "";
    var redeemed = 0;
    var add = 1
    var original = 0;

    /* If perk has been redeemed*/
    if(redeemed == 1){
        $('.box-list li').on('click', '.box', function (){
            box = $(this);       
            if(box.hasClass('open'))
                {
                    alert("Box has been opened!")
                    return;
                }
        alert("Perk has been redeemed")
        return
            
        });
        }


    if (redeemed == 0){
        $('.box-list li').on('click', '.box', function (){
            box = $(this);
            /* Random perk generator and notice, referenced from codepen: https://codepen.io/susier2016/pen/BKKywy*/
            var perk = object[Math.floor(Math.random() * object.length)]
            if(box.hasClass('open'))
                {
                    alert("Box has been opened!")
                    return;
                }
            alert("You have won: " +  perk);
            box.addClass('click');
            setTimeout(function (){
                box.removeClass('click');
                box.toggleClass('closed open');		
                checkOpen();
            }, 700);
            redeemed = add + original;
            alert(redeemed);

        });
    }




   

	
});
