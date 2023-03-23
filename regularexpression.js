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




     re =new RegExp (/\S+@\S+\.\S+/g)
    result = re.test('navneet @gmail.com');
    if (result) {
        console.log('The email is valid.');
    }
    else {
        console.log('enter valid email')
    }
  
    re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
    result = re.test(9877913515);
    if (result) {
        console.log('The number is valid.');
    }
    else {
      console.log('number is not valid')}