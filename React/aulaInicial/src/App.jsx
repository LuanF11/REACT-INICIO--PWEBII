import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import foto from './assets/foto.jfif'
import './App.css'

function App() {


  return (
    <>
    <div class="container">
        <div class="card">
            <div class="header">
                <div id="search">
                    <input type="text" id="nome-usuario" value="LuanF11"/>
                </div>
                <div class="main">
                    <div class="image" id="aqui" >
                      <img src={foto} alt="" srcset="" />
                        
                    </div>
                    <h3 class="name" id="nome">Luan</h3>
                </div>
            </div>

            <div class="content">
                <div class="left">
                    <div class="about-container">
                        <h3 class="title" id="login">  </h3>
                        <p class="text" id="bio">  Interessado em Tecnologia|Games|Idiomas, Filmes e livros de fantasia e ficção cientifica </p>
                    </div>           
                </div>

                <div class="right">
                    <div>
                        <h3 class="number" id="info-repo"> 25 </h3> 
                        <h3 class="number-title"> Posts </h3>
                        <div id="repoDetails"></div>
                    </div>
                    <div>
                        <h3 class="number" id="following"> 2</h3>
                        <h3 class="number-title"> Seguindo </h3>
                    </div>
                    <div>
                        <h3 class="number" id="followers"> 6 </h3>
                        <h3 class="number-title"> Seguidores </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
