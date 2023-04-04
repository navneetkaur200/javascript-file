//promise is object used for handle asyn programing task in which easily debug errors
//Example 1
// // function prom(age){
// //   return new Promise(function(resolve,reject)
// // {console.log("pls wait fetching data")
// //   setTimeout(()=>{if(age>=18)
// // {
// //   resolve("adult")
// // }
// // else{
// //   reject("baby")
// // }
// // },4000)});}

// //  onfulfilled=(result)=>{console.log(result)}
// //  onreject=(error)=>{ console.log(error)}
// // prom(10).then(onfulfilled).catch(onreject)

//example 2
// complete=false;
// let prom=new Promise(function(resolve,reject)
//   {

//     if (complete) {
//       resolve("i am succesfull")
//     } else {
//       reject("i am failed")
//     }
//   })
// console.log(prom)

//example 3
// function getUsers(success) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve([
//           { username: 'john', email: 'john@test.com' },
//           { username: 'jane', email: 'jane@test.com' },
//         ]);
//       } else {
//         reject('Failed to the user list');
//       }
//     }, 1000);
//   });
// }function onFulfilled(users) { console.log(users);}
// function onRejected(error) { console.log(error);}
// getUsers(true).then(onFulfilled ).catch(onRejected);

 //Example 4

//  const count=true;
// countvalue=new Promise(function(resolve,reject)
// {
//   resolve("there is a countvalue")
//   reject("there is not cpuntvalue")
// })

// console.log(countvalue)
let count=0
countvalue=new Promise(function(resolve,reject)
{
  resolve(`The count value increase ${count++}`);
}
)
console.log(countvalue)
countvalue.then((result)=>{console.log(result)})