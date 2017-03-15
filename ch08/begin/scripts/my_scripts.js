
$(document).ready(function(){
	var repeat = true;
	var FREQ = 10000;

	getXMLRacers();
	startAJAXcalls();

	$("#btnStart").click(function(){
		repeat = true;
		startAJAXcalls();
		showFrequency();
	});

	$("#btnStop").click(function(){
		repeat = false;
		$("#freq").html("Update paused")
	});



	function getXMLRacers(){
		$.ajax({
			url: "finishers.xml",
			cache: false,
			dataType: "xml",
			success: function(xml){
				$("#finishers_m").empty();
				$("#finishers_f").empty();
				$("#finishers_all").empty();
				$(xml).find("runner").each(function(){
					var info = "<li>Name: "+$(this).find("fname").text()+" "+
					$(this).find("lname").text()+". Time: "+$(this).find("time").text()+"</li>";
					if ($(this).find("gender").text()=="m") {
						$("#finishers_m").append(info);
					}else if ($(this).find("gender").text()=="f") {
						$("#finishers_f").append(info);
					}
					$("#finishers_all").append(info);
				});
				showFrequency();
				getTimeAjax();
			}
		});
	}
	function startAJAXcalls(){
		if (repeat=true) {
			setTimeout(function() {
				getXMLRacers();
				startAJAXcalls();
			},FREQ);
		}
	}

	function showFrequency(){
		$("#freq").html("Page refreshes every "+FREQ/1000+" second(s).");
	}

	function getTimeAjax() {
		$("#updatedTime").load("time.php");
	}
});
