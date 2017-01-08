// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/


//$(window).on("scroll", function(){
//  if($("body").scrollTop() === $("#yourDivID").offset().top){
//    $(window).off("scroll");
//    // Code here
//  }
//}











			

var bar = new ProgressBar.Circle(".container", {
  color: '#F67967',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 5,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#058CFF', width: 1 },
  to: { color: '#40FF6C', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 40);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';




$(window).scroll(function(){
	
	var wScroll = $(this).scrollTop();

	
	if(wScroll > $('.citation').offset().top )	{
		
		bar.animate(1);  // Number from 0.0 to 1.0
	}

	
});




















