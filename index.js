const submitBtn = document.getElementById("submit-form")
const diceDisplay= document.getElementById('dice-display')
submitBtn.addEventListener('click', event =>
{
    event.preventDefault()
    console.log("clicked")

    const numberOfDice = document.getElementById("num-dice").value
    const diceType = document.querySelector('input[name="dice-selector"]:checked').value
    const diceRolled = diceAdvanced(numberOfDice,diceType)
    diceDisplay.innerHTML = `<p>Dice Values Rolled: ${diceRolled.join(", ")}</p>`

}
)

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

    /**
     * NEED TO ADD: string handling to lowercase the string before parsing
     */
    let dieValue=dieType
    if(typeof dieValue=== "string" && dieValue[0]==="d")
        {
            dieValue = dieType.slice(1)
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
    console.log("Number of Dice", numDice)
    console.log("Detected Die Type",dieType)
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

     /**
     * NEED TO ADD: string handling to lowercase the string before parsing
     */
     let dieValue=dieType
     if(typeof dieValue=== "string" && dieValue[0]==="d")
         {
             dieValue = dieType.slice(1)
             if(!parseInt(dieValue,10))
             {
                 return `The value "${dieType}" is an improper format. Either pass an integer for dieType or pass a string using dice notation (for example 'd6', 'd8', etc..."` 
             }
         }
     else if(typeof dieValue==='string')
     {
         return `The value "${dieType}" is an improper format Either. pass an integer for dieType or pass a string using dice notation (for example 'd6', 'd8', etc..."` 
     }
    const diceValueArr = []
    const finalValues = []

    for(let i=0;i<numDice;i++)
    {
        for(let j=1; j<=dieValue; j++)
            {
                diceValueArr.push(j)
            }
        for(let k=diceValueArr.length-1; k>0; k--)
        {
            const randomIndex = Math.floor(Math.random()*dieValue);
            [diceValueArr[k], diceValueArr[randomIndex]] = [diceValueArr[randomIndex], diceValueArr[k]];
        }
        finalValues.push(diceValueArr[Math.floor(Math.random()*dieValue)])
    }
    return finalValues 
}