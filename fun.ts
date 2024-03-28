   // Assignment no 1    
   // funtion for average of three number
   function average3 (num1:number , num2:number , num3:number){
    let ans = (num1 + num2 + num3 ) / 3
    return ans ;
   }
 let  ave = average3(77,88,99)
console.log(ave);


   //Assigment no 2
   //Function even and odd
function check(num: number) {
    if (num % 2) {
      console.log(num + " is Odd");
    } else {
      console.log(num + " is Even");
    }
  }
  check(78);
  
  
  // Asssignment no 3 
  // Grade checker
  function grade(per: number) {
    if (per <= 100 && per >= 90) {
      console.log("Wow! you got  A1 Grade");
    } else if (per <= 89 && per >= 80) {
      console.log("Wow! you got  A Grade");
    } else if (per <= 79 && per >= 70) {
      console.log("Wow! you got  B Grade");
    } else if (per <= 69 && per >= 60) {
      console.log("Wow! you got  C Grade");
    } else if (per <= 59 && per >= 50) {
      console.log("Wow! you got  D Grade");
    } else if (per <= 49 && per >= 40) {
      console.log(" you got  E Grade");
    } else if (per <= 39 && per >= 33) {
      console.log("you got  F Grade  ");
    } else {
      console.log("you got  fail  ");
      console.log("Do hard work for next time ");
    }
  }
  grade(78)

  
  