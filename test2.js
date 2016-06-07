var products =
    [
        {
            "id": 0,
            "name": "podajnazwe",
            "size": 5,
            "benefit": 2,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10,
            "take": false
        },
        {
            "id": 1,
            "name": "podajnazwe",
            "size": 6,
            "benefit": 5,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10,
            "take": false
        },
        {
            "id": 2,
            "name": "podajnazwe",
            "size": 8,
            "benefit": 3,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10,
            "take": false
        },
        {
            "id": 3,
            "name": "podajnazwe",
            "size": 8,
            "benefit": 3,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10,
            "take": false
        },
        {
            "id": 4,
            "name": "podajnazwe",
            "size": 8,
            "benefit": 7,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10,
            "take": false
        },
        {
            "id": 5,
            "name": "podajnazwe",
            "size": 8,
            "benefit": 1,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10,
            "take": false
        },
        {
            "id": 6,
            "name": "podajnazwe",
            "size": 1,
            "benefit": 8,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10,
            "take": false
        }];
var W = 10; //truckCap
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

var take = [];
for (n = products.length, w = W; n > 0; n--) {
    if (sol[n][w]) { products[n-1].take = true;  w = w - products[n-1].size; }
    else           { products[n-1].take = false;                    }
}
console.log(products);