// // let objetoPregunta = JSON.parse(basePreguntas);
// console.log(typeof basePreguntas);
// // console.log(JSON.parse(objetoPregunta))
// // let respuestas = [objetoPregunta.incorrectas + objetoPregunta.respuesta];
// // console.log(respuestas[0]);

// function cargarPregunta (){
//     objetoPregunta.incorrectas
   
//     // document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta

    
// }




let resultado = document.getElementById("resultado");
let respondidasIndex= []
let contador = 0;


// esta funcion genera un numero aleatorio entre el 0 y el length de el array data.preguntas
function buscarPreguntas() {
    let respondidasStorage = window.localStorage.getItem('respondidasIndex');
    respondidasStorage = JSON.parse(respondidasStorage);

    // console.log(respondidasStorage.includes(2))

    // do{
        let index = Math.floor( Math.random() * data.preguntas.length )    

    // }while(!respondidasStorage.includes(index))
    guardarIndex(index)
    
    console.log(respondidasStorage);
    cargarPreguntas(index)

};

function guardarIndex(index){
    respondidasIndex.push(index)
    let stringyRespondidas = JSON.stringify(respondidasIndex)
    window.localStorage.setItem('respondidasIndex', stringyRespondidas)
}





// esta funcion se encarga de renderizar las preguntas y respuestas en el html
function cargarPreguntas (index) {
    resultado.innerHTML="";

    let pregunta = document.getElementById('pregunta') 
    pregunta.innerHTML = data.preguntas[index].pregunta;

    let respuesta1 = document.getElementById('respuesta1') 
    respuesta1.innerHTML = data.preguntas[index].respuesta1[0]
    respuesta1.classList.add(data.preguntas[index].respuesta1[1])

    let respuesta2 = document.getElementById('respuesta2')
    respuesta2.innerHTML = data.preguntas[index].respuesta2[0]
    respuesta2.classList.add(data.preguntas[index].respuesta2[1])

    let respuesta3 = document.getElementById('respuesta3')
    respuesta3.innerHTML = data.preguntas[index].respuesta3[0]
    respuesta3.classList.add(data.preguntas[index].respuesta3[1])

    let respuesta4 = document.getElementById('respuesta4');
    respuesta4.innerHTML = data.preguntas[index].respuesta4[0]
    respuesta4.classList.add(data.preguntas[index].respuesta4[1])
}


let respuestaIngresada = document.getElementById("formulario");
respuestaIngresada.addEventListener("click", function(e){
    let Booleano = JSON.parse(e.target.classList[1]);
    if(!Booleano){
        mostrarTextoIncorrecta()
        setTimeout(buscarPreguntas, 3000)
    }
    else {
        mostrarTextoCorrecto();
        cargarContador();
        setTimeout(buscarPreguntas, 3000)

    }
    

})
function cargarContador(){
    contador++;
    let elementoContador = document.getElementById('contador');
    elementoContador.innerHTML= "tienes " + contador+ " puntos"
}


function mostrarTextoIncorrecta(){    
    resultado.innerHTML="respuesta Incorrecta :("
}

function mostrarTextoCorrecto(){
    resultado.innerHTML="respuesta Correcta :)"
}



window.addEventListener('load', buscarPreguntas());


let respuestaContada = document.querySelectorAll('.respuestaIngresada')



// function sumarPuntos(){
//     while(respondidasContada === true){
//     console.log('Sumaste tantos puntos')
//     // let data1 = respondidasIndex =+ respondidasStorage;
//     // data1.innerText
// }
// }


// function respuestaCorrecta(){
//     console.log(respuestaIngresada)
// //    if(respuestaDada = data.preguntas[0].respuesta2[1])
// }

// let objetoPregunta = basePreguntas[0]
//  let opciones = objetoPregunta.incorrectas.length
//  document.getElementById("opcion-1").innerHTML = opciones[0]

// function cargarPregunta (){
   
//     document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta

    
// }

// cargarPregunta(0)
