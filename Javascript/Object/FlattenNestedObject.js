const flattenObject = (arr) => {
  if (!Array.isArray(arr)) {
    return;
  }

  const recursiveCall = (arr1, resultObj = []) => {
    for (let i = 0; i < arr1.length; i++) {
      resultObj.push({ value: arr1[i]["value"] });
      if (Array.isArray(arr1[i].children) && arr1[i].children?.length) {
        recursiveCall(arr1[i].children, resultObj);
      }
    }
  };

  let result = [];
  recursiveCall(arr, result);
  return result;
};

const input2 = [
  {
    value: "value1",
    children: [
      {
        value: "value2",
        children: [
          {
            value: "value3",
            children: [],
          },
        ],
      },
      {
        value: "value4",
        children: [],
      },
    ],
  },
  // ... other items ...
];

const output2 = [
  { value: "value1" },
  { value: "value2" },
  { value: "value3" },
  { value: "value4" },
  // ... other items ...
];

console.log("flattened Object", flattenObject(input2));
