'use strict';

angular.module('myApp')
    .controller('FinanceController',[
        '$scope',
        'myService',
    function($scope, myService){
        $scope.sallary=0;
        $scope.percentage=0;
        $scope.result = function() {
            return $scope.sallary * $scope.percentage *0.01;
        };

        $scope.onClick = function() {
            myService.test().then(
                function(response){
                    console.log(response);
                }
            );
        };
    }]
);