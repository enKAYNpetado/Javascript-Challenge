alert("Hello World!")

let numberOne = prompt("Digite o primeiro número")
let numbertwo = prompt("Digite o segundo número")

numberOne = Number(numberOne)
numbertwo = Number(numbertwo)

const sum = numberOne + numbertwo
alert("Soma: " + sum)

let ifNumber = String(8)

if (typeof ifNumber === "number") {
  alert("É um número!")
} else {
  alert("Não é um número")
}

let ifString = "terror Storm"

if (typeof ifString == "string") {
  alert("É uma String!")
} else {
  alert("Não é uma String")
}

let ifBoolean = "true"

ifBoolean = true

if (typeof ifBoolean == "boolean") {
  alert("É um boolean!")
} else {
  alert("Não é um boolean!")
}

let numberThree = prompt("Digite o primeiro número")
let numberFour = prompt("Digite o segundo número")

const sub = numberThree - numberFour
const mult = numberThree * numberFour
const div = numberThree / numberFour
alert("Subtração: " + sub)
alert("Multiplicação: " + mult)
alert("Divisão: " + div)

let numberFive = prompt("Digite o primeiro número")

numberFive = Number(numberFive)

if (numberFive % 2 == 0) {
  alert("O número é par")
} else {
  alert("O número não é par")
}
 
let numberSix = prompt("Digite o primeiro número")

numberSix = Number(numberSix)

if (numberSix % 2 != 0) {
  alert("O número é ímpar")
} else {
  alert("O número não é ímpar")
}