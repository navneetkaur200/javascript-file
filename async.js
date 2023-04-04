//example 1
// name1="navneet kaur"
// setTimeout(()=>{console.log(`the name:${name1};`)},1000);
// function callname(name1)
// {
//     console.log(`name call in function:${name1}`)
// }
// callname(name1)

//example 2
// arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
// for(i=0;i<arr.length;i++)
// {
//     for(j=0;j<arr.length;j++)
//     {
//         console.log(arr[j])
//     }
//     console.log(arr[i])
// }
// function getUser()
// {
//     return[{username:"gurjeet",email:"gk123@gmail.com"}]
// }

//exanple 3
// function getuser()
// {
//     User=[];
//     setTimeout(()=>{
//         User=[{username:'navi',email:"nk1222@gmail.com,"},
//     {username:'navneet',email:"navneet45@gmail.com"}]
//     },1000);
//     return User;
// }
// function findUser(username){

//     user=getuser();
//     console.log(user)
//     users=user.find((users)=>users.username===username)
//     return users
// }
// console.log(findUser('navi'))

// //example 4

// function getUsers(callback)
// {
//     Users=[]
//     setTimeout(()=>{Users=[{username:"gurjeet",email:"gk1@gmail.com"}
//              , {username:"jas",email:"js123@gamil.com"}]
//              callback(Users);},2000);
//              return Users;
// }
// function findUser(username)
// {
//   getUsers((users)=>{ user=users.find((user)=>user.username===username)
//     console.log(user); })
// }
// console.log(findUser('jas'))


//example 5
// function getUser(callback)
// {
//     Users=[]
//     setTimeout(()=>{Users=[{username:"gurjeet",email:"gk1@gmail.com"}
//                  , {username:"jas11",email:"js123@gamil.com"},
//                  {username:"jas",email:"js12345@gamil.com"}]
//                  callback(Users);},2000);}
// function findUser()
// {
//     getUser((Users)=>{
//         for(i=0;i<Users.length;i++)
//         {
//             console.log(Users[i])
        
//         }
//     })
// }
// findUser()