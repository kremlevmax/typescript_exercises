"use strict";
const genericsSort = function (data, direction) {
    if (direction === "asc") {
        return data.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    else {
        return data.sort((a, b) => (a.id > b.id ? -1 : 1));
    }
};
const data = [
    { id: 1, name: "Max" },
    { id: 5, number: 3 },
    { id: 2, status: false },
];
console.log(genericsSort(data, "asc"));
console.log(genericsSort(data, "dsc"));
