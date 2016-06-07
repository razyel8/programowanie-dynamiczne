app.controller('ProductFormController', ['$scope', 'productsData', function($scope, productsData) {
    $scope.product = {};
    $scope.productForm = {};
    $scope.product.benefit = daydiff(new Date(), parseDate($scope.product.expirationDate));;

    function parseDate(str) {
        return new Date(str);
    };

    function daydiff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };

    $scope.setBenefit = function(){
        $scope.product.benefit = daydiff(new Date(), parseDate($scope.product.expirationDate));
    };

    $scope.submitProduct = function(){
        console.log("Submitting")
        $scope.product.benefit = 1/daydiff(new Date(), parseDate($scope.product.expirationDate));
        console.log($scope.product.benefit + " : " + daydiff(new Date(), parseDate($scope.product.expirationDate)));
        productsData.saveProduct($scope.product);
        $scope.product = {};
    };

}]);
