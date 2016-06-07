app.controller('ProductListController', ['$scope', 'productsData', function($scope, productsData) {
    $scope.products = productsData.getProducts();

    $scope.formatDate = function(date){
        var dt = new Date(date);
        return dt.getUTCDate() + "/" + (dt.getUTCMonth()+1) + "/" + dt.getUTCFullYear();
    }
}]);