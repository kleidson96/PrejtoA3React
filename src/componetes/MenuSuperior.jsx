import React, {Component } from 'react'

export default class MenuSuperior extends Component {
  render() {
    return (
        <div class="menu-superior">
        <div class="img-text">
            <div class="img-esquerda">
                <img class="img-logo" src="./src/imgs/logo.png" alt="Imagem da Logo"/>     
            </div>
            <div class="text-direita">
                <a href="/Séries/index.html">SÉRIES</a>
                <a href="/Minha_Lista/index.html">MINHA LISTA</a>
                <a href="/Contato/index.html">CONTATO</a>
                <a href="/Administrador/Painel de controle/index.html" id="PAINEL-DE-CONTROLE">PAINEL DE CONTROLE</a>
            </div>
        </div>
        <div class="usuario">
            <div>
                <button onclick="dropdown()" class="dropbtn">ADMINISTRADOR</button>
                <div id="dropdown-content" class="dropdown-content">
                    <a href="/perfil/index.html">Perfil</a>
                    <a href="/Pag_inicial/index.html">Sair</a>
                </div>
            </div>    
        </div>
        <div class="usuario2">
            <div>
                <button onclick="dropdown2()" class="dropbtn2">MINHA CONTA</button>
                <div id="dropdown-content2" class="dropdown-content2">
                    <a href="/Séries/index.html">Séries</a>
                    <a href="/Minha_Lista/index.html">Minha Lista</a>
                    <a href="/Contato/index.html">Contato</a>
                    <a href="/perfil/index.html">Perfil</a>
                    <a href="/Administrador/Painel de controle/index.html">Painel de Controle</a>
                    <a href="/Pag_inicial/index.html">Sair</a>
                </div>
            </div>    
        </div>
    </div>
      
       
    )
  }
}
