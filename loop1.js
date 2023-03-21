// arr = ['stream','json',56,78,[2,3],null]
// console.log(arr)

// console.log(arr.length)
// arr1 = [1,3,4,5,6,7,8,9,2,22,33,44,66,88]
// console.log('arr1',arr1.length)
// index method
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// for(i=0;i<6;i++){
//     console.log(arr[i])
// }
// how to find even number from array using forloop.

// for(i=0;i<14;i++){
//     console.log(arr1[i]%2==0)
// }

// for(i=1;i<=11;i++){
//      for(j=0;j<11;j++)
//      {
//                  x=i*j
//                 console.log(x)
//                 // console.log(x)  
//               }
//      }

// for(i=0;i<10;i++){
//         console.log('')
// }

// //backtick character ,literal string

// x= 'kirandeep'
// a = 10
// b = 25
// console.log('my name is', x)
// console.log(`my name is ${x}`)
// console.log('adding two numbers a and b',a+b)
// console.log(`adding number ${a} and ${b} is ${a+b}`)

//nested for loop

// for(i=1;i<4;i++){

//         for(j=1;j<11;j++){
//                 console.log(i*j)
//         }
// }

// let n = 5; 
// let string = "";

// for(let i = 0; i < n; i++) 
// {
//          for(j=0;j<n;j++)
//         {
//     string += "*";
//     string+='\n'}
// }
// console.log(string);
//       a=20
//       b=30
//       console.log(`the sum of ${a} and ${b} is ${a+b} `)

// s = ''
// for(i=1;i<11;i++){
//         for(j=1;j<11;j++){
//                 console.log(i*j)

//         }
// }
x=''
for(i=1;i<11;i++)
{
for(j=1;j<11;j++)
{  x+=i*j
      x+='\t'
         }
 x+='\n'
}
console.log(x)
const name1 = 'Navneet';
const country = 'khanna';
console.log("Hi, I'm " + name1 + "  and I'm from " + country);
console.log(name1+' '+country)
