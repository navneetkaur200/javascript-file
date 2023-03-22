
function main(firstName,lastname,address) {
    return{
        firstName: firstName,
        lastname:lastname,
        address:address,
        getName() 
        {
         return 'My name is  ' + firstName + ' ' + lastname;
        }
      }
    }
    
    person1 = main('Navneet','Kaur');
   console.log(person1.getName());
    