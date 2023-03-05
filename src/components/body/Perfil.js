import axios from 'axios'
import { useEffect, useState } from 'react'
import { getDetailUsuario } from '../services/posts/getDetailUsuario'

export default function Perfil (props) {
  const [usuario, setUsuario] = useState([])
  const [imagen, setImagen] = useState(null)

  useEffect(() => {
    const id = props.user.usuario.id
    getDetailUsuario({ id })
      .then(
        (data) => {
          setUsuario(data)
        }
      )
  }, [])

  useEffect(() => {
    const id = props.user.usuario.id

    async function fetchData () {
      try {
        const res = await axios.get(`http://localhost:3001/imagenTrabajador/${id}`)
        setImagen(res)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  return (
    <div>
      <ul className='text-sm font-medium text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex' id='fullWidthTab' data-tabs-toggle='#fullWidthTabContent' role='tablist'>
        <ul className='space-y-5 my-7 w-full ml-5'>
          <li className='w-full'>
            {
      usuario.foto
        ? <img className='w-36 h-36 rounded-full object-cover' src={imagen?.config?.url} alt={usuario.usuario} />
        : <img className='w-36 h-36 rounded-full object-cover' src={process.env.PUBLIC_URL + '/PerfilUsuario.png'} alt={usuario.usuario} />
    }
            <h5 className='mt-2 text-lg font-bold text-gray-900'>{usuario.nombre} {usuario.apellidos}</h5>
            <p className='text-sm text-gray-500 sm:text-base'>{usuario.ciudad}, {usuario.nacionalidad}</p>
          </li>
        </ul>
        <ul className='space-y-5 my-7 w-full pl-20'>
          <li className='flex space-x-3 items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-envelope-fill text-black' viewBox='0 0 16 16'>
              <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
            </svg>
            <span className='text-base leading-tight text-black'>{usuario.fechaNacimiento}</span>
          </li>
          <li className='flex space-x-3 items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-envelope-fill text-black' viewBox='0 0 16 16'>
              <path d='M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z' />
              <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z' />
            </svg>
            <span className='text-base leading-tight text-black'>{usuario.dni}</span>
          </li>
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
            <span className='text-base leading-tight text-black'>Nº Seguridad Social: {usuario.afiliacionSS}</span>
          </li>
          <li className='flex space-x-3 items-center'>
            <span className='text-base leading-tight text-black'>Experiencia: {usuario.experiencia} año(s)</span>
          </li>
        </ul>
      </ul>
    </div>
  )
}
