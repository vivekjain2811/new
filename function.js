// arrow function 
// let a=5;
// let b=6;

// function sum(a,b)
// {
// return a+b;
// }id
// console.log(sum(5,7));
// const arrowfun=(a,b)=>{
// return a+b;
// } 
// console.log(arrowfun(6,56));
//higher order function are those function which a function 
// as a parameter of other function or pass to another  function
//map function return a new array 
// let arr=[1,2,3,4,5];
// arr.forEach((val,idx,arr)=>{
// console.log(val*val)
// });
// let newarr=arr.map((val,idx,arr)=>
//     {
//         return val*2;
//     })
//     console.log(newarr);
//     let newarr1=arr.filter((val)=>{
//         return val%2==0;
//     })
//     console.log(newarr1);
// let arr=[1,2,3,4,5];
// let dof=arr.reduce((res,curr)=>{
//     return(res>curr)?res:curr;
// });
// console.log(dof);
// let marks=[1,2,4,5,90,87,98];
// let output=marks.filter((val)=>{

//     return val>=90;
// })
// console.log(output);
let n=prompt("enter a number");
let arr=[];
for(let i=1;i<=n;i++)
{
    arr[i-1]=i;
}
let out=arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(out);