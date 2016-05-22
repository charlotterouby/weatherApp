WeatherApp.factory('weatherInfos', function() {
    return {
        'getNameCity': function(weatherData, i) {
            return weatherData.list[i].name;
        },
        'getCondition': function(weatherData, i) {
            return weatherData.list[i].weather[0].main;
        },
        'getIcon': function(weatherData, i) {
            return weatherData.list[i].weather[0].icon;
        },
        'getIdWeather': function(weatherData, i) {
            return weatherData.list[i].weather[0].id;
        },
        'getTemp': function(weatherData, i) {
            return weatherData.list[i].main.temp;
        }
    }
});