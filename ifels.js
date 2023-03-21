// a=10
// b=10
// if(a==b)
// {
//     console.log(true)
// }

// let x 
// let str = null

// if(str){
//     console.log('the number is positive')
// }
// else{
//     console.log('the number is negative')
// }

// let n = 0;
// let x1 = 0;
// while (n < 3) {
//   n++;
//   x1 += n;
//   console.log(x1)
// }// 

// age= 18
//  if(age>=18)
// {
//   console.log('you are adult')
//  }
//  else
//  {
// console.log('you are child')
// }

// name2='navneet kaur'
// age=22

// {
//     console.log('My name is '+name2+ '  i am '+age+' year old')
// }
 
// string=''
// for(i=0;i<5;i++)
// {
//     for(j=0;j<5;j++)
//     {
//       string+='*'
      
//     }
//     string+='\n'
//     }
//    console.log(string)

    
// str=''
// for(i=0;i<=5;i++)
// {
//     {
//     if(i===0 || i===4 )
//    str+=''
// }
   
// }
// console.log(str)
//   n=4 
// str=""
// for(i=0;i<=n;i++)
// {
//  for(j=0;j<=n;j++)
//  {
//     if(i===0 || i===n-1)
//     {
//         str+='*'
//     }
//     else{

//         if(j===0 || j===n-1){

//          str+='*'
//         }
//         else{

//             str+=''
//             }
//     }

//  }
//  str+='\n'
// }
// console.log(str)



// let n = 5; 
// let string = "";
// for(let i = 0; i < n; i++) 
// { 
//   for(let j = 0; j < n; j++) 
// { 
//     if(i === 0 || i === n - 1) 
// {
//       string += "*";
//     }
//                else 
//           {
//       if(j === 0 || j === n - 1) 
//             {
//         string += "*";
//               }
//             else 
//            {
//         string += " ";
//             }
//     }
//   }
// string += "\n";
// }

// console.log(string);


// /////
// n = 5;
// str = "";
// for ( i = 1; i <= n; i++) {

//    for (let j = 1; j <= n; j++) {
//       str += j ;
//    }

//  //  
//    str += "\n";
// }
// console.log(str);


// let n1 = 5; 
// let string1= "";

// for(let i = 0; i < n1; i++) { 
//   for(let j = 0; j < n1; j++) { 
//     if(i === 0 || i === n1 - 1) {
//       string1+= j;
//     }
//     else {
//       if(j === 0 || j === n1- 1) {
//         string1 += j;
//       }
//       else {
//         string1 += " ";
//       }
//     }
//   }

//   string1 += "\n";
// }

// console.log(string1);


// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i++) {

//   for (let j = n; j > i; j--) {
//     string += " ";
//   }

//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }

// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = (n - i) * 2 - 1; k > 0; k--) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) {
//      // internal loop
//      if(i==0 || i==4){
//       string += "*";
//      }
    
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

// var myRoutine = require('./switch')

// console.log(myRoutine())