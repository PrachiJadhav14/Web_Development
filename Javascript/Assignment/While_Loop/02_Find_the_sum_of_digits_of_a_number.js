////Find the sum of digits of a number (e.g., 123 → 1+2+3=6).
   
   let Num = 123;
   let sum = 0;

   while(Num>0){
      sum +=Num%10;
      Num = Math.floor(Num/10);
   }
   console.log("Sum Og Digits => ",sum);