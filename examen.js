let salarioAnual = 21600
function salarioMensual(salarioAnual)
{
    let resultado = salarioAnual / 12
    return resultado
}
console.log("El salario mensual es de" + " "+ salarioMensual(salarioAnual))

let Salariomensual = 1500
function Salarioanual(salario)
{
    let resultado = salario * 12
    return resultado
}
console.log("El salario anual es de" + " "+ Salariomensual(salario))

function promedio(nota1, nota2, nota3)
{
    prompt(nota1) 
    prompt(nota2)
    prompt(nota3)
}
Number(prompt('Ingrese las notas que desea '))
alert("El promedio es " + promedio(5, 6, 7))