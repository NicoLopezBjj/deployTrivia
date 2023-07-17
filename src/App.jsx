import { useState } from 'react'

import './App.css'

function App() {
  
  const [puntaje,setPuntaje]=useState(0)
  const [preguntaIndex,setpreguntaIndex]=useState(0)
  const [mostrarRespuesta,setmostrarRespuesta]=useState(false)
  const preguntas = [
    {
      pregunta: '¿Cuál es la capital de Canadá?',
      opciones: ['Ottawa', 'Toronto', 'Montreal', 'Vancouver'],
      respuesta: 'Ottawa'
    },
    {
      pregunta: '¿Cuál es el mamífero más grande de la Tierra?',
      opciones:  ['Elefante', 'Jirafa','Cocodrilo', 'Ballena'],
      respuesta: 'Ballena'
    },
    {
      pregunta: '¿Cuál es el río más largo del mundo?',
      opciones: ['Danubio', 'Nilo', 'Amarillo', 'Amazonas'],
      respuesta: 'Nilo'
    },
  ];
  
  let preguntaActual=preguntas[preguntaIndex]
  function respuesta (opcion) {
    console.log("respuesta es")
    setmostrarRespuesta(true)
    actualizaPuntaje(opcion)
  }
  
  const actualizaPuntaje = (opcion) =>{
    if (opcion === preguntaActual.respuesta){
        setPuntaje(puntaje+5)
    } 
  }  

  function siguientePregunta(){
      setmostrarRespuesta(false)

      if (preguntaIndex<preguntas.length-1){
        setpreguntaIndex(preguntaIndex+1)
      } else{
        setpreguntaIndex(0)
      }
  }
  // const [contador, setContador] = useState(0)
  // function sumar(){
  //   setContador(contador+1)
  // }
  // function restar(){
  //   setContador(contador-1)
  // }
  return (
    <>
      <h1>Trivia</h1>
      <p>Puntos:<strong>{puntaje}</strong></p>
      <div className="col-sg8">
        <div className="card-header">
          <h3>{preguntaActual.pregunta}</h3>
        </div>
        <div className="card-body">
          <div className="cardText">
            <p><strong>Opciones</strong></p>
            {preguntaActual.opciones.map((opcion)=>
            <button onClick={()=>respuesta(opcion)}>{opcion}</button>
            )}
            {mostrarRespuesta && <div>
            <hr/>
            <p>La respuesta es: <strong>{preguntaActual.respuesta}</strong></p>
              </div>}
          </div>
                <button className='btn btn-dark' onClick={siguientePregunta}>Siguiente pregunta</button>
        </div>
      </div>
      
      {/* <h1>contador</h1>
      <h3>{contador}</h3>
      <button onClick={sumar} disabled={contador==10?"disabled":""}>sumar</button>
      <button onClick={restar}>restar</button> */}
    </>
  )
}

export default App


/* comentarios
{preguntas[0].pregunta}
recorro la array, llamoo a la array con preguntas, me posiciono en el primer elemento 0
y traigo la propiedad/elemento pregunta*/