

$(document).ready(function()
{
  $('.slick-slider').slick({
    infinite: true,
    slidesToShow: 3,
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