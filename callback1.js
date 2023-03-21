// function demo(array,n)
// {
//     setTimeout(()=>{n()},5000)
// n()
// for(i=0;i<array.length;i++)
// {
//     console.log(array[i])
// }
// }
// demo([1,2,3,4,5],demo2)

// function demo2()
// {
//     console.log('hy gurjeet')
// }
//setTimeout(function(){ console.log("This message is shown after 6 seconds");},6000)


// function main1(B)
// {
//     B()
//     console.log("hello everyone")
// }
// main1(main2)
// function main2()
// {
//     console.log("hyyy")

// }


// function first(a)
// {
// return a;
// }
//       function second(b,c)
//      {
//            D=b(c)
//             for(i=0;i<D.length;i++)
//            console.log(D[i])
//      }
//        second(first,['navi','gurjeet','jass'])


function main3(x)
{
 return x;
}
function main4(y,z)
{
 u=y(z)
 for(i=0;i<u.length;i++)

 {
 if(u[i]%2==0)
 { 
     console.log(`${u[i]}: is even number`)
 }
 else{
     console.log(`${u[i]}: is odd number`)
 }
}
}
main4(main3,[1,2,3,4,5,6,7,8,9,10])