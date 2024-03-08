function hide_left() {
	$('.media').hide();
	$('.grid-left').show();
}

$('#show_headlines').click(function() {
	$('.headlines_body').hide(600);
	$('#show_headlines').css('display', 'none');
	$('.hide_headlines').css('display', 'block');
});

$('.hide_headlines').click(function() {
	$('.hide_headlines').css('display', 'none');
	$('#show_headlines').css('display', 'block');
	$('.headlines_body').show(600);
		
	});


function show_left() {
	$('.media').show();
	$('.grid-left').hide();
}

function show_left_menu() {
	$('.mask').show();
	$('.media').show();
	$('.grid-left').hide();
}

function mask() {
	$('.mask').hide();
	$('.media').hide();
	$('.grid-left').hide();
	$('.pop_link').hide();
	$('.pop_img').hide();
	$('.pop_btn').hide();
}

function grid1() {
	$('.center__img img').css("width", "260px", "height", "173px");
	$('.box').css("width", "260px");
}

function grid2() {
	$('.center__img img').css("width", "200px", "height", "50px");
	$('.box').css("width", "200px", "height", "50px");
}
