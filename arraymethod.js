                //length method
//  A=['navneetkaur','gurjeetkaur','jashan']
//  console.log(A.length)
                 //Tostring method
// A=['navneetkaur','gurjeetkaur','jashan']
// console.log(A)
// console.log(A.toString())

                  //join method
// fruits = ["Banana", "Orange", "Apple", "Mango"];
//  console.log(fruits.join(" * "))
//                //pop method
//  fruit = ["Banana", "Orange", "Apple", "Mango"];
//  console.log(fruit.pop())//remove last element
//  console.log(fruit)
                 //push method
//  fruit.push('kiwi')//add a new element to a array at the end
//  console.log(fruit)
                  //shift method
// fruit.shift()//shift() method removes the first array element 
                   //unshift menthod   
// fruit.unshift('watermelon')//adds a new element to an array (at the beginning)
// fruit[0] = "cherry";
                       //delete method
// delete fruit[0]
// console.log(fruit)


//                  //concating 

// arr1=['delhi','goa','moga','china']
// arr2=['india','ludiana','khanna','fatehgarhsahib']
// arr3 = ["Robin", "Morgan"];
// arr4=arr1.concat(arr1,arr2)
// console.log(arr4)

                    //splice and slice method
// fruit1 = ["Banana", "Orange", "Apple", "Mango"];
// fruit1.splice(2, 2, "Lemon", "Kiwi");
// fruit1.splice(2,3)
// console.log(fruit1)
// fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// f=fruits.slice(1)// method creates a new array.

// console.log(f)
// food = ['pizza', 'cake', 'salad', 'cookie','lll','gggg'];

// food.splice(3,3,'burger')
// console.log(food)

                        //array sort method
// x=["C", "B", "A", "Z","N"]
// console.log(x.sort())


// arr=[1,7,8,2,4,3,5,6,9,10]
// console.log(arr.reverse())
//  for(i=1;i<arr.length;i++)
//  {
//     console.log([i].sort())
   
//  }



// priceList = [1000, 50, 2, 7, 14];
// console.log(priceList.sort());


// arr=['banana','apple','mango']
// console.log('array sort in asecending order:', arr.sort())
// console.log('arry reverse :' ,arr.reverse())

// points = [40, 100, 1, 5, 25, 10];
// console.log(points.copyWithin(0, 3, 4));
// points.sort(function(a, b){return a - b});
// console.log(points)


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
                               //index of method
// const result = words.filter(word => word.length > 6);
// console.log(words.indexOf('limit'))
// console.log(words.lastIndexOf('present'))
// console.log(result);


                      //find maximan and minimum value in the array
// points = [40, 100, 1, 5, 25, 10];
// c=Math.max.apply(null, points)
// d=Math.min.apply(null,points)
// console.log(c)
// console.log(d)


//  points = [40, 100, 1, 5, 25, 10];
// function myArrayMax(arr) {
//     len = arr.length;
//     for(i=0;i<len;len--)
//     {
// max = -Infinity;
//    if (arr[len] > max)
//     {
//       max = arr[len];
//     }
//   }
//   return max;
// }
// console.log(myArrayMax(points))


// point= [40, 100, 1, 5, 25, 10];

// arr=['navneet','guri','mani','jot'] //array fill method returns an array by filling all elements with a specified value.
// arr.fill('Navi')
// console.log(arr)
languages = ["JavaScript", "Java", "C"];
check = languages.includes("Java");
console.log(check); 


numbers = [1, 2, 3, 4];
console.log(Array.isArray(numbers));
text = "JavaScript";
console.log(Array.isArray(text));
  
arr=[45,56,78,23]
function demo(marks)
{ 
  return  marks<30
   
}
c=arr.filter(demo)
console.log(c)