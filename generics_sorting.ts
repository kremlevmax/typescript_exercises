type directionType = "asc" | "dsc";

interface DataType {
  id: number;
}

const genericsSort = function <T extends DataType>(
  data: T[],
  direction: directionType = "asc"
) {
  if (direction === "asc") {
    return data.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    return data.sort((a, b) => (a.id > b.id ? -1 : 1));
  }
};

const data = [
  { id: 1, name: "Max" },
  { id: 5, number: 3 },
  { id: 2, status: false },
];

console.log(genericsSort(data));
console.log(genericsSort(data, "dsc"));
