let btn1 = document.querySelector("#btn1");

///EVENT_DOM_OBJECT

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);            //Type         
//     console.log(evt.target);         ///Target
//     console.log(evt.clientX, evt.clientY);

//     console.log("btn1 Was Clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }



// let div = document.querySelector("div");
// div.onmousedown = (evt) => {
//     console.log("You Are Inside Div");
//     console.log(evt);
//     console.log(evt.type);            //Type         

//     console.log(evt.target);         ///Target
//     console.log(evt.clientX, evt.clientY);
///

btn1.addEventListener("Click", () => {
    console.log("button1 Was clicked");
});


