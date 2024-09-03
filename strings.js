var str='This is a string';
console.log(str.length);
console.log(str.indexOf('is'));
console.log(str.replace('string','Killadi'));
console.log(str);
console.log(str.split(' '));

//Array operator

// var arr=[12,14,27,75];
// arr.forEach(function(item,ind,arr2){
//     arr2[ind]=item>50;
// })

// console.log(arr);

var arr=[12,14,27,75];
// arr.forEach(function (item,ind,arr2){
//     console.log(item);
// })


//Filter function

var arr2=arr.filter(function(item){
    return item>50;
})
console.log(arr2);
console.log(arr);

// Checkout map function
