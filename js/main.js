$(document).ready(function(){
$('.burger-button').click(function() {
	$(this).toggleClass('active');
	$('.menu.small').toggleClass('show');
})
$('.showmore-button').click(function() {
	$(this).parent().parent().parent().parent().parent().parent().find('.item-card').removeClass('showback');
	$(this).parent().parent().parent().parent().addClass('showback');
});
$('.back-button').click(function() {
	$(this).parent().parent().removeClass('showback');
});
$('.filter-buttons a').click(function() {
	$(this).toggleClass('active');
});
/*var picWidth = $('.pics-wrapper .pic').css('width');
$('.pics-wrapper .pic').css('height', picWidth);*/

/*var a = $('.filter-buttons a').hasClass('active');
if (!a) {
	$('.filter-results-slide .item-card').show();
}*/


/*$(function() {

	var newSelection = "";

	$(".filter-buttons a").click(function(){

	    $(".item-card").fadeTo(200, 0.10);

		//$(".filter-buttons a").removeClass("active");
		//$(this).addClass("active");

		newSelection = $(this).attr("rel");

		$(".item-card").not("."+newSelection).parent().hide();
		$("."+newSelection).parent().show();

	    $(".item-card").fadeTo(600, 1);

	});

});*/
/*$(function() {
	var selectClasses = [];
	$(".filter-buttons a").click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			var x = $(this).attr("class");
			x=x.split(' ');
			console.log(x[1]);
			var y = x[1];
			var buttonsLength = selectClasses.length
			for (i=0; i < buttonsLength; i++) {
				if (b === selectClasses[i]) {
					selectClasses.splice(selectClasses.indexOf(i), 1);
				}
			}
			if ($('.filter-buttons a').hasClass('active')) {
				$('.item-card').parent().css('display', 'none');
				$('.item-card.' + b).parent().css('display', 'flex');
				alert(b);
			}*/
				/*else if (!($('.filter-buttons a').hasClass('active'))) {
				$('.item-card').parent().css('display', 'flex');
			}*/
			/*else {
				$('.item-card').parent().css('display', 'flex');
			}
	};
		if (!($(this).hasClass('active'))) {
			$(this).addClass('active');
			var a = $(this).attr("class");
			a=a.split(' ');
			console.log(a[1]);
			var b = a[1];
			selectClasses.push(b);
		}

		
});
});*/
/*$('.dropdown-input').on('click', function() {
	if (!($(this).hasClass('active'))) {
		$(this).addClass('active');
	}
});*/
});


/*ЕСТЬ элементы с классами
при нажатии Найти где есть класс .актив
из строки классов найти 2-ые классы
Эти классы найти в item-cardах с помощью циклов
Остальные спрятать*/




/*for (i=0; i < qweLength; i++) {

		}*/

		/*selectClassess.push(b);
		console.log(selectClassess);
		var buttonsLength = selectClassess.length;
		var c = 0;
		for (i=0; i < buttonsLength; i++) {
			if (b === selectClassess[i]) {
				c++;
				console.log('вот оно',c);
				if (c === 2) {
					selectClassess.splice(selectClassess.indexOf(i), 1);
					c = 0;
					console.log('ЫЫЫЫЫЫЫ', c);
				}
			}
		}
		console.log(selectClassess);*/