//   class Arithmetic {
//     constructor() {
//       this.value = 9;
//     }
  
//     addition(value) {
//       console.log(this.value+value)
//       return this
//     }
//     subtraction(value) {
//      console.log(this.value-value)
//       return this
//     }
   
//   }
//    c= new Arithmetic()
//   .addition(3)  
//     .subtraction(6)   
//       console.log(c)

    //METHOD CHAINING AND BULITIN METHOD CHANINING
    // class method_chaining {
    //     constructor()
    //     {
    //         this.name="navi",
    //         this.age=23,
    //         this.address="khanna",
    //         this.phoneno=9877913515
    //         this.fun=()=>{console.log(this.name)
    //       return this
    //       }
    //     }
    //     method1() {
    //           console.log("Hello everyone");
    //           return this;
    //         }
    //         method2() {
    //           console.log("Name: ",this.name+" "+"Age: ",this.age);
    //           return this;
    //         }
    //         method3() {
    //           console.log("address:  ",this.address+" "+"phoneno: ",this.phoneno);
    //           return this;
    //         }
    //         }
    //       obj = new method_chaining()
    //         .method1()
    //         .method2()
    //         .method3();
    //        console.log(obj)
    //       c=obj.name.toUpperCase().replace("NAVI","navneet").length
    //       console.log(c)
           
        //   stu=["navi","mani","guri"]
          // // stu1=[]
          // // stu1.push(stu)
          // // console.log(stu1)
          // name1=[...stu]//spread operator
          // console.log(name1)
          
          
          
          // const food=[{name:"banana",type:"fruit"},
          // {name:"Apple",type:"fruit"},
          // {name:"chocolate",type:"candy"},
          // {name:"orange",type:"fruit"}
          // ]
          arr=[50]
          //food.map(x=>console.log(x))//print single single element in array//method calls a function for each element in an array.
          arr.map(item=>console.log(item)).filter(a=>console.log(45<a))


          // food.reduce((result,fruit)=>{(result.push(fruit))
          // return result;
          // },[]);
//         const test = ['a', 'b', 'c'];
// test.push('d')
// console.log(test)

// const newScream = text => [ ...text ,'!'].join('*').toUpperCase()

// newScream('hello')

// console.log(newScream('hello'))
// function thisname(){

//    this.y=23;
//   function inner()
//   {
//     this.y=34;
//     return this.y;
//   }
//   inner()
// }
// thisname()
// console.log(thisname())

// class dog{
//   name="navi"
//   is=null
  
//   log()
//   {
//     console.log(this)
//   }
//   bark()
//   {
//     this.is="woffing";
//     this.log();
//     return this;
// }
// walk()
// {
//   this.is="walking";
//   this.log();
//   return this;
// }

// }
// Dog=new dog()
// Dog.log()
// Dog.walk().bark()


// arr = [3, 4, 5, 6];
// modifiedArr = arr.map(function(element){return element *3;});
// console.log(modifiedArr); 
// c = arr.reduce((accumulator, currentValue) =>accumulator + currentValue,);
// console.log(c)
// function checkEven(arr) {
//   if (arr % 2 == 0)
//     return true;
// }
// evenNumbers = arr.filter(checkEven);
// console.log(evenNumbers);

// class strmethod{
// word="navneet"
// len(){
//  console.log(this.word.length)
// }
// toupper(){
//    console.log( this.word.toUpperCase())
//     return this
//  }
// replace1()
// {
//   console.log(this.word.replace("navneet","navi"))
//   return this


// }}
// str=new strmethod()
// str.len().toupper().replace1()

// class arrmethod{
//     arr=["5,6,7,3,1,4","4,5,6,7"]
//     len(){
//       //console.log(this.arr)
//       return this;
//     }}
// demo=new arrmethod()
// demo.len()
// console.log(demo.arr.join("*").length)

// const food=[{name:"banana",type:"fruit"},
//   {name:"Apple",type:"fruit"},
//   {name:"chocolate",type:"candy"},
//   {name:"orange",type:"fruit"}
//   ]
//arr=[1,2,3,4,5,6]
//  food.map(x=>console.log(x))//print single single element in array//method calls a function for each element in an array.
//   food.map(item=>console.log(item.name))
  

  // function d(x,y){
  //   return x+y

  // }
  // console.log(food.reduce(d))
  

  // return[...new Set(result)];
// },[]);

// class demo{

// arr=["1,2,3,4,5","4,5,6"]

// a(x,y)
// {
//   return x+y
// }
// }
// d=new demo()
// d.a()
// console.log(d.arr.reduce(d.a).join("*"))