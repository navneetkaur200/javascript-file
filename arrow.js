//  A = () => console.log('hello everyone');
// A(); 

// B = x=> console.log(x);
// B('My self Navneet Kaur'); 
// let age = 18;

// let welcome = (age <= 18) ? () => console.log('Baby') :() => console.log('So I am Adult');

// welcome();



// arroe function with Rest parameters ...
// var show = (a,...args) => {  
//     console.log(a + " " + args);  
// }  
// show(100,200,300,400,500,600,700,800);  

//witout return statment
// var show = a =>  
//    a/2;  
// console.log(show(4));  

// C =(b)=>b
// {
//     console.log("hy")
// }
//  function fun(a,z)
// {
// a(z)
// console.log(a)
// }
// fun(C,8)
 


//  obj={name:"navi",age:18,getItem:()=>{console.log("hello everyone")}}
// console.log(obj["getItem"])//bracket notation
// console.log(obj.name)//accessor dot notation
// obj.getItem()
// console.log(obj["getItem"]())


// function get(x,y)
// { return {name:"navneet",address:"khanna",getvalue:(x,y)=>
//     {
//       sum=x+y
//       return sum;
//       }}}
// //console.log(get())
// demo=get()
// console.log(demo)
// console.log(demo.getvalue(20,30))

// function printarray(arr)
// {
// for(i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }
// return {lengthofarray:arr.length,sorting:(arr)=>
// {  
//      for(i=0;i<arr.length;i++)
//     {
//        for(j=0;j<4;j++)
//        {
//           if(arr[i]<arr[j])  
    
//        {     
//         t=arr[i]
//         arr[i]=arr[j]
//        arr[j]=t
//        console.log(arr)
//     }
//     }
//   }  
// }  
// }
// }
// demo=printarray([55,23,27,65])
// console.log(demo.sorting([55,23,27,65]))