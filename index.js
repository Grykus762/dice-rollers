// console.log("1 Roll, default value (6):", diceSimple())
// console.log("1 Roll, 10:", diceSimple(1, 10))
// console.log("10 Rolls, 10:", diceSimple(10, 10))
console.log("10 Rolls, 'd10':", diceSimple(10, "d10"))
console.log("10 Rolls, 'd10':", diceSimple(10, "dd10"))
console.log("10 Rolls, 'd10':", diceSimple(10, "not a valid string"))

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

function diceAdvanced()
{

}