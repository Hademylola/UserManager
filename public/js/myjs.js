
$(document). ready(function(){


$(".deleteUser").click(function(){

var confirmation = confirm("Are u sure?")

if(confirmation){

	//x = $(this).data('id');
	//alert(x)

	$.ajax({

		type:"delete",
		url:"/deletecustomer/"+$(this).data('id')

	}).done(function(response){

		window.location.replace("/index");

	})
	window.location.replace("/index");
}
else{

	return false
}

});



});





