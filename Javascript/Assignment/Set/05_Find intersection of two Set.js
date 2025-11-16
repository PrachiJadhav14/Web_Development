/// Find intersection of two Sets [1,2,3,4] & [3,4,5,6].


const set = new Set ([1,2,3,4]);
const NewSet = new Set([3,4,5,6]);

const intersection = new Set ([...set].filter(item => NewSet.has(item)));


console.log(intersection);