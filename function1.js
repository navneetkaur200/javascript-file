
  // y gets the value "Toyota"
//   const y = mycar.make;
//   console.log(y)



// num1 = 20;
// num2 = 3;
// name1 = "navi";
// function multiply() 
// {

// console.log(`${name1} scored ${num1 * num2}`);
// }

//  multiply();
// //nested fuction
// function getScore() {

//     function add() {
//     console.log(`${name1} scored ${num1 + num2}`);
//   }
// add();
// }
// getScore(); 

// function main1(a,b){
//     console.log(a+b)
//     function main2()
// {
//     console.log(a*b)
    
// }
// main2()

// }
// main1(2,5)


// function square(x) {
//     return x * x;
//   }
//    demo = square(3);
//   console.log(demo) 
  
// function outerfuncation(arr)
// {
// for(i=0;i<arr.length;i++)
// {
// console.log(arr[i])
// }
// function innerfuncation(obj)
// {
//     for(key in obj)
//     {
//         console.log(obj[key])
//     }

// }
// innerfuncation({name:'navu',address:'khanna'})
// } 

// outerfuncation(['n','a','v','i'])


// function demo(arr)
// { sum=0
// for(i=0;i<arr.length;i++)
// {
// sum=sum+arr[i]

// }
// return sum;
// }
// arr1=[1,2,3,4]
// console.log(demo(arr1))//print sum of arr

//demo([1,2,3,4,5])
//console.log(i)//print lenght of arr//5
//console.log(sum)//print sum of arr//15

function getAge(name,age)
{
console.log(name+" age is :"+age+" years");
}
function getName(name,age)
{
console.log("I am :"+name+"");
getAge(name,age);
}
getName("navneet kaur",23);
getName("gurjeet kaur",22);
getName("manpreet",21);