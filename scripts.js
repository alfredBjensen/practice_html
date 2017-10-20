$( document ).ready(function(){



});

function showSection(){
$(".example-section").fadeIn(2000);
}

setTimeout(
  function(){
    $(".example-section").css("border-bottom","1px solid black");
},3000);
}
