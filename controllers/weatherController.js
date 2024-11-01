classApp.controller('weatherCtrl', ['$scope', 'weatherService', function($scope, weatherService) {
    var vm = $scope;
    vm.channelInfo = {
        heading: "Open Weather API",
        subheading: "Get your weather forecast",
        subheading2: {
            nama: "Kelompok 5 & 7",
            npm: "8341747107",
            jurusan: "Teknik Informatika",
        }
    };

    weatherService.getIPData().then(function(response) {
        vm.lat = response.data.lat;
        vm.lon = response.data.lon;

        // Use lat and lon from IP API response
        weatherService.getWeatherData(vm.lat, vm.lon, '613a26374e9150d98785f350ab648986').then(function(data) {
            // Get data from OpenWeatherMap response
            vm.description = data.data.weather[0].description;
            vm.temp = data.data.main.temp + " °C"; // Add space before C
            vm.wind = (data.data.wind.speed * 1.852).toFixed(2) + " KM/H"; // Convert to KM/H
            vm.kota = data.data.name; // City name
            console.log(data); // Log data for debugging
        }).catch(function(error) {
            console.error("Error fetching weather data:", error); // Handle errors
        });
    }).catch(function(error) {
        console.error("Error fetching IP data:", error); // Handle errors for IP request
    });
}]);
