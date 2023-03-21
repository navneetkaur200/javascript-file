string=""
for(i=0;i<3;i++){
    if(i===0||i===4){
        string+=" "
    }
    else{
        string+="*"
    }
}
string+="\n"

for(j=0;j<4;j++){
    if(j===0||j===3){
        string+="*"
    }
    else{
        string+=" "
    }
    
}
string+="\n"

for(i=0;i<3;i++){
    if(i===0||i===3){
        string+=" "
    }
    else{
        string+="*"
    }
}
console.log(string)