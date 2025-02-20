let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 Was Clicked");
    let a = 25;
    a++;
    console.log(a);
}

let div = document.querySelector("div");
div.onmousedown = () => {
    console.log("You Are Inside Div");
}
