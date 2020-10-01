const LinkedList = require('./LinkedList');
const Node = require('./Node');
const Sort = require('./Sort');

/*
  1).
    a).
      0 [21, 1, 26, 45, 29, 28, 2, 9] [16, 49, 39, 27, 43, 34, 46, 40]
      1 [21, 1, 26, 45] [29, 28, 2, 9]
      2 [21, 1] [26, 45]
      3 [21] [1]
    
    b).
      3 [21] [1] [26, 45]
      4 [21] [1] [26] [45]
      5 [21] [1] [26] [45]  [29, 28] [2, 9]
      6 [21] [1] [26] [45]  [29] [28] [2, 9]
      7 [21] [1] [26] [45]  [29] [28] [2] [9]
      8 [21] [1] [26] [45] [29] [28] [2] [9]  [16, 49, 39, 27] [43, 34, 46, 40]
      9 [21] [1] [26] [45] [29] [28] [2] [9]  [16, 49] [39, 27] [43, 34, 46, 40]
      10 [21] [1] [26] [45] [29] [28] [2] [9]  [16] [49] [39, 27] [43, 34, 46, 40]
      11 [21] [1] [26] [45] [29] [28] [2] [9]  [16] [49] [39] [27] [43, 34, 46, 40]
      12 [21] [1] [26] [45] [29] [28] [2] [9]  [16] [49] [39] [27] [43, 34] [46, 40]
      13 [21] [1] [26] [45] [29] [28] [2] [9]  [16] [49] [39] [27] [43] [34] [46, 40]
      14 [21] [1] [26] [45] [29] [28] [2] [9]  [16] [49] [39] [27] [43] [34] [46] [40]
      
    c).
      [21] [1] -> [1, 21]
    d).
      1 [1, 21] [26] [45] [29] [28] [2] [9]
      2 [1, 21] [26, 45] [29][28] [2][9]
      3 [1, 21, 26, 45] [29][28] [2][9] 
      4 [1, 21, 26, 45] [28, 29] [2][9]
      5 [1, 21, 26, 45] [2, 9, 28, 29]
      6 [1, 2, 9, 21, 26, 28, 29, 45]
      7 [16] [49] => [16, 49]
*/
function mergeSortExample() {
  const mergeArr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
  Sort.mergeSort(mergeArr);
}

/*
  2).
    a).
      Pivot could have been either 14 or 17
      The preceding numbers before 17 are lower than 17 and the numbers before 14 are lower than 14
    b).
      [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
      Last Pivot
      1st partition:
        [10, 17, 13, 15, 19, 14, 3, 16, 9, 12] swap 14 and 10
        [10, 3, 13, 15, 19, 14, 17, 16, 9, 12] swap 17 and 3
        [10, 3, 9, 15, 19, 14, 17, 16, 13, 12] swap 13 and 9
        [10, 3, 9, 12, 19, 14, 17, 16, 13, 15] swap 15 and 12, return index 3
      2nd partition: 
        [10, 3, 9, 12] => [3, 9, 10, 12]

      First Pivot
        [10, 3, 13, 12, 9, 14, 17, 15, 19, 16] return index of 5
        [14, 17, 15, 19, 16]
        [14, 16, 15, 17, 19]
*/

function quickSortExample() {
  const quickArr = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
  Sort.quickSort(quickArr);

}
//quickSortExample();

/*
  5).
*/

function sortLinkedList() {
  const mergeList = new LinkedList();
  mergeList.insertFirst(5);
  mergeList.insertFirst(2);
  mergeList.insertFirst(10);
  mergeList.insertFirst(3);
  mergeList.head = mergeLinkedList(mergeList.head);
  //const middle = Math.floor(linkedList.size()/2);
  mergeList.display();
}
function getMiddleNode(nodeHead) {
  let curr = nodeHead;
  let middle = nodeHead;
  let odd = 0;
  while (curr !== null) {
    curr = curr.next;
    if (odd % 2 === 1) {
      middle = middle.next;
      odd -= 2;
    }
    odd++;
  }
  return middle;
}
function getNodeAt(node, num) {
  let curr = node;
  let i = 0;
  while (i < num && curr !== null) {
    curr = curr.next;
    i++;
  }
  return curr;
}
function mergeLinkedList(list) {
  if (list.next === null) {
    return list;
  }
  let count = 0;
  let countList = list;
  let left = list;
  let leftIndex = list;
  let right = null;
  let rightIndex = null;
  
  while (countList.next !== null) {
    count++;
    countList = countList.next;
  }

  let middle = Math.floor(count / 2);
  let count2 = 0;

  while (count2 < middle) {
    count2++;
    leftIndex = leftIndex.next;
  }

  right = new LinkedList(leftIndex.next);
  leftIndex.next = null;
  left = mergeLinkedList(left);
  right = mergeLinkedList(right.head);
  return mergeList(left, right);
}

function mergeList(left, right) {
  let result = new LinkedList();

  let resultIndex = result.head;
  let leftIndex = left;
  let rightIndex = right;

  while (leftIndex && rightIndex) {
    let tempNode = null;
    if (leftIndex.value > rightIndex.value) {
      tempNode = rightIndex.value;
      rightIndex = rightIndex.next;
    }
    else {
      tempNode = leftIndex.value;
      leftIndex = leftIndex.next;
    }
    if (result.head == null) { 
      result.head = new Node(tempNode) 
      resultIndex = result.head 
  } 
  else { 
      resultIndex.next = new Node(tempNode) 
      resultIndex = resultIndex.next 
  } 
  }
  
  resultIndex.next = leftIndex;
  while (resultIndex.next) {
    resultIndex = resultIndex.next;
  }
  resultIndex.next = rightIndex;
  
  return result.head
}
//sortLinkedList();

/*
  6).
*/

function bucketSort(arr, min, max) {
  let nBuckets = max - min + 1;
  let bucket = [];
  for (let i = 0; i < arr.length; i++) {
    bucket[arr[i] - min]++;
  }
  let index = 0;
  for (let i = 0; i < bucket.length; i++) {
    for (let j = 0; j < bucket[i]; j++) {
      arr[index++]=min;
    }
    min++;
  }
  console.log(arr);
}
//bucketSort([1, 6, 3, 8, 4, 10], 1, 10);

/*
  7).
*/

function randomizeInPlace(arr) {
  return arr.sort(() => {
    return Math.random() >= 0.5 ? -1 : 1;
  })
}
const newRandom = randomizeInPlace([4, 2, 1, 3, 5]);

/*
  8).

*/

function alphabetSort() {
  let books = ['Alphabet', 'Bily', 'Frank', 'Harry Plugger', 'Zack', 'Dunce'];
  books = Sort.mergeSort(books);
}
alphabetSort();