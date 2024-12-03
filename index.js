function reverseSentence(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');

    // Reverse the array of words
    words.reverse();

    // Join the words back into a sentence
    let reversedSentence = words.join(' ');

    // Capitalize the first letter of the sentence
    reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

    return reversedSentence;
}

// Example usage
let inputSentence = "hello world this is a test";
let outputSentence = reverseSentence(inputSentence);
console.log(outputSentence); // Output: "Test a is this world hello"
let data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

let names = data.map(person => person.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]
let nestedData = [
    [
        { name: "John", age: 22 },
        { name: "Jane", age: 28 }
    ],
    [
        { name: "Bob", age: 34 }
    ]
];

let nestedNames = nestedData.flatMap(innerArray => innerArray.map(person => person.name));
console.log(nestedNames); // Output: ["John", "Jane", "Bob"]