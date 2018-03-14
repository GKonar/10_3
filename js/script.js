$(function(){
  var carouselList = $("#carousel ul");
  var leftButton = $("#jsButton-Left");
  var rightButton = $("#jsButton-Right");
 

//Zmiana slajdu w lewo
  leftButton.click(function(){
  
  carouselList.animate({'marginLeft': -400}, 1000, moveFirstSlide );

  function moveFirstSlide() {
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
  lastItem.after(firstItem);
  carouselList.css({marginLeft:0});
  }

});

//Zmiana slajdu w prawo
  rightButton.click(function(){

  carouselList.animate({'marginLeft': 400}, 1000, moveFirstSlide);
  
  function moveFirstSlide() {
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
  lastItem.after(firstItem);
  carouselList.css({marginLeft:0})
  
  }

});

});


