function validateMyForm(){
	var fName = document.forms["indexForm"]["fName"].value;
	var lName = document.forms["indexForm"]["lName"].value;
	var bDay = document.forms["indexForm"]["bDay"].value;
	var sex = document.forms["indexForm"]["sex"].value;
	
    if (fName == null || fName == "") {
        alert("First Name must be filled out");
        return false;
    }else if (lName == null || lName == "") {
        alert("Last Name must be filled out");
        return false;
    }else if (bDay == null || bDay == "") {
        alert("Birth Day must be filled out");
        return false;
    }else if (sex == null || sex == "") {
        alert("Sex must be filled out");
        return false;
    }else{
    	alert(fName+" "+lName+" "+bDay+" "+sex);
    }
}

function toogleFM(clr){
	var fieldset = document.getElementById("sexFieldset");
	var legend = document.getElementById("sexLegend");
	var inp =  document.getElementsByTagName("input");
	var h =  document.getElementsByTagName("h1")[0];
	
	if(clr == "red"){
		h.textContent="Hello Sir"
	}else if(clr == "blue"){
		h.textContent="Hello Madam"
	}
	
	
	fieldset.style.borderColor = clr;
	legend.style.color = clr;
	
	for(i=0;i<inp.length;i++){
		inp[i].style.borderColor = clr;
	}
	

}