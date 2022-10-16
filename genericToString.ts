function genericToString<T>(input: T): string | undefined {
  if (typeof input === "object" && !Array.isArray(input) && input !== null) {
    return JSON.stringify(input);
  } else {
    return String(input);
  }
}

console.log(genericToString([1, 2, 3]));

console.log(genericToString(1));

console.log(genericToString({ name: "Alex", age: 12 }));
console.log(genericToString(true));
console.log(genericToString(undefined));
