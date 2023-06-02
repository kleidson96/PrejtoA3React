import React from 'react'
import TituloPagina from '../../componetes/TituloPagina'
import PControle from '../../componetes/PControle'
import MenuSuperior from '../../componetes/MenuSuperior'
import "../PainelControle/style.css"

function PainelControle() {
  return (
   <div>
   <MenuSuperior/>
   <TituloPagina titulo="Painel de Controle"/>
   <PControle/>
   
  </div>
  )
}

export default PainelControle