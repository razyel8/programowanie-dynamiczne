angular.module('pd').factory('productsData', function($http) {
    'use strict';
    var products = [],
        idCounter = 0,
        productDTO = function(product){
            return {
                id: idCounter++,
                name: product.name,
                size: product.size,
                expirationDate: product.expirationDate,
                price: product.price,
                benefit: product.benefit,
                take: false
            }
        };
    return {
        setProducts: function(prd) {
            angular.copy(prd, products);
            idCounter = prd.length;
        },
        getProducts: function() {
            console.log("getting product: " + products)
            //return $http.get('http://localhost:9000/services/books', {params: searchParams});
            //products.forEach(function(p){p.expirationDate = new Date(p.expirationDate)});
            return products;
        },
        saveProduct: function(product) {
            products.push(productDTO(product));
        },
        updateProduct: function(book) {
            return $http.put('http://localhost:9000/services/book', book);
        },
        deleteProduct: function(id) {

        }
    };
});

