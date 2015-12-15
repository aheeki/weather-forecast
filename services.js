// SERVICES
weatherApp.service('cityService', function() {

	this.city = 'New York, NY';

});

weatherApp.service('weatherService', ['$resource', function($resource) {

	this.getWeather = function(city, days) {

		var weatherAPI = 
			$resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=4c40a0d755de649556b47f6d30a69acb",
			{callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

		return weatherAPI.get({ q: city, cnt: days });
	}
});