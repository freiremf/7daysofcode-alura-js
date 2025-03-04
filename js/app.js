let numberOne = 1
let stringOne = '1'
let numberThirty = 30
let stringThirty = '30'
let numberTen = 10
let stringTen = '10'

let section1 = document.getElementById('section1');
section1.innerHTML = `<p> A comparação entre ${numberOne} e ${stringOne} é ${numberOne == stringOne} </p>`
section1.innerHTML += `<p> A comparação entre ${numberThirty} e ${stringThirty} é ${numberThirty == stringThirty} </p>`
section1.innerHTML += `<p> A comparação entre ${numberTen} e ${stringTen} é ${numberTen == stringTen} </p>`

