$(document).ready(function() {
	var currentPosition = 0;
	var slideWidth = 754;
	var slides = $('.pictures');
	var numberOfSlides = slides.length;
	
	 
	 /* Remove Scrollbar */
	 
	$('#box1').css('overflow', 'hidden');
	//Warp all .picture with #boxInner div
	slides
		.wrapAll('<div id="boxInner"></div>')
		//Float left to display horizontally, readjust .pictures width
		.css({
			'float' : 'left',
			'width' : slideWidth
		});
			
	//Set #boxInner width equal to total width of all slides
	$('#boxInner').css('width', slideWidth * numberOfSlides);

	//Insert controls in the DOM
	$('#content')
    .prepend('<span class="control" id="leftControl">Clicking moves left</span>')
    .append('<span class="control" id="rightControl">Clicking moves right</span>');
	
	//Hide left arrow control on first load
	manageControls(currentPosition);
	
	//Create event listeners for .control clicks
	$('.control')
		.bind('click', function() {
			//Determine new position
			currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;
			
		//Hide / Show controls
		manageControls(currentPosition);
		//Move #boxInner1,2,3,4 using margin-left
		$('#boxInner').animate({
			'marginLeft' : slideWidth*(-currentPosition)
		});
	});
	
	
	// manageControls: Hides and Shows controls depending on currentPosition
	function manageControls(position) {
		//Hide left arrow if position is first slide
		if(position==0){ $('#leftControl').hide() } else{ $('#leftControl').show() }
		//Hide right arrow if position is last slide
		if(position==numberOfSlides-1){ $('#rightControl').hide() } else{ $('#rightControl').show() }
	
	}
});