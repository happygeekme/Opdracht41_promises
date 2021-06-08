/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise 
that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum =  (number) => {
    return new Promise(
        (resolve, reject) => {
            if ((number) > 10) {
                const hogerDan10 = ("The number is greater than 10");
                resolve(hogerDan10);
            } else {
                const nietHogerDan10 = new Error ("The number is not greater than 10");
                reject(nietHogerDan10);
            }
            
        }
    )
};



/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), 
will take in an array of words and capitalize them, and then the second function, sortWords(), 
will sort the words in alphabetical order. If the array contains anything but strings, it should 
throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = (array) => {
    return new Promise(
        (resolve, reject) => {
            array.map((word) => {
                if((word) = String){
                    const UpperCaseArray = [];
                    const UpperWord = word.toUpperCase;
                    UpperCaseArray.push(UpperWord);   
                    resolve(UpperCaseArray);
                } else {
                    const notWords = new Error ("Error: not all items are words");
                    reject(notWords)
                }
            });
        }
    )
};  

const sortWords = (UpperCaseWords) => {
    return new Promise(
        (resolve, reject) => {
            UpperCaseWords.map((word) => {
                if((word) = String){
                const sorted = UpperCaseWords.sort;
                resolve(sorted);
            } else {
                const notWords = new Error ("Error: not all items are words");
                reject(notWords);
            }
        })
        })
}

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords).then(sortWords).then(result => console.log(result));