import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const App = () => {
  const [contador, setContador] = useState(0)

  const handleAugment = () => {
    return contador < 10 ? setContador(contador + 1) : 'disabled = true'
  }

  const handleDecrease = () => {
    return contador > 0 ? setContador(contador - 1) : "disabled = true"
  }

  const handleReset = () => {
    return setContador(0)
  }


  const isEven = (contador % 2) === 0
  const message = isEven ? <h1>Even</h1> : <h4>Odd</h4>
  return (
    <div>
      <h1>El contador tiene un maximo de 10 y un minimo de 0</h1>
      <h1>{contador}</h1>
      { contador < 10 ?
      <button onClick={handleAugment} >Aumentar</button> : <button disabled >Aumentar</button>}
      <button onClick={handleReset}>Reset</button>
      {contador !== 0 ?
      <button onClick={handleDecrease} >Decrementar</button> : <button disabled >Decrementar</button> 
      }
      <br/>
      {message}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))