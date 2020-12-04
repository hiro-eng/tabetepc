if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    location.href = '/tabete/';
}


window.onload = function(){
  setInterval(function(){
    var dd = new Date();
    document.getElementById("T1").innerHTML = dd.toLocaleString();
  },1000);
}

$(document).ready(function(){
 
  
  $(".header-list").click(function(){
       $(".header-list").html("<b>walkerjpjp@gmail.com</b>");

});

  $("#teck").hover(
    function(){
   $("#teck").text(" >>>>>Welcome!!!!!");
 },function(){
    $("#teck").text(" by Teck-Teck World");
 });

 $("h1").hover(
   function(){
  $("h1").html("TABETE");
},function(){
   $("h2").html("あなたのお気に入りのwebページを作ります");
});

$("#btn1").hover(
  function(){
 $("#btn1").text("準備中");
},function(){
  $("#btn1").text("LINE窓口はこちら");
});

$("#btn2").hover(
  function(){
 $("#btn2").text("CLICK!");
},function(){
  $("#btn2").text("twitter窓口はこちら");
});

    $("#T1").click(function(){
        $("#T1").text("2021年３月まで");
    });
    
    
})
