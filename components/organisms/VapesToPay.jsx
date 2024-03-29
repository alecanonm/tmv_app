import { VapePay } from '@components/molecules'

const VapesToPay = ({ orderProducts }) => {
  const totalToPay = orderProducts.reduce(
    (acc, vape) => acc + vape.quantity * vape.price,
    0,
  )

  return (
    <section className='flex flex-col gap-10 md:max-w-[30rem] text-white h-full md:pt-10 pb-5'>
      <h1 className='text-4xl self-center font-bold text-center'>
        {`Total a pagar: ${totalToPay}€`}
      </h1>
      <div className='flex-grow flex flex-col gap-7 overflow-y-auto'>
        {orderProducts.map((vape) => (
          <VapePay key={vape.id} vape={vape} />
        ))}
      </div>
    </section>
  )
}

export default VapesToPay
