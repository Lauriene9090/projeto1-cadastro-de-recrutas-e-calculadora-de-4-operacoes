//Calculadora de 4 Operações
let num1 = parseInt(prompt("digite o primeiro número"))
let num2 = parseInt(prompt("digite o segundo número"))
let soma = num1 + num2
let subtrai = num1 - num2
let multipica = num1 * num2
let divide = num1 / num2
alert(num1 + num2)
alert(num1 - num2)
alert(num1 * num2)
alert(num1 / num2)

//Cadastro de Recrutas
let nome = prompt("digite seu primeiro nome")
let sobrenome = prompt("digite seu segundo nome")
let curso = prompt("digite seu curso")
let anodenascimento = parseInt(prompt("digite seu ano de nascimento"))
let idade = 2024 - anodenascimento

alert(' olá ' +  nome  + ' ' + sobrenome  +
      ' então voce estuda ' + curso + ' e tem ' + idade + ' anos. ' + ' legal! ')
