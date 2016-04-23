(function (w, $, undefined) {
	$('#fullpage').fullpage({
		anchors: ['home', 'intro', 'taller','accesorios','eventos','gallery','contact'],
		sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C','#C63D0F', '#1BBC9B', '#7E8F7C'],
		menu:'#menu',
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Inicio', 'ClubFZ', 'Taller','Accesorios','Paseos','Galleria','Contacto']
	});
})(window,jQuery)
