(function (w, $, undefined) {
	$('#fullpage').fullpage({
		anchors: ['home', 'intro', 'taller','accesorios','eventos','gallery','contact'],
		sectionsColor: [ '#7E8F7C','#e6af4b', '#e05038', '#f2cbbc','#334431', '#e6af4b', '#e05038'],
		menu:'#menu',
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Inicio', 'ClubFZ', 'Taller','Accesorios','Paseos','Galleria','Contacto']
	});

	moment.lang('es');

	var thisMonth = moment().format('YYYY-MM');
	// Events to load into calendar
	var events = [
	   {
	        date: '2016-06-30',
	        title: 'Fiesta Club FZ'
	    }
	 ],
	 clndr = {};

	 clndr = $('#full-clndr').clndr({
	 	template: $('#calendar').html(),
	 	events: events,
	 	forceSixRows: true
	 });

})(window,jQuery)
