import styled from '@emotion/styled'
 
const ResultadoDiv = styled.div`
   color : white;
   font-family: 'Lato' sans-serif;
   display: flex;
   align-items: center;
   div{
    padding-left: 15px;
   }
`
const Texto = styled.p`
 span{
    font-weight: 700;
 }
` 
const Precio = styled.p`
  font-size   : 18px;
 span{
    font-size   : 22px;
    font-weight: 700;
 }
`
const Imagen = styled.img`
  width: 25%;
  height: 25%;
`
const Resultado = ({resultado}) => {
  return (
    <ResultadoDiv>
        <Imagen src={`https://cryptocompare.com/${resultado.IMAGEURL}`} alt="criptomoneda" />
        <div>
            <Precio>El precio es de: <span>{resultado.PRICE}</span></Precio>
            <Texto>El precio más alto del día es de: <span>{resultado.HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día es de: <span>{resultado.LOWDAY}</span></Texto>
            <Texto>La variación de las últimas 24h es de: <span>{resultado.CHANGEPCT24HOUR}</span></Texto>
            <Texto>La última actualización fue en: <span>{resultado.LASTUPDATE}</span></Texto>
        </div>
    </ResultadoDiv>
  )
}

export default Resultado