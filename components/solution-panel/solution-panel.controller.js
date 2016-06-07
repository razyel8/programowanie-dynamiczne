app.controller('SolutionPanelController', ['$scope', 'productsData', 'truckData', function($scope, productsData, truckData) {
    //$scope.products = productsData.getProducts();
    $scope.truckCapacity = truckData.getCapacity();
    $scope.truckLoaded = truckData.truck.isLoaded();
    $scope.loadedProducts = [];
    $scope.loadedGreedy = [];
    $scope.dynamicTime = 0.0;
    $scope.greedyTime = 0.0;
    $scope.dynamicSum = 0.0;
    $scope.greedySum = 0.0;

    function parseDate(str) {
        return new Date(str);
    };

    function daydiff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };

    $scope.loadGreedy = function(){
        $scope.products = productsData.getProducts();
        $scope.truckCapacity = truckData.getCapacity();
        $scope.loadedGreedy = [];
        //$scope.products.forEach(function(p){
        //    p.benefit = 1/daydiff(new Date(), parseDate(p.expirationDate));
        //    if(p.benefit <0){
        //
        //    }
        //});

        var products = [],//$scope.products;
            loadedSum = 0,
            i = 0;
        angular.copy($scope.products, products);

        products.forEach(function(p){
            p.greedyBenefit = p.size/ p.benefit;
            console.log(p.greedyBenefit);
        });


        products.sort(function (a, b) {
            if (a.greedyBenefit < b.greedyBenefit) {
                return -1;
            }
            else if (a.greedyBenefit > b.greedyBenefit) {
                return 1;
            }
            return 0;
        });
        console.log(products);

        var d = new Date();
        var start = window.performance.now();
        while(loadedSum + products[i].size <= $scope.truckCapacity && i<products.length){
            $scope.loadedGreedy.push(products[i]);
            loadedSum += products[i].size;
            i++;
        }
        $scope.greedyTime = window.performance.now()-start;

        var sum = 0.0;
        $scope.loadedGreedy.forEach(function(p){
            sum += p.benefit;
        });
        $scope.greedySum = sum;



    }
    $scope.loadTruck = function(){
        $scope.products = productsData.getProducts();
        $scope.truckCapacity = truckData.getCapacity();
        //$scope.products.forEach(function(p){
        //    p.benefit = 1/daydiff(new Date(), parseDate(p.expirationDate));
        //});

        var products = [];//$scope.products;
        angular.copy($scope.products, products);

        console.log(products);
        var W = $scope.truckCapacity;
        var opt = new Array([]); // opt[n][w] = max profit of packing items 1..n with weight limit w
        var sol = new Array([]); // sol[n][w] = does opt solution to pack items 1..n with weight limit w include item n?
        //Wypełnienie tabeli zerami
        for(var i = 0; i<products.length+2; i++){
            opt[i] = [];
            sol[i] = [];
            for(var j = 0; j<W+2; j++){
                opt[i][j] = 0;
                sol[i][j] = 0;
            }
        }
        console.log("pl " + products.length + " w " + W);

        var d = new Date();
        var start = window.performance.now();

        for (var n = 1; n <= products.length; n++) {
            for (var w = 1; w <= W; w++) {

                // don't take item n
                var option1 = opt[n-1][w];
                // take item n
                var option2 = 0;
                if (products[n-1].size <= w) option2 = products[n-1].benefit + opt[n-1][w-products[n-1].size];

                // select better of two options
                opt[n][w] = Math.max(option1, option2);
                sol[n][w] = (option2 > option1);
            }
        }

        for (n = products.length, w = W; n > 0; n--) {
            if (sol[n][w]) { products[n-1].take = true;  w = w - products[n-1].size; console.log("Take " + n-1)}
            else           { products[n-1].take = false;                    }
        }

        $scope.dynamicTime = window.performance.now() - start;

        $scope.loadedProducts = products;
        $scope.truckLoaded = true;
        var sum = 0.0;
        $scope.loadedProducts.forEach(function(p){
            sum += p.benefit;
        });
        $scope.dynamicSum = sum;

        console.log("truck loaded");
    }
}]);
