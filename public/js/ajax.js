
$(document). ready(function(){


$("#deletebtn").click(function(){

var confirmation = confirm("Are u sure?")

if(confirmation){

	//x = $(this).data('id');
	//alert(x)
x = $("#txtdeleteuser").val();

	$.ajax({

		type:"delete",
		url:"/users/"+x,
		processData:false,
		contentType:'application/json; charset=utf-8',
		success: function(response){

			alert(response);
			userid="";
			window.location="/index";
		},
		error:function(response){

			alert(response);
		}

	})
	
	//window.location.replace("/index");
}
else{

	return false
}

});



$("#update").click(function(){

	//x="5a3a8dbdc60b2e17b0414f6d";
	/*
	var mForm = $(this).siblings('updateform');
	
	
	
	name = "odewumit";
	var FormData = {name:name,email:email,password:password};
alert(FormData);
*/	var userid= $("#userid").val();
	var name = $("#nameupdate").val();
	var email = $("#emailupdate").val();
	var password = $("#passwordupdate").val();
//var name="Temiloluwa"



if(userid != "" && name != "" && email != "" && password != "" ){



	$.ajax({
		type:"PUT",
		url:"/users/"+userid,
		data:{name:name,email:email,password:password},
		

		success:function(response){
				alert(response);
		if(response == "Update was Successful" ){

			userid="";
			name="";
			email="";
			password="";

			window.location="/index"

		}
				

		},
		error:function(error){
			console.log(error);
		}


	})

}
else{

	alert("All Field Must Be Filled");
}

	

})

});





