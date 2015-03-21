/**
 * Created by emddutton on 3/15/2015.
 */
$(document).ready(function(){
    $("textarea").focus();

    function clearScreen(){
      $("button").hide();
      $(".header").hide();
      $(".box").hide();
      $("body").css('background-color', 'black');
  }


   $("button").on('click', function(){
       clearScreen();
       var scrollText = $("textarea#text").val();
       console.log(scrollText);
       $(".teleprompt").text(scrollText).show();
       $(".teleprompt").addClass("marquee");
   })

});
