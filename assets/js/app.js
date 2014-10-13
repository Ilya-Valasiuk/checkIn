var socket = io.connect('http://localhost:1337/');

console.log('APPLICATION START');

$('.qrCodeEl').on('click', function(e) {
	var eventId = e.target.getAttribute('data-eventId'),
		popup = window.open(),
		imageUrl = ('src', 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://'+ window.location.host+ '/events/show/' + eventId);
	popup.document.write('<div style="margin: 0 auto; text-align:center">');
	popup.document.write('<h1>Check In RIGHT NOW!<h1>');
	popup.document.write('<img src='+imageUrl+'>');
	popup.document.write('</div>');
})