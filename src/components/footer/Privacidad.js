import { Link } from 'react-router-dom'

export default function Privacidad () {
  return (
    <div className='text-left'>
      <h1 className='text-3xl mb-4 font-medium text-gray-900'>Política de privacidad</h1>
      <p>
        4-DAY te informa sobre su Política de Privacidad respecto del tratamiento y protección
        de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la
        navegación o contratación de servicios a través de nuestro sitio web.
      </p><br />
      <p>
        En este sentido, 4-DAY garantiza el cumplimiento de la normativa vigente en materia de
        protección de datos personales, reflejada en la Ley Orgánica 15/1999, de 13 de diciembre, de
        Protección de Datos de Carácter Personal (LOPD), y al Real Decreto 1720/2007, de 21 de diciembre,
        conocido como el Reglamento de desarrollo de la LOPD. Cumple también con el Reglamento (UE) 2016/679
        del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas
        físicas (RGPD).
      </p> <br />
      <p>
        El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones
        incluidas en el <Link to='/avisoLegal' className='hover:underline text-red-700'> Aviso Legal</Link>.
      </p> <br />
      <h1 className='text-2xl mb-4 font-medium text-gray-900'>Principios aplicados en el tratamiento de datos</h1>
      <p>
        En el tratamiento de tus datos personales, el Titular aplicará los siguientes principios que se ajustan a
        las exigencias del nuevo reglamento europeo de protección de datos (RGPD):
      </p>
      <ul className='pl-5 mt-2 space-y-1 list-disc list-inside'>
        <li>
          <strong className='font-semibold text-gray-900'>Principio de licitud, lealtad y transparencia: </strong>
          El Titular siempre requerirá el consentimiento para el tratamiento de los datos personales que
          puede ser para uno o varios fines específicos sobre los que el Titular informará al Usuario
          previamente con absoluta transparencia.
        </li>
        <li>
          <strong className='font-semibold text-gray-900'>Principio de minimización de datos: </strong>
          El Titular solicitará solo los datos estrictamente necesarios para el fin o los fines que los solicita.
        </li>
        <li>
          <strong className='font-semibold text-gray-900'>Principio de limitación del plazo de conservación: </strong>
          El Titular mantendrá los datos personales recabados durante el tiempo estrictamente necesario
          para el fin o los fines del tratamiento. El Titular informará al Usuario del plazo de conservación
          correspondiente según la finalidad.
          En el caso de suscripciones, el Titular revisará periódicamente las listas y eliminará aquellos
          registros inactivos durante un tiempo considerable.
        </li>
        <li>
          <strong className='font-semibold text-gray-900'>Principio de integridad y confidencialidad: </strong>
          Los datos personales recabados serán tratados de tal manera que su seguridad, confidencialidad
          e integridad esté garantizada. El Titular toma las precauciones necesarias para evitar el acceso
          no autorizado o uso indebido de los datos de sus usuarios por parte de terceros.
        </li>
      </ul>
    </div>
  )
}
