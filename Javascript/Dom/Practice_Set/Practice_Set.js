// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "From Apna College Student";

let divs = document.querySelectorAll(".box");

for(div of divs){
    console.log(div.innerText);
}


// divs[0].innerText = "New unique value 1";
// divs[1].innerText = "New unique Value 2";
// divs[2].innerText = "New unique Value 3";



let idx = 1;
for (div of divs){
    div.innerText = `New unique value ${idx}`;
    idx++;
}
