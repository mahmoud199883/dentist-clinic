

$(document).ready(function()
{
  $('.slick-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:800,
    centerMode:true,
    dots:true,
    focusOnSelect:true,
    mobileFirst:true
  });
})














let abotsection =$(".about").offset().top;
$(window).scroll(function()
{
  let myscroll =$(window).scrollTop();


  if(myscroll>abotsection)
  {
    $(".scrolltopbtn").fadeIn(1000);

  }
  else
  {
    $(".scrolltopbtn").fadeOut(1000);
  }
})

$(".scrolltopbtn").click(function()
{
  $("html,body").animate({scrollTop:"0"},2000)
})



$("a").click(function()
{
  let attrref =$(this).attr("href");
  let sectionoffset=$(attrref).offset().top;
  $("html,body").animate({scrollTop:sectionoffset},2000)
})



$('.carousel').carousel({
  interval: 2000
})

//validations inputs

var firstnameinput=document.getElementById('firstnameinput');

var myregex=/^[a-z]{3,10}/;

firstnameinput.addEventListener('keyup',function()
{
  if(myregex.test(firstnameinput.value)==false)
  {
    firstnameinput.classList.add('is-invalid');
    firstnameinput.classList.remove('is-valid');
  }
  else
  {
    firstnameinput.classList.add('is-valid');
    firstnameinput.classList.remove('is-invalid');
  }
})

var lastname=document.getElementById('lastnameinput');

var myregex=/^[a-z]{3,10}/;

lastname.addEventListener('keyup',function()
{
  if(myregex.test(lastname.value)==false)
  {
    lastname.classList.add('is-invalid');
    lastname.classList.remove('is-valid');
  }
  else
  {
    lastname.classList.add('is-valid');
    lastname.classList.remove('is-invalid');
  }
})
