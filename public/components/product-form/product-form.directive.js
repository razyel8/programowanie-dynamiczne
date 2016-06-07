app.directive("pdProductForm", function() {
    return {
        restrict: 'E',
        controller: 'ProductFormController',
        templateUrl: 'templates/product-form.tpl.html'
    };
});
