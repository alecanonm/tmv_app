import logoShopping from '@public/assets/shopping.png'
import { ImageWrappedByArrows } from '@components/atoms'

const NotFound = () => (
  <section className='flex flex-col justify-center items-center gap-10 h-screen container mx-auto px-6'>
    <h1 className='text-3xl sm:text-5xl text-center'>
      <strong>Not found 404</strong>
    </h1>
    <p className='text-slate-500 text-center text-lg sm:text-xl'>
      No te recomendamos esta marca, mejor explora nuestra tienda de vapes
    </p>
    <ImageWrappedByArrows image={logoShopping} />
  </section>
)

export default NotFound
