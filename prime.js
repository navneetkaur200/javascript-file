// number=4
// let isprime=true;
//  for(let i=2;i<number;i++)
//     {
//         if(number%i==0)
//         {
//             isprime=false;
//         break;
//     }
//     }
//     if(isprime)
//     {
//    console.log(`${number} is a prime number`)
//     }
//     else
//     {
//         console.log(`${number} is a not prime number`)
//     }

    // function chkPrime(n)
    // {
    //     if(n == 1 || n == 0) 
    //     return false;
    // for(var i = 2; i < n; i++)
    //     {
    //   if(n % i == 0) 
    //      return false;
    //     }
    // return true;}
    // var num = 100;
    // for(var i = 1; i <= num; i++)
    //   { 
        
    //     if(chkPrime(i)) 
    //     {
    //     console.log(i)
    //    }
    // }

    arr=[2,3,4,5,41,43,47,53,71,111,22]
    primearr=[]
    for(i=0;i<arr.length;i++)
    {
        num=arr[i]
        isprime=true
        for(j=2;j<num;j++)
        {
            if(num%j==0)
            {
                isprime=false
                break;
            }
        }
        if(isprime && num>1)
        {
            primearr.push(num)
        }
    }
    console.log(primearr)