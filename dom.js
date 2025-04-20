//arrow function
// function hello(a,b)
// {
//     console.log(a+b);

// }
//  const hello=(a,b)=>{
//     console.log(a+b);
// }
// hello(3,5);
// ab apn bat karege for each in javascript
let arr=[1,2,3,4,5];
// arr.forEach((val,ind,arr)=>{
//     console.log(val,ind,arr);
// })
// map ki baat
// let newarr=arr.map((val,inx)=>{
// return val+inx;

// })
// console.log(newarr);
// let newarr=arr.filter((val)=>{
//     return val%2==0;
// })
// console.log(newarr);
let newarr=arr.reduce((prev,curr)=>{
return prev+curr;
})
console.log(newarr);