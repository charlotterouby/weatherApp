WeatherApp.service('requestApi', ['$http', '$q',
    function($http, $q) {
        this.newRequest = function(urlSearch) {
            var myDefer = $q.defer();

            $http({
                method: 'GET',
                url: urlSearch
            }).then(function success(response) {
                myDefer.resolve(response.data);
            }, function error(response) {
                return false;
            });

            return myDefer.promise;
        }
    }
]);