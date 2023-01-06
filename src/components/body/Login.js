import { useEffect, useState } from 'react'
import loginService from '../services/login/login'
import Header from '../Header'
import RegisterForm from '../body/RegisterForm'
import VisibleButton from './VisibleButton'

export default function LoginForm () {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loggedUsuarioJSON = window.localStorage.getItem('loggedUsuario')
    if (loggedUsuarioJSON) {
      const user = JSON.parse(loggedUsuarioJSON)
      setUser(user)
    }
  }, [])

  const loginSubmit = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService({
        usuario,
        password
      })
      window.localStorage.setItem(
        'loggedUsuario', JSON.stringify(user)
      )

      setUser(user)
      setUsuario('')
      setPassword('')
    } catch (e) {
      setError(e.response.data.error)
      setTimeout(() => {
        setError(null)
      }, 5000)
    }
  }

  const renderLoginForm = () => {
    return (
      <>
        <div className=' m-14 p-6 mt-28 bg-white rounded-lg shadow md:px-6 md:py-3'>
          <form onSubmit={loginSubmit}>
            <h1 className='text-4xl mb-4 font-medium text-gray-900'>Iniciar Sesión.<label className='font-thin text-red-700'> Usuario</label></h1>
            <div className='text-center text-red-700'>
              {error}
            </div>
            <div className='mb-6'>
              <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900'>Usuario</label>
              <input
                type='text'
                value={usuario}
                name='usuario'
                onChange={(event) => setUsuario(event.target.value)}
                id='usuario'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900'>Contraseña</label>
              <input
                type='password'
                value={password}
                name='password'
                onChange={(event) => setPassword(event.target.value)}
                id='password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
              />
            </div>
            <button type='submit' className='text-white bg-red-700  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Login</button>
          </form>
        </div>
        <VisibleButton buttonLabel='Registrarse'>
          <RegisterForm />
        </VisibleButton>
      </>
    )
  }

  return (
    <div>
      {
       user
         ? <Header usuario={user} />
         : renderLoginForm()
     }
    </div>
  )
}
