import { useEffect, useState } from 'react'
import { getDetailUsuario } from '../services/posts/getDetailUsuario'

export default function Perfil (props) {
  const [usuario, setUsuario] = useState([])

  useEffect(() => {
    const id = props.user.usuario.id
    getDetailUsuario({ id })
      .then(
        (data) => {
          console.log(data)
          setUsuario(data)
        }
      )
  }, [])

  return (
    <div>
      <ul className='text-sm font-medium text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex' id='fullWidthTab' data-tabs-toggle='#fullWidthTabContent' role='tablist'>
        <ul className='space-y-5 my-7 w-full ml-5'>
          <li className='w-full'>
            {
      usuario.foto
        ? <img className='w-36 h-36 rounded-full' src={process.env.PUBLIC_URL + '/PerfilUsuario.png'} alt={usuario.usuario} />
        : <img className='w-36 h-36 rounded-full' src={process.env.PUBLIC_URL + '/PerfilUsuario.png'} alt={usuario.usuario} />
    }
            <h5 className='mt-2 text-lg font-bold text-gray-900'>{usuario.nombre} {usuario.apellidos}</h5>
            <p className='text-sm text-gray-500 sm:text-base'>{usuario.ciudad}</p>
          </li>
        </ul>
        <ul className='space-y-5 my-7 w-full pl-20'>
          <li className='flex space-x-3 items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-telephone-fill text-black' viewBox='0 0 16 16'>
              <path fillRule='evenodd' d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
            </svg>
            <span className='text-base leading-tight text-black'>{usuario.tel}</span>
          </li>
          <li className='flex space-x-3 items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-envelope-fill text-black' viewBox='0 0 16 16'>
              <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
            </svg>
            <span className='text-base leading-tight text-black'>{usuario.correo}</span>
          </li>
          <li className='flex space-x-3 items-center'>
            <span className='text-base leading-tight text-black'>Experiencia:</span>
            <span className='text-base leading-tight text-black'>{usuario.experiencia} año(s)</span>
          </li>
        </ul>
      </ul>
    </div>
  )
}
