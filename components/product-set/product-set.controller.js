app.controller('ProductSetController', ['$scope', 'productsData', function($scope, productsData) {
    $scope.loadProducts = function(num){
        console.log("loaded " + num);
        $.getJSON("../jsons/products"+num+".json", function(json) {
            console.log("loaded");
            //console.log(json); // this will show the info it in firebug console
            productsData.setProducts(json);
            console.log($scope.products);
            $scope.$apply();
        });
    }
}]);
