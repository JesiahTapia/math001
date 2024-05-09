console.log("inside javascript");


// The html file will ask the user for two numbers.
// Your program will multiply the two numbers and output the result to the webpage.
multiply = () => { 
    // event.preventDefault()
    
    console.log(document.getElementById("numberone").value)
    let number1 = parseFloat (document.getElementById("numberone").value)
    let number2 = parseFloat(document.getElementById("numbertwo").value)
    let multipliedNumber = number1 * number2 
    document.getElementById("multiNumber").inneHTML = `<p style="color: green"> The Outcome is ${multipliedNumber} </p> `

}

