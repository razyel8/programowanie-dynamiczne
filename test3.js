date2 = "2016-05-31T22:01:01.000Z";
date1 = "2019-03-10T22:00:00.000Z";

function formatDate(date){
    var dt = new Date(date);
    return dt.getUTCDate() + "/" + (dt.getUTCMonth()+1) + "/" + dt.getUTCFullYear();
}
console.log(formatDate(date2));



function parseDate(str) {
    var mdy = str.split('/');
    return new Date(str);
}

function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}

console.log(daydiff(parseDate(date1), parseDate(date2)));

