$(window).scroll(function(){
	
	var wScroll = $(this).scrollTop();
	
	
	$('.mtn_front').css({
		'transform'	:	'translate(0px, -'+ wScroll /65 +'%)'
	});
	

	$('.header_rec').css({
		'transform'	:	'translate(0px, '+ wScroll /65 +'%)'
	});
	
	
	$('.title_top').css({
		'transform'	:	'translate(0px, '+ wScroll /10 +'%)'
	});
	
	
		$('.title_bottom').css({
		'transform'	:	'translate(0px, '+ wScroll /15 +'%)'
	});
	
	
	
		
	
	
	if(wScroll > $('#intro').offset().top)	{
		
		$('.land1').each(function(){
			
			$('.land1').addClass('is-showing');
			
		});
	}
	
	
	if(wScroll > $('#bird').offset().top)	{
		
		$('.tak_frnt').each(function(){
			
			$('.tak_frnt').addClass('tak_scroll');
			
		});
	}
	
	
	$('.tak_scroll').css({
		'transform'	:	'translate(0px, -'+ wScroll /45 +'%)'
	});
	
	
	
	if(wScroll > $('#bird').offset().top)	{
		
		$('.first_rec').each(function(){
			
			$('.first_rec').addClass('rec_scroll');
			
		});
	}
	
	
	$('.rec_scroll').css({
		'transform'	:	'translate(0px, '+ wScroll /45 +'%)'
	});
	
	
	
	if(wScroll > $('#more').offset().top)	{
		
		$('.tracks').each(function(){
			
			$('.tracks').addClass('track_show');
			
		});
	}
	
	
	if(wScroll > $('.last_track_one').offset().top)	{
		
		$('.slide_in_box').each(function(){
			
			$('.slide_in_box').addClass('is-showing');
			
		});
	}
	
	
	if(wScroll > $('.quote_sec').offset().top)	{
		
		$('.peak').each(function(){
			
			$('.peak').addClass('peak_scroll');
			
		});
	}
	
	$('.peak_scroll').css({
		'transform'	:	'translate(0px, -'+ wScroll /45 +'%)'
	});
	
	
	if(wScroll > $('.moa_sec').offset().top)	{
		
		$('.moa_pic').each(function(){
			
			$('.moa_pic').addClass('is-showing');
			
		});
	}
	
	if(wScroll > $('#twenty_eight').offset().top)	{
		
		$('.tracks2').each(function(){
			
			$('.tracks2').addClass('track_show_two');
			
		});
	}
	
	
	
	if(wScroll > $('#quest').offset().top)	{
		
		$('.doc').each(function(){
			
			$('.doc').addClass('doc_scroll');
			
		});
	}
	
	$('.doc_scroll').css({
		'transform'	:	'translate(0px, -'+ wScroll /50 +'%)'
	});
	
	
	
	
	if(wScroll > $('#quest').offset().top)	{
		
		$('.squared').each(function(){
			
			$('.squared').addClass('squared_scroll');
			
		});
	}
	
	$('.squared_scroll').css({
		'transform'	:	'translate(0px, -'+ wScroll /60 +'%)'
	});
	
	
	
	
	
	if(wScroll > $('.winter_sec').offset().top)	{
		
		$('.slide_up_rec').each(function(){
			
			$('.slide_up_rec').addClass('slide_up_appear');
			
		});
	}
	
	
	
	if(wScroll > $('.nz_sec').offset().top)	{
		
		$('.slide_up_rec2').each(function(){
			
			$('.slide_up_rec2').addClass('slide_up_appear');
			
		});
	}
	
	
	
	if(wScroll > $('.ff_sec').offset().top)	{
		
		$('.fast_facts').each(function(){
			
			$('.fast_facts').addClass('is-showing');
			
		});
	}
	
	
	
	if(wScroll > $('.nz_sec').offset().top)	{
		
		$('.sheep').each(function(){
			
			$('.sheep').addClass('sheep_scroll');
			
		});
	}
	
	$('.sheep_scroll').css({
		'transform'	:	'translate(0px, -'+ wScroll /60 +'%)'
	});
	
	
	
	
	
});









