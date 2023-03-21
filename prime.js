number=4
let isprime=true;
 for(let i=2;i<number;i++)
    {
        if(number%i==0)
        {
            isprime=false;
        break;
    }
    }
    if(isprime)
    {
   console.log(`${number} is a prime number`)
    }
    else
    {
        console.log(`${number} is a not prime number`)
    }

