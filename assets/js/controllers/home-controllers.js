WeatherApp.controller('MainController', ['$scope', 'requestApi', 'weatherInfos',
    function($scope, $requesterApi, $weatherInfos) {
        // Variables globales
        var urlSearch = 'http://api.openweathermap.org/data/2.5/box/city?bbox=4.3703975,43.2903626,5.5291677,43.5447225,20&cluster=yes&units=metric&APPID=294b05d85b0aa42a47833f103be47564'
        $scope.weathers = [];


        $scope.searchCity = function(city) {
            //Appel du service "requestApi"
            $requesterApi.newRequest(urlSearch).then(function(data) {
                // Récupération des données du Json OpenWeatherApi
                for (var i = 0; i < data.list.length; i++) {
                    var weather = {
                        'name': $weatherInfos.getNameCity(data, i),
                        'condition': $weatherInfos.getCondition(data, i),
                        'icon': $weatherInfos.getIcon(data, i),
                        'idWeather': $weatherInfos.getIdWeather(data, i),
                        'temp': $weatherInfos.getTemp(data, i)
                    };
                    // Push des infos de la ville i dans le tableau global weathers
                    $scope.weathers.push(weather);
                }
            });
        }
    }
]);

// API key OpenWeatherMap:
// 294b05d85b0aa42a47833f103be47564


// http://api.openweathermap.org/data/2.5/
//      find?lat=43.5222823&lon=4.3703975&cnt=12&cluster=yes (cities in cycle) 
//      group?id=6452134,2995468,6447142,6427088,6455353,3036433,6454959,6447134,2995387 
//      (group id = Aix-en-Provence, Marseille, Velaux, Salon-de-Provence,Arles,Aubagne,Miramas,Istres,Martigues)
//      box/city?bbox=4.3703975,43.2903626,5.5291677,43.5447225,10&cluster=yes (cities in a box area)
// &lang=fr
// &units=metric
// &APPID=294b05d85b0aa42a47833f103be47564