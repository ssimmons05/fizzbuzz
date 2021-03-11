
    let answer = "";
    /*-- Create a loop that loops from 1 to 100 ---*/
    for (let i= 1; i <= 100; i++) {
        /*-- If the number is a multiple of both 3 & 5 then print "FizzBuzz" ---*/
        if (i % 3 == 0 && i % 5 == 0) {
            answer += "<span class='fizzbuzz'>FizzBuzz<br></span>";
        /*-- If the number is a multiple of 3 then print "Fizz" ---*/
        } else if (i % 3 == 0) {
            answer += "<span class='fizz'>Fizz<br></span>";
        /*-- If the number is a multiple of 5 then print "Buzz" ---*/
        } else if (i % 5 == 0) {
            answer += "<span class='buzz'>Buzz<br></span>";
        /*-- If the number isn't a multiple of 3 or 5 then print the number only ---*/
        } else {
            answer += "<span class='num'>" + i + "<br></span>";
        }
    }

    document.querySelector("#message").innerHTML += answer;
    
    
 
   





/*---------
PSEUDO CODE

Create a for loop that loops from 1 to 100
If # % 3 then print "Fizz"
If # % 5 then print "Buzz"
If # % 3 && # % 5 then print "FizzBuzz"
Create a way to display it on the webpage
----------*/