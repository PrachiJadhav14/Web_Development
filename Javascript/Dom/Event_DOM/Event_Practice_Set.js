let modBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; //dark

modBtn.addEventListener("click",() => {
    if (currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("lightya ");
    }else{
        currMode = "light";
       body.classList.add("light");
       body.classList.remove("dark");
    }
     
    console.log(currMode);
});
