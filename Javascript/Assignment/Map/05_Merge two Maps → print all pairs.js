///Merge two Maps → print all pairs.
 

let emply1 = new  Map([
    ["name","Shiv"],
    ["age","18"]
]);

let emply2 = new Map([
     
    ["City","Karad"],
    ["Mob No",9011850826]

]);

let EmployeInfo = new Map([...emply1,...emply2]);

for(let [key , value]of EmployeInfo){
    console.log(key + " => " + value);
}