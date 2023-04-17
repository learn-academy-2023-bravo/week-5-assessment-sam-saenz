// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe('codeString', () => {
    it('Will take in a string, anad return it with certain characters replaced', () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(codeString(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codeString(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codeString(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// b) Create the function that makes the test pass.

// I will write a function codeString that takes in a string, and uses a series of string.replace methods and the //g global syntax to replace all instances of a, A, e, E, i, I, o, and O with 4, 3, 1, and 0. I will return the output of that statement.

let codeString = (string) => {
    return string.replace(/a/g, "4").replace(/e/g, "3").replace(/i/g, "1").replace(/o/g, "0").replace(/A/g, "4").replace(/E/g, "3").replace(/I/g, "1").replace(/O/g, "0")
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe('filterArray', () => {
    it('Will take in an array and a letter, and filter any words not containing the letter', () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(filterArray(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(filterArray(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
// b) Create the function that makes the test pass.

// I will create a function call filterArray that takes in an array and a string as an argument, then use .filter to get rid of any strings in the array that do not include the given letter in either uppercase or lowercase.

let filterArray = (array, letter) => {
    return array.filter((value) => value.includes(letter.toLowerCase()) || value.includes(letter.toUpperCase()))
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe('fullHouse', () => {
    it('Will take in an array of numbers, check if they make a full house, and return the result', () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})
// b) Create the function that makes the test pass.

// I will make a function called fullHouse that takes in an array of 5 numbers, then check if the sorted array has different numbers at index 0 and 4(to make sure that it isnt 5 of a kind), and if the number at index 0 and 2 are equal(meaning the first three numbers are the same), and 3 and 4 are equal, OR if index 0 and 1 are equal and index 2 and 4 are equal(meaning the last three numbers are the same). 

let fullHouse = (array) => {
    array = array.sort()
    return (array[0] !== array[4] && (array[0] === array[2] && array[3] === array[4]) || (array[0] === array[1] && array[2] === array[4]))
}
