const prompt = require('prompt-sync')();
const choice = prompt('Welcome to the color calculator. Please type combine or deconstruct to begin.');

if (choice === 'combine') {   
    const comColor1 = prompt('Please input the first color.  ');
    const comColor2 = prompt('Please input the second color.  ');

// orange

        if (
            (comColor1 === 'red' && comColor2 === 'yellow') ||
            (comColor2 === 'yellow' && comColor2 === 'red')
        ) { console.log(comColor1, 'and', comColor2, 'make orange')

        } 
    
// purple

        else if (
            (comColor1 === 'red' && comColor2 === 'blue') ||
            (comColor2 === 'blue' && comColor2 === 'red')
        ) {console.log(comColor1, 'and', comColor2, 'make purple')

        }
                
// green

        else if (
            (comColor1 === 'blue' && comColor2 === 'yellow') ||
            (comColor2 === 'yellow' && comColor2 === 'blue')
        ) {console.log(comColor1, 'and', comColor2, 'make green')

        }

    else {
        console.log("Invalid color inputs")
    }
        
}

else if (choice === 'deconstruct') {  
    const desColor = prompt('Please input a color.  ')


if (desColor === 'orange') {
    console.log ('red and yellow make orange')
}

else if (desColor === 'purple') {
    console.log ('red and blue make purple')
}


else if (desColor === 'green') {
    console.log ('yellow and blue make green')
}

//error
else {
    console.log("Invalid color input")
}
}