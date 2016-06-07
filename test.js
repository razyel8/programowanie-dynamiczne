console.log("START");
var products =
    [
        {
            "id": 0,
            "name": "podajnazwe",
            "size": 5,
            "benefit": 2,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10
        },
        {
            "id": 1,
            "name": "podajnazwe",
            "size": 6,
            "benefit": 5,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10
        },
        {
            "id": 2,
            "name": "podajnazwe",
            "size": 8,
            "benefit": 3,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10
        },
        {
            "id": 3,
            "name": "podajnazwe",
            "size": 8,
            "benefit": 3,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10
        },
        {
            "id": 4,
            "name": "podajnazwe",
            "size": 8,
            "benefit": 7,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10
        },
        {
            "id": 5,
            "name": "podajnazwe",
            "size": 8,
            "benefit": 1,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10
        },
        {
            "id": 6,
            "name": "podajnazwe",
            "size": 1,
            "benefit": 8,
            "expirationDate": "2016-05-30T22:00:00.000Z",
            "price": 10
        }];
var truckCap = 10;
var table = [];

var tab = [2,3,4,5,5];
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

var plecak = function(waga, pocz){
    var temp = "";
    for(var i = pocz ; i < products.length ; i++) {//iteracja tablicy od pocz
        if(products[i].size === waga) {
            return i+":"+products[i].size;//jezeli trafilismy z waga to zwracamy wartosc
        } else if(waga > products[i].size) {//jezeli waga byla by mniejsza niz aktualny element to nie ma co sprawdzac dalej
            temp = plecak(waga - products[i].size, i + 1);//zobaczymy co zwroca pozostale iteracje tablicy
            if(!temp.contains("Brak rozwiazań!")) {
                return i+":"+products[i].size + " " + temp;//jezeli zwrocone wartosci nie zawieraja 'brak rozwiazan' to znaczy ze trafilismy na wynik, podaj dalej
            }
        }
    }
    return "Brak rozwiazań!";
}
var wynik = plecak(truckCap,0);
console.log(wynik);
console.log("0:2 1:3 2:4 Brak rozwiazań!".contains("Brakcdsrozwiazań!"));


//Wypełnienie tabeli zerami
for(var i = 0; i<products.length; i++){
    table[i] = [];
    for(var j = 0; j<truckCap; j++){
        table[i][j] = 0;
    }
}
//Wypełnienie plecaka
for(var i = 0; i<products.length; i++){
    for(var j = 0; j<truckCap; j++){
        if(products[i].size <= j){
            table[i][j] = products[i].size;
            //console.log(products[i].name);
        }
    }
}


