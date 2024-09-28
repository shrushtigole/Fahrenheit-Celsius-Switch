var Celsius= document.getElementById("celsius");
var Fahrenheit= document.getElementById("fahrenheit");

// console.log(Celsius);
// console.log(Fahrenheit);

Celsius.addEventListener("input",() => {
    Fahrenheit.value=((Celsius.value * 9) / 5 + 32).toFixed(2);

    if(!Celsius.value) Fahrenheit.value="";          //to place empty box when celsius is empty

});

Fahrenheit.addEventListener("input",() =>{
    Celsius.value=(((Fahrenheit.value - 32) * 5) / 9).toFixed(2);

    if(!Fahrenheit.value) Celsius.value="";        //clear the celsius when fahrenheit becomes empty
})
