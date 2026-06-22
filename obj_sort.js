let arr = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "John", age: 22 },
  { name: "Bob", age: 28 }
];
arr.sort((a, b) => {
  // Step 1: Compare names
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;

  // Step 2: If names are same, compare ages
  return a.age - b.age;
});

console.log(arr);