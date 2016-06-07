app.directive("pdProductsList", function() {
    return {
        restrict: 'E',
        controller: 'ProductListController',
        templateUrl: 'templates/product-list.tpl.html'
    };
});