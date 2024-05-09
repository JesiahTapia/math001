funcode = () => {
    event.preventDefault()
    console.log(document.getElementById("num1").value)
    let number1 = parseFloat (document.getElementById("num1").value)
    let number2 = parseFloat(document.getElementById("num2").value)
    // console.log(number1);
    let multipliedNumber = number1 * number2  
    document.getElementById("multiNumber").innerHTML = `<p style="color: green"> The Outcome is ${multipliedNumber} </p> `


    
}