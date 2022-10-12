
var panel = document.querySelector('#panel')

var primerNumero_Puesto = false
var operacion = [0, '', '']
console.log(operacion)


// Numeros ids
var _0 = document.querySelector('#cero')
var _1 = document.querySelector('#uno')
var _2 = document.querySelector('#dos')
var _3 = document.querySelector('#tres')
var _4 = document.querySelector('#cuatro')
var _5 = document.querySelector('#cinco')
var _6 = document.querySelector('#seis')
var _7 = document.querySelector('#siete')
var _8 = document.querySelector('#ocho')
var _9 = document.querySelector('#nueve')


// signos id
var mult = document.querySelector('#mult')
var divi = document.querySelector('#divi')
var rest = document.querySelector('#rest')
var sum = document.querySelector('#sum')

var ac = document.querySelector('#ac')
var igual = document.querySelector("#igual")

// Eventos operadores
mult.addEventListener("click", ()=>{
    agregarMult()
})

divi.addEventListener("click", ()=>{
    agregarDivi()
    btnIgual(true)
})

rest.addEventListener("click", ()=>{
    agregarRest()
    btnIgual(true)
})

sum.addEventListener("click", ()=>{
    agregarSuma()
    btnIgual(true)
})

igual.addEventListener("click", ()=>{
    btnIgual(true)
})



// Eventos numeros
_0.addEventListener("click", ()=>{
    agregarNum("0")

})

_1.addEventListener("click", ()=>{
    agregarNum("1")
})

_2.addEventListener("click", ()=>{
    agregarNum("2")
})

_3.addEventListener("click", ()=>{
    agregarNum("3")
})

_4.addEventListener("click", ()=>{
    agregarNum("4")
})

_5.addEventListener("click", ()=>{
    agregarNum("5")
})

_6.addEventListener("click", ()=>{
    agregarNum("6")
})

_7.addEventListener("click", ()=>{
    agregarNum("7")
})

_8.addEventListener("click", ()=>{
    agregarNum("8")
})

_9.addEventListener("click", ()=>{
    agregarNum("9")
})

ac.addEventListener("click", ()=>{
    borrar()
})



const agregarMult = () => {
    if(operacion[0] !== ''){
        operacion[1] = '×'
        
        console.log(operacion)

        panel.innerHTML = `${operacion[0]} ${operacion[1]} ${operacion[2]}`
    }  
}


const agregarDivi = () => {
    if(operacion[0] !== ''){
        operacion[1] = '÷'
        
        console.log(operacion)
        panel.innerHTML = `${operacion[0]} ${operacion[1]} ${operacion[2]}`
    }  
}

const agregarSuma = () => {
    if(operacion[0] !== ''){
        operacion[1] = '+'
        
        console.log(operacion)
        panel.innerHTML = `${operacion[0]} ${operacion[1]} ${operacion[2]}`
    }  

}


const agregarRest = () => {
    if(operacion[0] !== ''){
        operacion[1] = '-'
        
        console.log(operacion)
        panel.innerHTML = `${operacion[0]} ${operacion[1]} ${operacion[2]}`
    }  
}

const agregarNum = (numero) =>{
    if(operacion[1] === ''){
        operacion[0] += numero
        panel.innerHTML = `${operacion[0]} ${operacion[1]} ${operacion[2]}`
    }
    else{
        operacion[2] += numero
        panel.innerHTML = `${operacion[0]} ${operacion[1]} ${operacion[2]}`
    }

    console.log(operacion)
} 




const btnIgual = (signo, operador="")=>{   
    if(operacion[2] !== ''){
           
        if(signo){
            var resultado = 0;
    
            if(operacion[1] == '+'){
                resultado = Number(operacion[0]) + Number(operacion[2])   
            }
    
            if(operacion[1] == '-'){
                resultado = Number(operacion[0]) - Number(operacion[2])   
            }
    
            if(operacion[1] == '÷'){
            
                    resultado = Number(operacion[0]) / Number(operacion[2])
                  
            }
    
            if(operacion[1] == '×'){
                resultado = Number(operacion[0]) * Number(operacion[2])   
            }
            operacion[2] = operador
    
            operacion = [resultado, operacion[1], ""]


            
            panel.innerHTML = `${operacion[0]} ${operacion[1]}`
            
            console.log(resultado)
    
        }
        

    }
}

const borrar = ()=>{
    operacion = [0, '', '']

    panel.innerHTML = `${operacion[0]}`
}
setInterval(()=>{
    console.log(operacion)
}, 1000)


coonsole.log("KKLK")