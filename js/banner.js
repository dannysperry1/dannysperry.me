/*
$(document).ready(function() {
  nav_hints(['#linked_in', '#twitter', '#facebook', '#dsperry', '#gmail'])
});

// churns through a group of nav hints, calling nav hint
var nav_hints = function(elements){
  for (var i=0; i < elements.length; i++) {
    nav_hints(elements[i])
  }
}
^^^^^^^^ neils revized version ^^^^^^^^^^^^^^^^^^^^^^^^^^*/
/* sets up the hover state for a given nav hint
var nav_hint = function(element){
  $(element).hover(
    function(){ $(element + "banner").show(); }, 
    function(){ $(element + "banner").hide(); }
  );
}
*/

$(document).ready(function() {
  	$("#linkedin").mouseover(function(){
    	$("#linkedinbanner").show();
  	});
  	$("#linkedin").mouseout(function() {
		$("#linkedinbanner").hide();
  	}); 
});

$(document).ready(function() {
	$('#twitter').mouseover(function() {
		$('#twitterbanner').show();
	});
	$('#twitter').mouseout(function() {
		$('#twitterbanner').hide();
	});
});

$(document).ready(function() {
	$('#facebook').mouseover(function() {
		$('#facebookbanner').show();
	});
	$('#facebook').mouseout(function() {
		$('#facebookbanner').hide();
	});
});

$(document).ready(function() {
	$('#dsperry').mouseover(function() {
		$('#dsperrybanner').show();
	});
	$('#dsperry').mouseout(function() {
		$('#dsperrybanner').hide();
	});
});

$(document).ready(function() {
  $("#gmail").mouseover(function(){
    $("#gmailbanner").show();
  });
  $("#gmail").mouseout(function() {
	$("#gmailbanner").hide();
  }); 
});