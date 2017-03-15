$(document).ready(function() {

  $(".guess_box").click(checkForCode);
  hideCode();
  $(".guess_box").hover(
    function(){
      $(this).addClass("my_hover");
    },
    function(){
      $(this).removeClass("my_hover");
    }
  );
});


function hideCode(){
  var numRand=getRandom(4);
  $(".guess_box").each(function(index,value){
    if(numRand==index){
      $(this).append("<span id='has_discount'></span>");
      return false;
    }
  });
}

function checkForCode() {
  var discount;
  if($.contains(this, document.getElementById("has_discount"))) {
    var my_num=getRandom(99)+1;
    discount = "<p>Your code: CODE"+my_num+"</p>";
  }  else {
    discount="<p>抱歉，沒有折扣</p>";
  }

  $(".guess_box").each(function(){
    if($.contains(this, document.getElementById("has_discount"))) {
      $(this).addClass("discount");
    } else {
      $(this).addClass("no_discount");
    }
    $(this).unbind();
  });

  $("#result").append(discount);
}

function getRandom(num) {
  var my_num=Math.floor(Math.random()*num);
  return my_num;
}
