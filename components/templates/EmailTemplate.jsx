/* eslint-disable @next/next/no-img-element */

const OrderItem = ({ item }) => (
  <article style={{ margin: '1rem 0', textAlign: 'left' }}>
    <span style={{ display: 'inline-block', width: '100%' }}>
      <strong>Nombre:</strong> {item.name}
    </span>
    <span style={{ display: 'inline-block', width: '100%' }}>
      <strong>Cantidad:</strong> {item.quantity}
    </span>
    <span style={{ display: 'inline-block', width: '100%' }}>
      <strong>Valor unitario:</strong> {item.unit_amount.value}€
    </span>
  </article>
)

const EmailTemplate = ({ orderId, fullName, items, total }) => (
  <div style={{ background: '#333333' }}>
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'center',
        fontSize: '1rem',
        padding: '1rem',
        background: '#fff',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>¡Gracias por Elegir Take My Vape!</h1>
      <img
        src='http://royaltyvapedistribution.co.za/wp-content/uploads/2021/05/Screenshot_20210514-130458_Chrome-1024x1019.jpg'
        alt='Hand holding vape'
        style={{ maxWidth: '400px', borderRadius: '1rem', marginTop: '1rem' }}
      />
      <section style={{ textAlign: 'left' }}>
        <p style={{ fontSize: '1.2rem' }}>Hola {fullName} 👋🏻</p>
        <p>
          Queríamos expresar nuestro sincero agradecimiento por tu reciente
          compra al por mayor en Take My Vape. Tu elección nos llena de alegría
          y agradecimiento. En Take My Vape, nos esforzamos por brindarte una
          experiencia excepcional en el fascinante mundo de los vapes.
        </p>
        <p>
          Estamos aquí para servirte, ya sea que necesites asistencia,
          sugerencias o simplemente quieras compartir tus pensamientos sobre
          vapes. Tu satisfacción es nuestra prioridad.
        </p>
        <p>
          Gracias por ser parte de nuestra creciente familia. Esperamos seguir
          siendo tu elección en cada paso de tu viaje en el mundo de los vapes.
        </p>
        <p>Con gratitud,</p>
        <p>El Equipo de Take My Vape</p>
        <ul>
          <li>
            Teléfono: <a href='tel:+34613646137'>+34613646137</a>
          </li>
          <li>
            Email:{' '}
            <a href='mailto:takemyvape@gmail.com'>takemyvape@gmail.com</a>
          </li>
        </ul>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <div
          style={{
            width: '100%',
            border: '1px solid green',
            backgroundColor: 'green',
            padding: '0.5rem 0',
          }}
        >
          <span style={{ fontSize: '1.2rem', color: '#fff' }}>
            Pedido {orderId}
          </span>
        </div>
        {items.map((item, index) => (
          <OrderItem key={index} item={item} />
        ))}
        <p style={{ fontSize: '2rem' }}>
          <strong>Total:</strong> <span>{total}</span>
        </p>
      </section>
    </div>
  </div>
)

export default EmailTemplate
