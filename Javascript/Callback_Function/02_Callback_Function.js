
function Display(X){
       console.log("Value Of X :",X);
    }
    function sum(a,b,sendFunction){

        let sum = a + b;
        sendFunction(sum);  
    }
     sum(10,60,Display);


//     2)
    
//    function Display(X){
  
//        console.log("Value Of X :",X);
//     }

//     function sum(a,b,sendFunction){

//         let sum = a + b;
//         sendFunction(sum);
        
//     }


//     sum(10,60,Display);







//3)
    // function Display(X){
    //     console.log("Inside Function ");

    // }

    // function fun(y){
    //     console.log("Inside fun",y);
    //     Display();

    // }

    // function sum(a,b,sendFunction){
    //     let sum = a + b;
    //     sendFunction(sum) 
    // }

sum(10,20,fun);

