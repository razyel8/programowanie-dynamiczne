angular.module('pd').factory('truckData', function () {
    var truck = {
        capacity: 0,
        loadedProducts: [],
        isLoaded: function(){
            return this.loadedProducts.length > 0
        }
    };
    return {
        truck: truck,
        getTruck: function () {
            return truck;
        },
        addProduct: function(product){
            //if(loadedProducts.le)
        },
        getCapacity: function () {
            return truck.capacity;
        },
        setCapacity: function (cap) {
            truck.capacity = cap;
        }
    };
});
