import { useState, useEffect } from 'react'

import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width : 900px;
  margin: 0 auto;
  width : 90%;
  @media(min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap:2rem;
  }
`
const Heading = styled.h1`
  font-family : 'Lato', sans-serif;
  color: white;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  border-bottom: 6px solid '#66A2FE';
  font-size: 34px;

  &::after{
    width: 140px;
    content: "";    
    border-bottom: 6px solid #66A2FE;
    display: block;
    margin: 0 auto 10px auto;
  }
` 
const Imagen = styled.img`
  max-width : 400px;
  width:80%;
  margin: 100px auto 0 auto;
  display: block
`

function App() {
  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})
  const [loader, setLoader] = useState(false)

  useEffect(()=>{
    if(Object.keys(monedas).length > 0){
      const cotizarCripto = async () =>{
        setCotizacion({})
        setLoader(true)
        const {moneda, criptoMoneda} = monedas
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
        
        const respuesta = await fetch(URL)
        const resultado = await respuesta.json()

        setLoader(false)
        setCotizacion(resultado.DISPLAY[criptoMoneda][moneda])        
      }
      cotizarCripto()
    }
  },[monedas])

  return (
    <div className="App">
      <Contenedor>
        <Imagen src={ImagenCripto} alt="Imagen criptos" />
        <div>
          <Heading>Cotiza Criptomonedas al instante</Heading>
          <Formulario setMonedas={setMonedas} />
          {loader && <Spinner />}
          {cotizacion.PRICE && <Resultado resultado={cotizacion} />}
        </div>
      </Contenedor>
    </div>
  )
}

export default App
