import { Link } from 'react-router-dom'

export default function Footer () {
  return (
    <footer className='p-4 bg-white rounded-lg shadow md:px-6 md:py-3 dark:bg-gray-900'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt='homeLogo' id='img' className=' mr-3 h-8' />
        <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
          <li>
            <Link to='/cookies' className='mr-4 hover:underline md:mr-6 '>
              Cookies
            </Link>
          </li>
          <li>
            <Link to='/privacidad' className='mr-4 hover:underline md:mr-6 '>
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link to='/avisoLegal' className='mr-4 hover:underline md:mr-6 '>
              Aviso Legal
            </Link>
          </li>
          <li>
            <Link to='/about' className='mr-4 hover:underline md:mr-6 '>
              Sobre nosotros
            </Link>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3' />
      <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>© 2022 4-DAY™. Todos los derechos reservados.
      </span>
    </footer>
  )
}
