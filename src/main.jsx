import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'



import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import CadastrarPlataforma from './Paginas/CadastrarPlataforma/CadastrarPlataforma.jsx'
import PainelControle from './Paginas/PainelControle/PainelControle.jsx'
import CadastrarSeries from './Paginas/CadastrarSeries/CadastrarSeries.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "CadastrarPlataforma",
        element: <CadastrarPlataforma/>,
      },
      {
        path: "PainelControle",
        element: <PainelControle/>
      },
      {
        path: "CadastrarSeries",
        element: <CadastrarSeries/>,
      },
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
