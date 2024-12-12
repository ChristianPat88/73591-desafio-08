import './style.css'

/* EJERCICIO 1 --------------------------------------------------- */
console.warn('Ejercicio 1')

let nombre = 'Christian'
let apellido = 'Patiño'
let edad = 36
let pais = 'Argentina'
let conocimientos = ['matemática', 'naturaleza', 'psicología']

console.log(nombre)
console.log(apellido)
console.log(edad)
console.log(pais)
console.log(conocimientos[0])
console.log(conocimientos[1])
console.log(conocimientos[2])

edad = 40
conocimientos.push('medicina')

console.log(edad)
console.log(conocimientos[3])

/* EJERCICIO 2 --------------------------------------------------- */
console.warn('Ejercicio 2')

let marca = 'Ford'
let velocidad = '100 km/h'
let stock = 30
let modelos = ['Falcon', 'Ranger', 'Bronco']

console.log(`La marca es: ${marca}`)
console.log(`Su velocidad es de: ${velocidad}`)
console.log(`El stock actual es de: ${stock}`)
console.log(`Los modelos disponibles son: ${modelos}`)

/* EJERCICIO 3 --------------------------------------------------- */
console.warn('Ejercicio 3')

let velocidadCoche = 135
let velocidadLimite = 60

if (velocidadCoche > velocidadLimite) {
    console.log('Debe bajar la velocidad')
} else {
    console.log('La velocidad es la correcta')
}

/* EJERCICIO 4 --------------------------------------------------- */
console.warn('Ejercicio 4')

let sueldo = 1000000

if (sueldo <= 40000) {
    console.log('El sueldo es bajo')
} else if (sueldo <= 60000) {
    console.log('El sueldo es bueno')
} else if (sueldo <= 80000) {
    console.log('El sueldo es muy bueno')
} else if (sueldo === 100000) {
    console.log('El sueldo es excelente')
} else {
    console.log('No definido en la consigna')
}

/* EJERCICIO 5 --------------------------------------------------- */
console.warn('Ejercicio 5')

let anioNacimiento = Number(prompt('Ingrese el año de nacimiento'))

console.log(`Actualmente usted tiene ${new Date().getFullYear() - anioNacimiento} años`)

/* EJERCICIO 6 --------------------------------------------------- */
console.warn('Ejercicio 6')

let numero = 2

let calcularTabla = (num) => {
    for (let i = 0; i < 10; i++) {
        console.log(`${num} x ${i + 1} = ${num * (i + 1)}`)
    }
}

calcularTabla(2)

/* EJERCICIO 7 --------------------------------------------------- */
console.warn('Ejercicio 7')

let numeroUsuario = Number(prompt('Ingrese un número y compruebe si es par o impar'))

let comprobarNum = (num) => {
    let resultado = num % 2
    return resultado > 0 ? 'impar' : 'par'
}

let respuesta = comprobarNum(numeroUsuario)
console.log(`El número ${numeroUsuario} es ${respuesta}`)
alert(`El número ${numeroUsuario} es ${respuesta}`)


/*--------------------------------------------------- */

console.warn('--------------------------')
console.warn('FIN DEL DESAFIO 08')
console.warn('--------------------------')