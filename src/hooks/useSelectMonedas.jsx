import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
   width: 100%;
   font-size: 18px;
   padding: 14px;
   border-radius: 10px;
   margin-bottom: 20px;
`

const useSelectMonedas = (label, monedas) => {
    const [state, setState] = useState('')

  const SelectMonedas = () =>(
    <>
        <Label htmlFor="select">{label}</Label>
        <Select 
             name="select"
             id="select"
             value={state}
             onChange={e=>setState(e.target.value)}>
            <option value="">Seleccione</option>
            {
                monedas.map(moneda=>(
                    <option key={moneda.id} value={moneda.id}>{moneda.nombre}</option>
                ))
            }
        </Select>
    </>
  )

  return [ state, SelectMonedas ]
}

export default useSelectMonedas