var types = [{
    a:'',
    b:'',
    c:3
},
{
    a:4,
    b:2,
    c:6
}
]


Object.keys(types[0]).forEach(k => (!types[0][k] && types[0][k] !== undefined) && delete types[0][k]);

console.log(types[0]);



// var filterArray = ['a','b']

// // console.log(types[0])

// var array = [];

// var result={};
// for(var i = 0;i<types.length;i++){
//     for(var type in types[i]){
//         if(filterArray.indexOf(type)>-1){
//             result[type] = types[i][type];
//         }
//     }
//     console.log(result);
//     result.c= 5;
//     array.push(result);
//     result={};
// }

// console.log(array);



