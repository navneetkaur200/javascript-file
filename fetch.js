const token='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';
const username="navneetkaur200";
const url=`https://api.github.com/users/${username}`;

fetch(url,{
    headers:{
        'Authorization':`token ${token}`
    }
})
.then(response=>{
    if(!response.ok)
    {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.error('There was a problem with the fetch operation:',error);
});
