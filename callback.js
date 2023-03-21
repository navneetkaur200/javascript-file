function calling(x,y,cb){
     z = cb()
     console.log(z)
   setTimeout(()=>{cb()},5000)
    sum = x+y
    console.log(sum)
    }
// callback means function pass in another function
 calling(4,5,greetings)

function greetings(){
    console.log('hi i am callback function!!')
    return {name:'navneet',training:'javascripts'}
}






