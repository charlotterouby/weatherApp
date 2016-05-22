WeatherApp.controller('MainController', ['$scope', '$http',

    function($scope, $http) {
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/box/city?bbox=4.3703975,43.2903626,5.5291677,43.5447225,50&cluster=yes&lang=fr&units=metric&APPID=294b05d85b0aa42a47833f103be47564'
        }).then(function successCallback(response) {

            // Récupération des données du Json OpenWeatherApi
            $scope.weathers = [];

            for (var i = 0; i < response.data.list.length; i++) {
                var weather = {
                    'name': response.data.list[i].name,
                    'condition': response.data.list[i].weather[0].main,
                    'icon': response.data.list[i].weather[0].icon,
                    'idWeather': response.data.list[i].weather[0].id,
                    'temp': response.data.list[i].main.temp
                };

                $scope.weathers.push(weather);
            }

        }, function errorCallback(response) {
            alert("Erreur de lecture");
        });
    }
]);

// API key OpenWeatherMap:
// 294b05d85b0aa42a47833f103be47564
// Tour Musée Velaux : 43.5222823,5.250041
// Arles @43.5447225,4.3703975
// Aubagne/@43.2903626,5.5291677


// http://api.openweathermap.org/data/2.5/
// find?lat=43.5222823&lon=4.3703975&cnt=12&cluster=yes (cities in cycle) 
// group?id=6452134,2995468,6447142,6427088,6455353,3036433,6454959,6447134,2995387 
// (group id = Aix-en-Provence, Marseille, Velaux, Salon-de-Provence,Arles,Aubagne,Miramas,Istres,Martigues)
// box/city?bbox=4.3703975,43.2903626,5.5291677,43.5447225,10&cluster=yes (cities in a box area)
// &lang=fr
// &units=metric
// &APPID=294b05d85b0aa42a47833f103be47564