
    // function sum(x,y){
    //     let z = x + y;
    //    return z;
    // }
    // function sub(x,y){
    //     let z = x- y;
    //     return z;
    // }
    // console.log("sum Of Two Numbers : ",sum(10,20));
    // console.log("sub of Two Numbers : ",sub(20,10));
     

    // function Displaysum()
    // {
    //    var num =[10,20,30,40,50];
    //    var sum = 0;
          
    //   for(let i = 0 ; i<=num.length-1; i++)
    //   {
    //      sum = sum + num[i];
    //   }
    //    console.log(sum);
    // }
    // Displaysum();
    
//    function Displaysum(num);
    
//    var sum = 0;
//    for sum = 0;

//     function



// Function Anonemous
   const MyFunction = function (MyArr){
    var Sum = 0;
    for(let i = 0; i <= MyArr.length - 1; i++)
    {
        Sum += MyArr[i];
    }
    return Sum;
   };

   var x = [10,20,30,40,50,60];
   var Result = MyFunction(x);
   console.log(Result);
