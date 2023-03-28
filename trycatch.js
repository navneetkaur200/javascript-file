
// try{
    
//     console.log(c)
// }
// catch(error){
//    console.log('Error message: ' + error);  
// }

   
               
//     try {
// functiongun() 
// console.log('hh')    
// }
//     catch ( error ) 
//     {
//         console.log( error.name);
//         console.log(error.message);
//         console.log('Error'+error)
//     }


    
    var num1 = 100;
    var num2 = 0;
               
    try {
     c= num1/num2
       console.log(c)
    }
    catch ( error ) {
        console.log("Error: " + error );
    }

    function myFunc() {
        var num = 50;
         try {
            
                console.log("Value of variable a is : " + num );
            }
        catch ( error ) {
            console.log("Error: " + error.description );
            }
        finally {
            console.log("Finally, block will always execute!" );
            }
    }
    myFunc()
    