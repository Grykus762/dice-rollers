// console.log("1 Roll, default value (6):", diceSimple())
// console.log("1 Roll, 10:", diceSimple(1, 10))
// console.log("10 Rolls, 10:", diceSimple(10, 10))
// console.log("10 Rolls, 'd10':", diceSimple(10, "d10"))
// console.log("10 Rolls, 'd10':", diceSimple(10, "dd10"))
// console.log("10 Rolls, 'd10':", diceSimple(10, "not a valid string"))

console.log("Advanced Roller: 1 Roll, default value (6):", diceAdvanced())
// 7
// console.log("Advanced Roller: 10 Rolls, 'd10':", diceAdvanced(10, "d10"))
// console.log("Advanced Roller: 10 Rolls, 'd10':", diceAdvanced(10, "dd10"))
// console.log("Advanced Roller: 10 Rolls, 'd10':", diceAdvanced(10, "not a valid string"))

function diceSimple(numDice=1, dieType = 6)
{
    /**
     * Dice Roller: Simple
     * Accept a parameter that determines the number of dice rolled (if no number is specified default to 1 die)
     * Accept a parameter that determines the range of values on the dice (d2, d4, d8...etc)
     *  Parameter can accept a string in the format of "dX" where x is an integer, or it can accept a number that equates to the number of sides on the die
     *  - If a string is found AND the first character of the string is a d, remove the first character from the string and convert the string to a number
     *  - If the string does equal a number, continue with the function, else return an error saying that the value was in an improper format
     * Return an array of values rolled (if number of dice are greater than 1), or return a single value (if number of dice is exactly 1)
     * 
     * Rolling a die:
     *  Generate a random value that covers the range of values on a die (d6 = range of 1 to 6)
     */
    let dieValue=dieType
    if(typeof dieValue=== "string" && dieValue[0]==="d")
        {
            dieValue = dieType.slice(1)
            console.log('sliced dieValue:', parseInt(dieValue, 10))
            if(!parseInt(dieValue,10))
            {
                return `The value "${dieType}" is an improper format. Either pass an integer for dieType or pass a string using dice notation (for example 'd6', 'd8', etc..."` 
            }
        }
    else if(typeof dieValue==='string')
    {
        return `The value "${dieType}" is an improper format Either. pass an integer for dieType or pass a string using dice notation (for example 'd6', 'd8', etc..."` 
    }

    if(numDice===1)
    {
        return Math.floor((Math.random()*dieValue)+1)
    }
    else
    {
        const arrOfValues = []
        for(let i=0; i<numDice; i++)
            {
                const rolledValue = Math.floor((Math.random()*dieValue)+1)
                
                arrOfValues.push(rolledValue) 
            } 
        return arrOfValues
    }
}

function diceAdvanced(numDice=1, dieType=6)
{
    /**
     * Goal: Use a Fisher-Yates shuffle to select a random value for a die instead of only using Math.random()
     * Accept a parameter that determines the number of dice rolled (if no number is specified default to 1 die)
     * Accept a parameter that determines the range of values on the dice (d2, d4, d8...etc)
     * 
     * Rolling a die: 
     * - Create an array that includes the range of values on the indicated die ( d6 = [1, 2, 3, 4, 5, 6])
     *  - Create a for loop that iterates from 1 to the designated value of the dieType. Each iteration pushes the value to the array
     * - Use the Fisher Yates shuffle algorithm to randomize the array
     *  - Create a for loop. Start at the end and decrement to zero.
     *      - For each iteration: grab a random index
     *      - Swap the current index value with the random index value generated
     * - Use the Fisher-Yates algorithm to then select a random element in the array and remove it from the array
     *      - For each iteration: grab a random index
     *      - remove the index from the array
     * - Repeat the process until one value remains
     * - return the last value as the 'rolled' value
     */

    let dieValue =dieType
    const valueArr = []
    for(let i=1; i<=dieValue; i++)
    {
        valueArr.push(i)
    }
    //Shuffle the Array
    for(let j=valueArr.length-1; j>0; j--)
    {
        const randomIndex = Math.floor(Math.random()*dieValue);
        [valueArr[j], valueArr[randomIndex]] = [valueArr[randomIndex], valueArr[j]];
    }
    const shuffledArr=valueArr
    console.log(shuffledArr)
    shuffledArr.map(element=> 
        {
            if(shuffledArr.length != 1)
            {
                const randomIndex=  Math.floor(Math.random()*shuffledArr.length);
                console.log("Random Index:", randomIndex);
                shuffledArr.splice(randomIndex);
                console.log(shuffledArr);
            }
        })
    console.log("shuffled array: ", valueArr)

    return shuffledArr[0]

}