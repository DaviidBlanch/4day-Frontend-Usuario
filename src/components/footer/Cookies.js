import { Link } from 'react-router-dom'

export default function Cookies () {
  return (
    <div className='text-left'>
      <h1 className='text-3xl mb-4 font-medium text-gray-900'>Política de cookies</h1>
      <p>Fecha de entrada en vigor: 3 de junio de 2022</p><br />
      <p>
        En 4-DAY, creemos que hay que ser claros sobre el modo en que recabamos y utilizamos
        tus datos. Esta Política de cookies se aplica a cualquier servicio de 4-DAY
        asociado a la misma o que la incorpore por referencia. Utilizamos cookies,
        para recopilar y utilizar datos como parte de nuestros Servicios, tal y como
        se define en nuestra Política de privacidad.
        <Link to='/privacidad' className='hover:underline text-red-700'> (Política de privacidad)</Link>.
        Para ofrecer un mayor nivel de transparencia, esta Política proporciona
        información detallada sobre cómo y cuándo utilizamos esta tecnología.
      </p> <br />
      <div className='overflow-x-auto relative'>
        <table className='w-full text-sm text-left text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='py-3 px-6'>
                Tecnología
              </th>
              <th scope='col' className='py-3 px-6'>
                Descripción
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b'>
              <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'>
                Cookies
              </th>
              <td className='py-4 px-6 text-gray-900'>
                Una cookie es un pequeño archivo colocado en tu dispositivo electrónico que habilita las
                funcionalidades de 4-DAY. Cualquier navegador que visite nuestro sitio puede recibir
                cookies nuestras o de terceros, como nuestros clientes, socios o proveedores de servicios.
                <br />
                Utilizamos dos tipos de cookies: persistentes y de sesión. Las cookies persistentes
                permanecen después de la sesión actual y se usan con muchos fines, como el de reconocerte
                como un usuario existente. De este modo, resulta más sencillo volver a 4-DAY e interactuar
                con nuestros Servicios sin tener que volver a iniciar sesión. Como las cookies persistentes
                permanecerán en tu navegador, 4-DAY las leerá cuando vuelvas a uno de nuestros sitios web
                o a un sitio de un tercero que utilice nuestros Servicios. Las cookies de sesión solo se
                almacenan durante el tiempo que dure la misma (normalmente, lo que dure la visita que estés
                realizando en ese momento a un sitio web o la sesión con el navegador).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
