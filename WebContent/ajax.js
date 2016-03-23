$(document).ready(function(){

// Login and password validation
	$("#myForm").submit(function(e){
		e.preventDefault();
	});
	
	$("#myButton").click(function(){
		
        dataString = $("#myForm").serialize();
        $.ajax({
            type: "POST",
            url: "AjaxServlet",
            data: dataString,
            dataType: "json",
           
            success: function(data) {
              $("#ajaxResult").html("Result : "+data);
            }
        });        
	});
	
// cities autocompletion : Using the jQuery UI API and a predefined cities list
	var listCities = ["Avignon", 
	                  "Bourges", 
	                  "Carpentras", 
	                  "Dinan", 
	                  "Elancourt", 
	                  "Fontainebleau", 
	                  "Grenoble", 
	                  "Houilles", 
	                  "Issy-Les-Moulineaux", 
	                  "Janvry", 
	                  "Kirchberg", 
	                  "Le Havre", 
	                  "Marseille", 
	                  "Nabas", 
	                  "Orléans",
	                  "Perpignan",
	                  "Quarante",
	                  "Rennes",
	                  "Saint-Quentin",
	                  "Trinay",
	                  "Uchon",
	                  "Vierzon",
	                  "Waben",
	                  "Xammes",
	                  "Ydes",
	                  "Zimmerbach"];
	$('#city').autocomplete({
		source: listCities
	});
	
// cities autocompletion : Using AJAX and a cities AP
	$('#cityAjax').autocomplete({
		source: function( request, response ) {
	        $.ajax({
	          url: "http://gd.geobytes.com/AutoCompleteCity",
	          dataType: "jsonp",
	          data: {
	            q: request.term
	          },
	          success: function( data ) {
	            response( data );
	          }
	        });
	      },
	      select: function( event, ui ) {
	    	  $('#cityAjax').val(ui.item.label)
	        
	      }
	});
	
});