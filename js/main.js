




let resultado = document.getElementById("resultado");
let respondidasIndex= []
let contador = 0;



// esta funcion genera un numero aleatorio entre el 0 y el length de el array data.preguntas
function buscarPreguntas() {
    let respondidasStorage = window.localStorage.getItem('respondidasIndex');
    respondidasStorage = JSON.parse(respondidasStorage);

   
        let index = data.preguntas.length
        // let unique = [...new Set(index)]
        // console.log(unique)
        
        // for (let p in data.preguntas) {
        //     if(data.preguntas.indexOf(index) === -1){
        //         data.preguntas[p] = index;
        //       }
              
        //     }
       
            console.log(data.preguntas);
        
    
    
    guardarIndex(index)
    
    console.log(respondidasStorage);
    cargarPreguntas(index)
  
   
};

function guardarIndex(index){
    respondidasIndex.push(index)
    let stringyRespondidas = JSON.stringify(respondidasIndex)
    window.localStorage.setItem('respondidasIndex', stringyRespondidas)
    console.log(stringyRespondidas)
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
   
    Swal.fire({
        title: 'Respuesta Incorrecta',
        text: 'Intentalo en otro momento',
        imageUrl: 'https://psfonttk.com/wp-content/uploads/2020/08/emoji-triste.png',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}

function mostrarTextoCorrecto(){
  
    Swal.fire({
        title: 'Respuesta correcta',
        text: '¡Excelente trabajo, Sumaste 1 punto!',
        imageUrl: 'https://s-media-cache-ak0.pinimg.com/236x/ec/13/a7/ec13a753972c254761be4d9d5666d341.jpg?noindex=1',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}




window.addEventListener('load', buscarPreguntas());


let respuestaContada = document.querySelectorAll('.respuestaIngresada')




