$(document).ready(function(){
  $("#datepicker").datepicker({
    changeMonth: true, changeYear: true
  });

  $("#type_select").buttonset();
  $("button:submit").button();

  $("#slide_dist").slider({
    value: 0,
    min: 0,
    max: 500,
    step: 10,
    slide: function(event, ui){
      $("#distance").val(ui.value);
    }
  });

  $("#distance").val($("#slide_dist").slider("value"));

  $("#slide_weight").slider({
    value: 0,
    min: 0,
    max: 5000,
    step: 5,
    slide: function(event, ui){
      $("#weight").val(ui.value);
    }
  });

  $("#weight").val($("#slide_weight").slider("value"));

  $("#slide_height").slider({
    value: 0,
    min: 0,
    max: 20,
    step: 1,
    slide: function(event, ui){
      $("#height").val(ui.value);
    }
  });

  $("#height").val($("#slide_height").slider("value"));

  $("#slide_lat").slider({
    value: 0,
    min: -90,
    max: 90,
    step: 0.00001,
    slide: function(event, ui){
      $("#latitude").val(ui.value);
    }
  });

  $("#latitude").val($("#slide_lat").slider("value"));

  $("#slide_long").slider({
    value: 0,
    min:-180,
    max: 180,
    step: 0.00001,
    slide: function(event, ui){
      $("#longitude").val(ui.value);
    }
  });

  $("#longitude").val($("#slide_long").slider("value"));

  $("#red, #green, #blue").slider({
    orientation: "horizontal",
    range:"min",
    min: 0,
    max: 255,
    value: 127,
    step: 1,
    slide: refreshSwatch,
    change: refreshSwatch
  });

  $("#red").slider("value",127);
  $("#green").slider("value",127);
  $("#blue").slider("value",127);



  function refreshSwatch(){
    var red = $("#red").slider("value");
    var green = $("#green").slider("value");
    var blue = $("#blue").slider("value");
    var my_rgb = "rgb("+red+","+green+","+blue+")";
    $("#swatch").css("background-color",my_rgb);
    $("#red_val").val(red);
    $("#green_val").val(green);
    $("#blue_val").val(blue);
    $("#color_val").val(my_rgb);
  }

  $("#frmAddSighting").submit(function(){
		return false;
	});

	$('#btnSave').click(function() {

		var data = $("#frmAddSighting :input").serializeArray();

		$.post($("#frmAddSighting").attr('action'), data, function(json){

			if (json.status == "fail") {
				alert(json.message);
			}else if (json.status == "success") {
				alert(json.message);
			}else{alert("Nothing Happened");}
		}, "json");

	});	

});
