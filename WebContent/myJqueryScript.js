function f1(){
	$("h1").text("Le titre a été changé !");
}

function f2(){
	$("div").text("Les paroles s'envolent...");
}

function f3(){
	var before = $("div").text();
	$("div").text(before+" et les écrits restent.");
}

function f4(){
	$(document).attr( 'title', "LAB2 !!!" );
}

function f5(){
	$("div").toggle();
}