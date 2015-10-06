var app = angular.module('memeApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {

    //$scope.meme.model = "Test"
    $scope.gCat = "I WAS HAPPY ONCE... IT WAS AWFUL";
    $scope.hAriel = "I NEEEEED MY PSL, NOW";
    $scope.fry = "NOT SURE IF TROLLING OR JUST STUPID";
    $scope.hBadger = "HONEY BADGER DON'T CARE. NEITHER DO EPSILON";
    $scope.wWonka = "DO GO ON";

}]);