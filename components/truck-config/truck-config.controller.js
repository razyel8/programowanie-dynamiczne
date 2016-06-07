app.controller('TruckConfigController', ['$scope', 'truckData', function($scope, truckData) {
    $scope.truck = truckData.getTruck();
}]);
