/* eslint-disable react/prop-types */
// const newMessage = {
     
//     message: 'Hello World',
//     title: 'Jemma'
// }


// funcion para mostrar en pantalla el mensaje, por medio de parametros
// const HelloWorldFunction = (a, b) => {
//     return a + b 
// }

// export const Name = () => {   
//   return (
//     <>
//         <h1>{ HelloWorldFunction('hello ', 'world') }</h1>
//         {/* <code>{ JSON.stringify(newMessage) }</code> */}
//         <p>This is a subtitle</p> 
//     </>
 
//   )
// }


import PropTypes from 'prop-types'

export const Name = ({ title, subtitle, name }) => {

  //console.log(  )
  return (
    <>
        <h1>{ title }</h1>
        {/* <code>{ JSON.stringify(newMessage) }</code> */}
        <p>{ subtitle } </p> 
        <p>{ name }</p>
    </>
    
  )
}


// hacer obligatorios los parametros, y darles el tipo de tipado
Name.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}


// parametros por defectoen caso de venir nulo
Name.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'No hay subtitulo',
  name: 'Jemma'
}