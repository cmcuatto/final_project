$(document).ready(function(){

$('.required').on('blur', function(e){
  validateField(this);  
});

$('#apply-form-id').on('submit', function(event){
    var nameValid = validateField('.name');
    var emailValid = validateField('.email');
    if(nameValid && emailValid){
      return true;
    } else {
      return false;
    }
 
});

function validateField(field){
    var inputValue = $(field).val();  
    if(inputValue === ''){  
        $(field).addClass('error');
        return false;
    }else {
        $(field).removeClass('error');
        return true;
    }
}
$(".readmore").click(function(){

	$("#toggleMore").slideDown();

	$(".readless").show();

	$(".readmore").hide();
	
	return false;
});

$(".readless").click(function(){

	$("#toggleMore").slideUp(function(){
		$(".readmore").show();
	});
	
	$(".readless").hide();

	return false;
});

 $('.slider').slick({
  	autoplay: true,
  	autoplaySpeed: 5000,
  	arrows: true,
});
				

});