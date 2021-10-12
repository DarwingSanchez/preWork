var num5 = 5 
var num3 = 3
var modulo = 0
for(i=1 ; i <= 100; i++){
    if(i % num3 == 0 && i % num5 != 0){
        document.write("Fizz " + i +"<br>");
    }else if( i % num5 == 0 && i % num3 != 0){
        document.write("Buzz " + i + "<br>");
        
    }else if(i % num3 == 0 && i % num5 == 0){
        document.write("FizzBuzz " + i + "<br>")
        
    }   
}