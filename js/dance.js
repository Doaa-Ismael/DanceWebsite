var cur_slide = 0;
var sliders = document.getElementsByClassName("slider");
sliders[0].style.width = screen.width;
sliders[0].style.height = screen.height;

function showSlide(n)
{
	var sliders = document.getElementsByClassName("slide");
	if (n>=sliders.length)
		n = 0;
	else if (n<0) n = 2;
	for (var i = 0 ; i<sliders.length ; i++)
	{
		sliders[i].style.display = 'none';
	}
	sliders[n].style.display='block';
}
function plusSlide(n)
{
	showSlide(cur_slide+=n)
}

function autoSlider() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    cur_slide++;
    if (cur_slide  >= x.length) {cur_slide  = 0}
    x[cur_slide].style.display = "block";
    setTimeout(autoSlider, 3000);
}
autoSlider();
document.getElementsByClassName("packages .lesson div button").foreach (onclick (function () {

	document.getElementsByClassName("signup").style.display = "block";
	//addEventListener('click',function () {


}));
















