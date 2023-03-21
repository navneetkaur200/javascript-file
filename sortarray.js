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

//sorting array desending order


// arr=[55,23,27,65]
// for(i=0;i<arr.length;i++)
// {
//    for(j=0;j<3;j++)
//    {
//       if(arr[i]>arr[j])
//    {
//       x=arr[i]
//       arr[i]=arr[j]
//       arr[j]=x
//       console.log(arr)
//    }
//    }
// } 

//Sorting array in  ascending order 

// arr=[55,23,27,65]
// for(i=0;i<arr.length;i++)
// {
//    for(j=0;j<4;j++)
//    {
//       if(arr[i]<arr[j])  

//    {     
//     t=arr[i]
//     arr[i]=arr[j]
//    arr[j]=t
//     console.log(arr)
//  }
//  }
//}
    
// arr=[55,23,27,65]
// for(i=0;i<arr.length;i++)
// {
//    for(j=0;j<4;j++)
//    {
//       if(arr[i]<arr[j])      
//    {        arr[i]=arr[j]
   
//     console.log(arr)
//  }
//  }
// }   
    
    
                               //55, 23,27,65
                                 //arr[0]=55<55rong out of loop
                                 //55<27 rong out of loop
                                 //55<65 right now 
                                 //new array=65,23,27,65
                                 //arr[1]=23<65 yes replace
                                 //new array=65,65,27,65
                                 //arr[1]=23<55 right
                                 // new array=65,65,27,65
                                 //arr[2]=27<65 yes
                                 //new array=65,65,65,65
                                 //arr[2]=27<55
                                 //new array=65,65,65,65
                                 //arr[3]=55<65 yes
                                 //new array 65,65,65,65
                                 //arr[3]=27

                                 //65,23,27,65
                                 //65,65,27,65

                                 //65,65,65,65
      
                                