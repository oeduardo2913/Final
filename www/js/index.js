
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        console.log('deviceready');
		var p = document.querySelector('device p');
		p.innerHTML = device.cordova + '<br/>' +
			device.platform + '<br/>' +
			device.model + '<br/>';
    }
};

app.initialize();