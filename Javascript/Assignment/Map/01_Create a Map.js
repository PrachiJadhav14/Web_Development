///Create a Map → key: studentName, value: marks → print all using for…of.
 
let StudentMarks = new Map([
    ["Priya",90],
    ["Samarpita",99],
    ["Neha",81]

]);
for(const [Student,marks]of StudentMarks){
    console.log(`${Student}:${marks}`);
}