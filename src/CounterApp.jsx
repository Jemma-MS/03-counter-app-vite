import { useState } from 'react'

import PropTypes from 'prop-types'


export const CounterApp = ({ value }) => {

  // function handleAdd( event ) {
  //   console.log( event )
  // }

  // esto es lo mismo a la función de arriba pero con una función de flecha
  // const handleAdd = ( event ) => {
  //   console.log( event )
  // }


  // uso del hook useState, recibe como primer arreglo el counter, una vairble number
  // y el set counter seria la función que se va a encargar de sumarlo en el handleApp
  // useState e el nombre del hook
  const [ counter, SetCounter ] = useState( 0 )

  const handleAdd = ( ) => {
    // se suma el valor counter en el hook en 1
    SetCounter( counter + 1 )
  }

  const handleSubtract = () => {
    SetCounter( counter - 1 )
  }

  const handleReset = () => {
    SetCounter( value )
  }
  
  return (
    <>
        <h1>Counter App</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd }> +1 </button>
        
        <button onClick={ handleSubtract }> -1 </button>
        <button onClick={ handleReset }> Reset </button>
    </> 
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 4
}