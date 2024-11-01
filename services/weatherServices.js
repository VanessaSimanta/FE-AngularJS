classApp.service('weatherService', ['$http', function($http) {
    this.getIPData = function() {
        return $http.get('http://ip-api.com/json');
    };

    this.getWeatherData = function(lat, lon, apiKey) {
        var openWeatherMap = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=metric";
        return $http.get(openWeatherMap);
    };
}]);
