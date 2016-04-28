$(document).ready(function(){

	var cart = 0;
	$('.shop-menu .cart span').html(cart);
	$('.device .btn').on('click',function(e){
		e.preventDefault();
		cart += parseFloat($(this).siblings('.d_price').text());
		console.log(cart);
		$('.shop-menu .cart span').html(cart.toFixed(2));
	})
		//string - текст
		//Int = Integer (Целое число)
		//Float = число с плавающей точкой	


			$('#top_menu').on('click', function(){
				$('.var-menu').toggleClass('show');
			});
			$('.outer > li').on('click', function(e){
				e.preventDefault();
				if($(this).children('ul').length > 0){
					$(this).toggleClass('active');
				}
			});


});
