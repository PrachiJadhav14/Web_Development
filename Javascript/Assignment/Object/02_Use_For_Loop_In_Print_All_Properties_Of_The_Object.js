// Use For Loop In Print All Properties Of The Object


// Use For Each Print All Properties Of The Object
// let studentInfo = [{name : "Prachi",age :20,marks : 90,Course : "Bcs"},
//                 {name : "Prachi",age :20,marks : 90,Course : "Bcs"},
//                 {name : "Prachi",age :20,marks : 90,Course : "Bcs"}
//             ];
// studentInfo.forEach((Info,index)=>{
//     console.log(`Student ${index + 1};`);
//     console.log(`Name ${Info.name};`);
//     console.log(`age ${Info.age};`);
//     console.log(`Coursr ${Info.Course};`);
    
//     console.log("--------*******--------");
// });    
// =============================================================================

//  Use For Loop Print All Properties Of The Object

let studentInfor = [{name : "Prachi",age :20,marks : 90,Course : "Bcs"},
                {name : "Prachi",age :20,marks : 90,Course : "Bcs"},
                {name : "Prachi",age :20,marks : 90,Course : "Bcs"}
            ];


       for(let i = 0; i < studentInfor.length;i++)
       {
         console.log("student" + (i+ 1) + ": ");
         console.log("Name" + studentInfor[i].name);
         console.log("Age"+ studentInfor[i].age);
         console.log("Course"+ studentInfor[i].Course);
         console.log("-----------------*************---------------");
       }




// Use for...in to print all properties of the object.


let student = {
    name : "Prachi",
    age : 20,
    location : "Pune"
};
for(let key in student){
    console.log(key + ": "+student[key]);
}



