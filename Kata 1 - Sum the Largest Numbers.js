const sumLargestNumbers = function(data) {
  // Put your solution here

  //1) Sort solution
  // const newArray = data.sort((a,b) => b-a);
  // return newArray[0] + newArray[1];

  //2) Loop solution
  let first;
  let second;

  if (data[0] > data[1]) {
    first=data[0];
    second=data[1];
  }else{
    first=data[1];
    second=data[0];
  }

  for (let i=2; i < data.length; i++) {
    if (data[i] > first) {
      second = first;
      first = data[i];
    }
  }

  return (first+second);

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Solution
// 11
// 5
// 126