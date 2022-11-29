import {useState, useEffect} from 'react'

import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'
import {monedas} from '../recursos/Monedas'
import styled from '@emotion/styled'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 18px;
    transition: background-color .3s ease;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {   

    const [criptos , setCriptos] = useState([])
    const [error , setError] = useState(false)
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [criptoMoneda, SelectCriptoMonedas] = useSelectMonedas('Elige tu Criptomoneda', criptos)
    useEffect(()=>{
        const consultarApi = async()=>{
            const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const response = await fetch(URL);
            const resultado = await response.json()
            const arrayCripto = resultado.Data.map(cripto=>{
                const objTmp = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName  
                }
                return objTmp
            })            
            setCriptos(arrayCripto)
        }
        consultarApi()
    },[])
    
    const handleSubmit = e =>{
        e.preventDefault()
        if([moneda, criptoMoneda].includes('')){
            setError(true)
            return
        }
        setError(false)
        setMonedas({moneda, criptoMoneda})

    }

  return (
    <div>
        {error && <Error> Todos los campos son obligatorios </Error>}
        <form onSubmit={handleSubmit}>
            <SelectMonedas />
            <SelectCriptoMonedas />
            <InputSubmit type="submit" value="Cotizar" />
        </form>
    </div>
  )
}

export default Formulario