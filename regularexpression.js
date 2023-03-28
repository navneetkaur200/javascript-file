// const regex = new RegExp(/^a/);//symbol ^ is used to check if a string starts with a certain character.
// console.log(regex.test('aoooos')); //

// const regex1 = new RegExp(/s$/);//symbol $ is used to check if a string ends with a certain character.
// console.log(regex1.test('sas')); 

// text = "Is this all there is?";
//  pattern = /[h]/g;
// console.log( text.match(pattern))

// text1= "123456789";
// pattern1 = /[^1-5]/g;
// console.log(text1.match(pattern1))

// re=new RegExp(/[1-5]/)
// console.log(re.test('09876'))

// text2 = "re, green red, green, gren, gr, blue, yellow";
//  pattern2= /(red|green)/g;
//  result2 = text2.match(pattern);
//  console.log(result2)


//  const regex11 = new RegExp(/ma?n/);//symbol $ is used to check if a string ends with a certain character.
// console.log('question mark',regex11.test('maan')); 

// const ex = new RegExp(/a{2,3}/)
// console.log('breaces',ex.test('man'))//




    //  re =new RegExp (/\S+@\S+\.\S+/g)
    // result = re.test('navneet @gmail.com');
    // if (result) {
    //     console.log('The email is valid.');
    // }
    // else {
    //     console.log('enter valid email')
    // }
  
    // re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
    // result = re.test(9877913515);
    // if (result) {
    //     console.log('The number is valid.');
    // }
    // else {
    //   console.log('number is not valid')}


// program to validate the phone number
// function validnumber(num){
//     regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
//     result = num.match(regexp);

//     if (result) {
//         console.log('The number is valid.');
//     }
//     else {
     
//         console.log(`the ${num} format is not valid. The valid format is apply xxx-xxx-xxxx.`)
//      }
// }
// validnumber("578-482-5895")

// //the program is validate the email address.
// function validemail(mail){
//     re=/\S+@\S+\.\S+/g;
//     result1=mail.match(re);
//     if(result1)
//     {
//         console.log(`The ${mail} is valid`)
//     }
//     else{
//         console.log(`The ${mail} is not valid. Please Enter the valid ${mail} Format.`)
//     }
// // }
//     validemail("gk4636963  @gmail.com")

// class user{
// constructor(a,b)
// {
//      this.email=a;
//      this.password=b;
    
// }
//   static person=(a,b)=>{
//   var mail=/\S+@\S+\.\S+/g; 
//   var pass= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
//  if(!mail.test(a))
//  {
//     return `not valid email`
//  } 
//  if(!pass.test(b))
//  {
//     return `not valid password`
//  }
//  return new user(a,b)
//     } 
// }
//  newuser=user.person("navneet153@gmail.com",'12345678911')
// console.log(newuser)

// class user{
//  constructor(email,password)
//  {
// this.email=email,
// this.password=password;
// }
// validateemail(email)
// {
//    email=/\S+@\S+\.\S+/g;
  
//    if( this.email.match(email))
//    {
//        console.log(`The email is valid`)
//    }
//    else{
//        console.log(`The emailis not valid. Please Enter the valid email Format.`)
//    }
// }
// validatepassword(password){
//    password=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
//   if( this.password.match(password))
//    {
//        console.log(`The password is valid`)
//    }
//    else{
//        console.log(`The password is  not valid. Please Enter the valid password.`)
//    }
// }
// }
// person=new user("navneet@gmail.com",'1234567899')
// person.validateemail()
// person.validatepassword()
