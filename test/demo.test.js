

describe('pruebas en <DemoComponent />', () => { 
    
    
    test('esta prueba no debe de fallar', () => {

    //1. Inicializacion
    const messsge1 = 'Hola mundo' 


    //2. estimulo
    const message2 = messsge1.trim()


    //3. Observar el comportamiento
    expect( messsge1 ).toBe( message2 ) })


})
