import About from './footer/About'
import Cookies from './footer/Cookies'
import Privacidad from './footer/Privacidad'
import AvisoLegal from './footer/AvisoLegal'
import Footer from './footer/Footer'
import TinderCards from './body/TinderCards'
import Perfil from './body/Perfil'
import '../styles/layout.css'
import { Routes, Route, Link } from 'react-router-dom'
// import newPostService from '../components/services/posts/newPost'

export default function Header (props) {
  const handleLogout = () => {
    // newPostService.setToken(props.usuario.token)
    window.localStorage.removeItem('loggedEmpresa')
    window.location.reload()
  }
  return (
    <>
      <nav className='p-6 bg-white rounded-lg shadow md:px-6 md:py-3'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <Link to='/'>
            <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt='homeLogo' id='img' />
          </Link>
          <div className='flex items-center md:order-2 text-red-700'>
            <Link to='' onClick={handleLogout} className=' font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 hover:text-red-900'>
              Cerrar sesión
            </Link>
          </div>
          <div className=' items-center w-full md:flex md:w-auto md:order-1'>
            <ul className='flex mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent'>
              <li>
                <Link to='/' className='hover:text-red-700'>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to='/profile' className='hover:text-red-700'>
                  Perfil
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <div className='p-4 bg-white rounded-lg shadow md:px-6 md:py-3 dark:bg-gray-900 grid'>
        <Routes>
          <Route path='/cookies' element={<Cookies />} />
          <Route path='/privacidad' element={<Privacidad />} />
          <Route path='/avisoLegal' element={<AvisoLegal />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Perfil />} />
          <Route path='/' element={<TinderCards />} />
        </Routes>
      </div>
      <br />
      <Footer />
    </>
  )
}
