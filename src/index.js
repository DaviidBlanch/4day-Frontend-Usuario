import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.css'
import '../src/styles/layout.css'
import { BrowserRouter } from 'react-router-dom'
// import LoginForm from './components/body/LoginForm'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className='layout'>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </div>
)
