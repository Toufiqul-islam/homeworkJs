let A = [50, 107, 'jack', 83, 'killer', 'son', true];

let stringsArray = A.filter(item => typeof item === 'string');
console.log("Strings Array:", stringsArray);

let numbersArray = A.filter(item => typeof item === 'number').sort((a,b) => a-b);
console.log("Shorted Nubers Array:", numbersArray);

string