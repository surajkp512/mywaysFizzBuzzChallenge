


let x=9650856104;
let i = String(x).split("").map((num)=>Number(num)).reduce((x,y)=>x+y);
let y ="";
for (let z=1; z<=i; z++)
{   

    if ((z%5== 0) &&(z%4==0) )     
    y+="FizzBuzz ";          
        

    else if (z%4 == 0)   
    y+="Fizz ";
     
    else if ((z%5) == 0)
    y+="Buzz ";              
     
    else      
    y+=`${z} `;    
        
}
console.log(y)

