import React from 'react'
import TituloPagina from '../../componetes/TituloPagina'
import MenuSuperior from '../../componetes/MenuSuperior'
import "../CadastrarSeries/style.css"
import CSeries from '../../componetes/CSeries'

function CadastarSeries() {
  return (
   <div>
   <MenuSuperior/>
   <TituloPagina titulo="Cadastar Series"/>
   <CSeries/>
   
   
  </div>
  )
}

export default CadastarSeries