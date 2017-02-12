$( document ).ready(function() {
    
	$('.tab_content').hide();
	$('.tab_content:first').show();
	$('.tabs li:first').addClass('active');

	$('.tabs li').click(function(e) {
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').hide();

		var selectTab = $(this).find('a').attr("href");
		$(selectTab).fadeIn();
	});

});