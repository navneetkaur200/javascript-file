
str="navi"
len=str.length
msg="It is palindrome";
for(i=0;i<len/2;i++)
{
    if(str[i]!==str[len-1-i])
    {
        msg="it is not palindrome";
    
    }
}
console.log(`${str}: ${msg}`);
