$(document).ready(function(){
	var headclix=0 ,eyesclix=0, noseclix=0, mouthclix=0;
	lightning_one();
	setTimeout("lightning_two()", 5000);
	setTimeout("lightning_three()", 7000);

	$("#head").click(function(){
		if (headclix<9) {
			$(this).animate({left:"-=367px"},500);
			headclix+=1;
		} else {
			$(this).animate({left:"0"},500);
			headclix=0;
		}
	});
	$("#eyes").click(function(){
		if (eyesclix<9) {
			$(this).animate({left:"-=367px"},500);
			eyesclix+=1;
		} else {
			$(this).animate({left:"0",},500);
			eyesclix=0;
		}
	});
	$("#nose").click(function(){
		if (noseclix<9) {
			$(this).animate({left:"-=367px"},500);
			noseclix+=1;
		} else {
			$(this).animate({left:"0"},500);
			noseclix=0;
		}
	});
	$("#mouth").click(function(){
		if (mouthclix<9) {
			$(this).animate({left:"-=367px"},500);
			mouthclix+=1;
		} else {
			$(this).animate({left:"0"},500);
			mouthclix=0;
		}
	});
});//end doc.onready function

function lightning_one() {
	$("#lightning1").fadeIn(250).fadeOut(250);
	setTimeout("lightning_one()", 4000);
}

function lightning_two() {
	$("#lightning2").fadeIn("fast").fadeOut("fast");
	setTimeout("lightning_two()", 5000);
}

function lightning_three() {
	$("#lightning3").fadeIn("fast").fadeOut("fast");
	setTimeout("lightning_three()", 7000);
}
