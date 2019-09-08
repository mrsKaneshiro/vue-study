/**
*JSON的两个方法
*/
var book={
    title:"BOOKNAME",
    authors:["mike","cindy"],
    edition:3,
    name:undefined,
    toJSON:function () {
        return this.name="book123"
    }
}
console.log(typeof book);
var xuliehua=JSON.stringify(book);
console.log(typeof xuliehua);

var book2={
    title:"BOOKNAME",
    authors:["mike","cindy"],
    edition:3,
    newDate:123,
}

var book2_json=JSON.stringify(book2);

var boo2_copy=JSON.parse(book2_json,function (key,value) {
    if (key=="newDate") {
        return value=Date.now();
    }
    else {
       return  value
    }
})
console.log(boo2_copy.newDate);
