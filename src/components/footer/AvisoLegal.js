import { Link } from 'react-router-dom'

export default function AvisoLegal () {
  return (
    <div className='text-left'>
      <h1 className='text-3xl mb-4 font-medium text-gray-900'>Aviso Legal</h1>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
        de la Información y Comercio Electrónico, el Titular expone sus datos identificativos.
      </p><br />
      <h2 className='text-s mb-4 font-medium text-gray-900'>¿Quién es el Responsable del tratamiento de tus datos?</h2>
      <p>
        <strong className='font-semibold text-gray-900'> Identidad: </strong>
        4-DAY
      </p>
      <p>
        <strong className='font-semibold text-gray-900'> Dirección postal: </strong>
        Avinguda de l'Universitat, 46100 Burjassot, Valencia
      </p>
      <p>
        <strong className='font-semibold text-gray-900'> Teléfono: </strong>
        677358437
      </p><br />
      <h2 className='text-s mb-4 font-medium text-gray-900'>Mayoría de edad</h2>
      <p>
        Debes tener al menos 18 años de edad para usar los servicios ofrecidos por 4-DAY o la mayoría de
        edad que se requiera en tu país para registrarte en el sitio Web o utilizarlo. Si resides en un país
        que no pertenezca a la Región europea, debes tener al menos 13 años de edad para usar el sitio Web
        o la mayoría de edad que se requiera en tu país para registrarte en el sitio Web o utilizarlo.
      </p><br />
      <h2 className='text-s mb-4 font-medium text-gray-900'>Datos personales</h2>
      <p>
        Puedes consultar toda la información relativa al tratamiento de datos personales que recoge el
        Titular en la página de  <Link to='/privacidad' className='hover:underline text-red-700'>Política de privacidad</Link>.
      </p>
    </div>
  )
}
