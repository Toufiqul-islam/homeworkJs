let A = [50, 107, 'jack', 83, 'killer', 'son', true];

let stringsArray = A.filter(item => typeof item === 'string');
console.log("Strings Array:", stringsArray);

let numbersArray = A.filter(item => typeof item === 'number').sort((a,b) => a-b);
console.log("Shorted Nubers Array:", numbersArray);

let reversedStringArray = stringsArray.slice().reverse();
console.log("Reversed string array:",reversedStringArray);

let combinedArray = [...numbersArray,...stringsArray];
console.log("Combined array:", combinedArray);

combinedArray.splice(5,3);
console.log("Combined array after deletion:", combinedArray);

let lessThan100 = A.filter(item => typeof item === 'number' && item < 100);
console.log("Elements from A less than 100;", lessThan100);

let modifiedStringsArray = stringsArray.map(str => 'str' + str.slice(0, -1));
console.log("Modified string array:", modifiedStringsArray);