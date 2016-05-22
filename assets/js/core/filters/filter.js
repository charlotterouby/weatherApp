WeatherApp.filter('multipleNumber', function() {
    return function(input, paramNumber, paramModulo) {
        var newTemp = input * paramNumber;
        var modTemp = newTemp % paramModulo;
        return modTemp;
    }
});

WeatherApp.filter('sortByName', function() {
    return function(input) {
        var tri = input.sort(function(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        });

        return tri;
    }
});