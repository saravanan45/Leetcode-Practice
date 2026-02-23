const numbers = [11, 20, 4, 5, 21, 1, 33, 100, 88];
const strings = ["saravanan", "Saras", "Thamarai", "Balaji", "riya", "riyaz"];

function sorting(type, sortOrder, arr) {
  const result = arr.sort((a, b) => {
    let value = 0;
    if (type === "numbers") {
      value = a - b;
    } else if (type === "strings") {
    //  value = a.toLowerCase().localeCompare(b.toLowerCase())
      value = a.localeCompare(b, undefined, { sensitivity: "base" });
    }

    value = sortOrder === "asc" ? value : -value;
    return value;
  });

  return result;
}

console.log(sorting("numbers", "desc", numbers));
console.log(sorting("strings", "desc", strings));
