export default function About () {
  return (
    <div className='text-center'>
      <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt='homeLogo' id='img' className='mx-auto max-w-lg h-auto' />
      <h1 className='text-3xl mb-4 font-medium text-gray-900'>
        Acerca de 4-DAY
      </h1>
      <p>
        Te damos la bienvenida a 4-DAY, la red profesional donde puedes encontrar ofertas de trabajo para el
        día a día en el sector de la hostelería.
      </p>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3' />
      <h2 className='text-xl mb-4 font-medium text-gray-900'>
        ¿Quiénes somos?
      </h2>
      <p>
        4-DAY nació en el año 2022, y se lanzó oficialmente el 5 de marzo de 2023.<br />
        Actualmente, este proyecto está enfocado a los trabajadores que quieran encontrar un empleo para el día a
        día en el sector de la hostelería.
      </p>
    </div>
  )
}
