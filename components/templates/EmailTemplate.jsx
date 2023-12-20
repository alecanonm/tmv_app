const EmailTemplate = () => (
  <div className='max-w-2xl mx-auto p-8 bg-gray-100'>
    <h1 className='text-3xl font-bold mb-4 text-gray-800'>
      ¡Gracias por Elegir Take My Vape!
    </h1>
    <img
      src='http://royaltyvapedistribution.co.za/wp-content/uploads/2021/05/Screenshot_20210514-130458_Chrome-1024x1019.jpg'
      alt='Hand holding vape'
      className='w-full h-auto mb-8'
    />
    <p className='mb-4'>Hola 👋🏻</p>
    <p className='mb-4'>
      Queríamos expresar nuestro sincero agradecimiento por tu reciente compra
      al por mayor en Take My Vape. Tu elección nos llena de alegría y
      agradecimiento. En Take My Vape, nos esforzamos por brindarte una
      experiencia excepcional en el fascinante mundo de los vapes.
    </p>
    <p className='mb-4'>
      Estamos aquí para servirte, ya sea que necesites asistencia, sugerencias o
      simplemente quieras compartir tus pensamientos sobre vapes. Tu
      satisfacción es nuestra prioridad.
    </p>
    <p className='mb-4'>
      Gracias por ser parte de nuestra creciente familia. Esperamos seguir
      siendo tu elección en cada paso de tu viaje en el mundo de los vapes.
    </p>
    <p className='mb-2'>Con gratitud,</p>
    <p className='mb-4'>El Equipo de Take My Vape</p>
    <ul className='list-none p-0 text-center'>
      <li className='mb-2'>
        Teléfono:{' '}
        <a href='tel:+13135290855' className='text-blue-500'>
          313-529-0855
        </a>
      </li>
      <li>
        Email:{' '}
        <a href='mailto:takemyvape@gmail.com' className='text-blue-500'>
          takemyvape@gmail.com
        </a>
      </li>
    </ul>
  </div>
)

export default EmailTemplate
