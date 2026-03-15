// All Paths for a Sum
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function formTree(arr, sum) {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];

  let i = 1;
  let pointer = 0;
  while (pointer < queue.length && i < arr.length) {
    // const node = queue.shift();
    const node = queue[pointer++];

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  const result = [];
  allPathForSum(root, sum, [], result);
  return result;
}

function allPathForSum(root, targetSum, elements, result) {
  if (root === null) return [];

  if (root.value === targetSum && root.left === null && root.right === null) {
    result.push([...elements, root.value]);
    return result;
  }

  allPathForSum(
    root.left,
    targetSum - root.value,
    [...elements, root.value],
    result,
  );
  allPathForSum(
    root.right,
    targetSum - root.value,
    [...elements, root.value],
    result,
  );
}

((root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), (targetSum = 22));
console.log(formTree(root, targetSum));
