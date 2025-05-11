console.log(" ==================")
console.log(" Our Weather Meter")
console.log(" ===================")
//declaring variable called kelvin
const Kelvin=293;


//converting kelvin to celcius
let Celsius=Kelvin-273;
//coverting celcius to fahrenheit
let fahrenheit=  Math.floor(Celsius *(9/5)+ 32)
let Newton=Math.floor(Celsius *(33/100))



console.log(`The temperature is ${fahrenheit} degrees fahrenheit `)
console.log(`Celcius in newton is ${Newton}`)
