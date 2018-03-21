$(function(){
  var carouselList = $("#carousel ul");
  var leftButton = $("#jsButton-Left");
  var rightButton = $("#jsButton-Right");
  var carouselDots = $("#jsDots ul");

//Zmiana slajdu w lewo
  leftButton.click(function(){
  
  carouselList.animate({'marginLeft': -800}, 1000, moveFirstSlide );

  function moveFirstSlide() {
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
  lastItem.after(firstItem);
  carouselList.css({marginLeft:-400}); // zaczyna się na -400 (ul w style.css) i wraca do -400
    }

  });

//Zmiana slajdu w prawo
  rightButton.click(function(){

  carouselList.animate({'marginLeft': 0}, 1000, moveLastSlide);
  
  function moveLastSlide() {
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
  firstItem.before(lastItem);
  carouselList.css({marginLeft:-400}) // kończy się na - 400 
    }

  }); 

  

  $('#jsDots li').click(function(){
    var poprzedniSlajd = $(".active").data("pic");
    $('#jsDots li').removeClass("active");
   $(this).addClass("active");
   var aktualnySlajd = $(this).data("pic");
  });  
  

});

