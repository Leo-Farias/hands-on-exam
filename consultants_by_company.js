// Given the array below, write a program to group the consultants by company.

let consultants = [
    { name: 'Peyton Turner', company: 'Walker Inc' },
    { name: 'Isaias Fritsch', company: 'Walker Inc' },
    { name: 'Susana Wilderman', company: 'Nolan Inc' }
];

let newGroup = {}; // New object for grouped consultants.

consultants.forEach(c => {
    if (newGroup[c.company])
        newGroup[c.company].push(c);
    else
        newGroup[c.company] = [ c ];
});

console.log("Consultants grouped by company: \n", newGroup);