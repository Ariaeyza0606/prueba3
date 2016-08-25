var n = parseInt(prompt("Ingrese un numero"));
if(n%2==0){
    if(n>=2 && n<=5){
       document.write("good"); 
    }else if(n>=6 && n<=20){
        document.write ("Greit!");
    }else if (n>=21 && n<=100){
        document.write ("Perfect!");
    }
}
else{
   document.write("odd"); 
}
