$( document ).ready(function(){

    //all code will go here
    showSection();

    showSectionArticle();


});

<<<<<<< HEAD
function showSection(){
$(".example-section").fadeIn(2000);
}

setTimeout(
  function(){
    $(".example-section").css("border-bottom","1px solid black");
},3000);
=======

function showSectionArticle(){
  $("#exampleArticle").delay(2000).fadeIn(1000);
}


function showSection(){

  $(".example-section").fadeIn(2000);


  setTimeout(
    function(){
      $(".example-section").css('border-bottom', "1px solid black");
    }, 3000);

>>>>>>> 003a5daed5cbd6444a3b20824eaaeca91a54c489
}
