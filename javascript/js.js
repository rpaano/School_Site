var rev = "fwd";
    function titlebar(val){
        var msg  = "Sacred Heart School - Hijas de Jesus";
        var res = " ";
        var speed = 100;
        var pos = val;
        msg = msg;
        var le = msg.length;
        if(rev == "fwd"){
            if(pos < le){
                pos = pos+1;
                scroll = msg.substr(0,pos);
                document.title = scroll;
                timer = window.setTimeout("titlebar("+pos+")",speed);
            }
            else {
                rev = "bwd";
                timer = window.setTimeout("titlebar("+pos+")",speed);
            }
        }
        else {
            if(pos > 0) {
                pos = pos-1;
                var ale = le-pos;
                scrol = msg.substr(ale,le);
                document.title = scrol;
                timer = window.setTimeout("titlebar("+pos+")",speed);
            }
            else {
                rev = "fwd";
                timer = window.setTimeout("titlebar("+pos+")",speed);
            }
        }
    }
    titlebar(0);

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
  dots[slideIndex-1].className += " active";
}