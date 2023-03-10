import { useState } from 'react'
import { useForm } from 'react-hook-form'
import registerService from '../services/login/register'

export default function Home () {
  const { handleSubmit, register } = useForm()
  const [registered, setRegistered] = useState(false)
  const [isSubmit, setIsSubimite] = useState(false)

  const onSubmit = values => {
    setIsSubimite(true)
    registerService(values)
      .then(
        () => {
          setRegistered(true)
          setIsSubimite(false)
        }
      )
  }

  return (
    <>
      {
        registered
          ? ''
          : (
            <div className=' m-14 p-6 mt-5 bg-white rounded-lg shadow md:px-6 md:py-3'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-4xl mb-4 font-medium text-gray-900'>Registrarse</h1>
                <div className='mb-6'>
                  <label htmlFor='nombre' className='block mb-2 text-sm font-medium text-gray-900'>Nombre(*)</label>
                  <input
                    type='text'
                    name='nombre'
                    id='nombre'
                    {...register('nombre', { minLength: 3, maxLength: 20 })}
                    placeholder='Introduce el nombre'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='usuario' className='block mb-2 text-sm font-medium text-gray-900'>Usuario(*)</label>
                  <input
                    type='text'
                    name='usuario'
                    id='usuario'
                    {...register('usuario', { minLength: 3, maxLength: 20 })}
                    placeholder='Introduce el usuario'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='contrase??a' className='block mb-2 text-sm font-medium text-gray-900'>Contrase??a(*)</label>
                  <input
                    type='password'
                    name='contrase??a'
                    id='contrase??a'
                    placeholder='Introduce una contrase??a'
                    {...register('password', { minLength: 3, maxLength: 12 })}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='apellidos' className='block mb-2 text-sm font-medium text-gray-900'>Apellidos(*)</label>
                  <input
                    type='text'
                    name='apellidos'
                    id='apellidos'
                    {...register('apellidos', { minLength: 3, maxLength: 20 })}
                    placeholder='Introduce los apellidos'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='dni' className='block mb-2 text-sm font-medium text-gray-900'>NIF/NIE(*)</label>
                  <input
                    type='text'
                    name='dni'
                    id='dni'
                    {...register('dni', { minLength: 9, maxLength: 9 })}
                    placeholder='Introduce el NIF/NIE'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='fechaNacimiento' className='block mb-2 text-sm font-medium text-gray-900'>Fecha de nacimiento(*)</label>
                  <input
                    type='text'
                    name='fechaNacimiento'
                    id='fechaNacimiento'
                    {...register('fechaNacimiento', { minLength: 8, maxLength: 10 })}
                    placeholder='Introduce la fecha de nacimiento'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='afiliacionSS' className='block mb-2 text-sm font-medium text-gray-900'>N?? Afiliaci??n S.S.(*)</label>
                  <input
                    type='text'
                    name='afiliacionSS'
                    id='afiliacionSS'
                    {...register('afiliacionSS', { minLength: 7, maxLength: 8 })}
                    placeholder='Introduce el n??mero de la Seguridad Social'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='correo' className='block mb-2 text-sm font-medium text-gray-900'>e-mail(*)</label>
                  <input
                    type='text'
                    name='correo'
                    id='correo'
                    {...register('correo', { minLength: 3, maxLength: 1000 })}
                    placeholder='Introduce el correo electr??nico'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='ciudad' className='block mb-2 text-sm font-medium text-gray-900'>Provincia(*)</label>
                  <input
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    {...register('ciudad', { minLength: 3, maxLength: 15 })}
                    placeholder='De qu?? provincia eres?'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='nacionalidad' className='block mb-2 text-sm font-medium text-gray-900'>Pa??s(*)</label>
                  <input
                    type='text'
                    name='nacionalidad'
                    id='nacionalidad'
                    {...register('nacionalidad', { minLength: 5, maxLength: 25 })}
                    placeholder='De qu?? pa??s eres?'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='foto' className='block mb-2 text-sm font-medium text-gray-900'>Imagen(*)</label>
                  <input
                    type='file'
                    name='foto'
                    id='foto'
                    {...register('foto')}
                    placeholder='Inserta una imagen'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='tel' className='block mb-2 text-sm font-medium text-gray-900'>Tel??fono(*)</label>
                  <input
                    type='text'
                    name='tel'
                    id='tel'
                    {...register('tel', { minLength: 3, maxLength: 9 })}
                    placeholder='Introduce el n??mero de tel??fono'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='experiencia' className='block mb-2 text-sm font-medium text-gray-900'>A??os de experiencia(*)</label>
                  <input
                    type='text'
                    name='experiencia'
                    id='experiencia'
                    {...register('experiencia')}
                    placeholder='Cuantos a??os de experiencia tienes?'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required
                  />
                </div>
                <div className='mb-6'>
                  <input
                    id='remember'
                    type='checkbox'
                    value=''
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300' required
                  />
                  <label htmlFor='remember' className='ml-2 text-sm font-medium text-gray-900'>Acepto las pol??ticas de uso de datos personales y los t??rminos y condiciones.(*)</label>
                </div>
                <div className='mb-6'>
                  <label htmlFor='remember' className='ml-2 text-sm font-medium text-gray-900'>(*) Campos obligatorios</label>
                </div>
                <button type='submit' disabled={isSubmit} className='text-white bg-red-700  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Registrarse</button>
              </form>
            </div>
            )
    }
    </>
  )
}
