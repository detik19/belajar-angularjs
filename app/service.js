'use strict';

angular.module('myApp')
    .service('myService', ['$http', '$q',
        function($http, $q){
            return {
                test: function(){
                    var deferred = $q.defer();

                    $http({
                        method: 'GET',
                        url: 'http://dummy.restapiexample.com/api/v1/employees',
                        timeout: 100000,
                    }).then(function(response) {
                        deferred.resolve(response);
                    },function(error){
                        console.log(error);
                    });
                    return deferred.promise;
            }   
        };
    }
]);
