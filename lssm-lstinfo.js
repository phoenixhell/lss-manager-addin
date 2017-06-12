var LOAD_PATH     = window.location.pathname;
var LOAD_PATH_ARR = LOAD_PATH.split('/');
LOAD_PATH_ARR.shift();
console.log(LOAD_PATH_ARR);

$('head').append('<link rel="stylesheet" href="https://share.phoenixcrew.net/leitstellenspiel.de/css/main.css">');

if(LOAD_PATH == "/"){
	// Create FMS Overview spans
	var radio_off = $('#radio').find('#alliance_radio_off');
	radio_off.before('<span title="Einsatzbereit über Funk" class=" building_list_fms building_list_fms_1">x</span>');
	radio_off.before('<span title="Einsatzbereit auf Wache" class=" building_list_fms building_list_fms_2">x</span>');
	radio_off.before('<span title="Auf Anfahrt" class=" building_list_fms building_list_fms_3">x</span>');
	radio_off.before('<span title="Beim Einsatzort" class=" building_list_fms building_list_fms_4">x</span>');
	radio_off.before('<span title="Sprechwunsch" class=" building_list_fms building_list_fms_5">x</span>');
	radio_off.before('<span title="Nicht einsatzbereit" class=" building_list_fms building_list_fms_6">x</span>');
	radio_off.before('<span title="Person aufgenommen" class=" building_list_fms building_list_fms_7">x</span>');

	missionPercent();
	setInterval(missionPercent, 1000);
} else if(LOAD_PATH_ARR[0] == "missions"){
	//$('head').append('<link href="https://share.phoenixcrew.net/leitstellenspiel.de/css/mission.css" rel="stylesheet">');
	//$('head').append('<script src="https://share.phoenixcrew.net/leitstellenspiel.de/js/mission.js?user_id=' + user_id + '" type="text/javascript"></script>');
}else if(LOAD_PATH_ARR[0] == "vehicles"){
	if($('.building_list_fms').hasClass('building_list_fms_5')){ // Automatische Auswahl des KHs
		//window.location = $('.btn.btn-success:eq(0)').attr('href');
	}else if(LOAD_PATH_ARR[2] == "patient" || LOAD_PATH_ARR[2] == "gefangener"){
		//console.log($('a[href^="/vehicles/"].btn.btn-success:visible()'));
		//console.log($('a[href^="/vehicles/"].btn.btn-success:visible()').attr('href'));
		window.location = $('.btn-success:contains(Fahrzeug im Status 5)').attr('href');
	}
}

updateFMS();
function updateFMS(){
	$('[class^="radio_message_vehicle_"]').each(function(){ // Pro Funkspruch (inkl. alte Funksprüche)
		$(this).find('.building_list_fms:contains("2")').parent().remove();
	});
	var radio_element = $('#radio .panel-heading');
	radio_element.find('.building_list_fms_1').html($('#buildings').find('.building_list_fms_1').length);
	radio_element.find('.building_list_fms_2').html($('#buildings').find('.building_list_fms_2').length);
	radio_element.find('.building_list_fms_3').html($('#buildings').find('.building_list_fms_3').length);
	radio_element.find('.building_list_fms_4').html($('#buildings').find('.building_list_fms_4').length);
	radio_element.find('.building_list_fms_5').html($('#buildings').find('.building_list_fms_5').length);
	radio_element.find('.building_list_fms_6').html($('#buildings').find('.building_list_fms_6').length);
	radio_element.find('.building_list_fms_7').html($('#buildings').find('.building_list_fms_7').length);
}

$('#iframe-inside-container, .overview_outer [id$="-panel-body"]').on( 'mousewheel', function ( e ) {
    var event = e.originalEvent,
        d = event.wheelDelta || -event.detail;

    this.scrollTop += ( d < 0 ? 1 : -1 ) * 80;
    e.preventDefault();
});

function missionPercent(){
	$('.mission_progress').each(function(index, el) {
		if($(el).has('.prog_mis')){

		}else{
			$(this).append('bla');
		}
	});
}

/* ================== FAYE Test ================== */
if(typeof faye != "undefined"){
	var subscription = faye.subscribe('/private-user' + user_id + 'de', function(message){
		updateFMS();
		console.log(message);
	});
}
/* ================== FAYE Test ================== */