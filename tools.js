$(document).ready(function(){
	var domain = window.location.hostname.split('.').reverse()[2];

	$.get('//creadome.tmweb.ru/encounter/tools/past.php', {domain: domain}, function(data) {
		$('#boxCenterComingGames').parent().prepend(data);
	});

	$.get('//creadome.tmweb.ru/encounter/tools/calendar.php', {domain: domain}, function(data) {
		$('.boxGameInfo:first').before(data);
	});

	$.getScript('//yastatic.net/share2/share.js', function(){
		$('a#lnkGameTitle').each(function(){
			$(this).closest('table').after('<div class="share">' +
				'<h2>Расскажи друзьям!</h2>' +

				'<div class="ya-share2" data-services="vkontakte,facebook,twitter,viber,whatsapp,telegram" data-url="http://' + domain + '.en.cx' + $(this).attr('href') + '" data-title="' + $(this).text() + '" data-image="http://cdn.endata.cx/images/v2/en/promo/encounter.png"></div>' +
			'</div>');
		});
	});
});
