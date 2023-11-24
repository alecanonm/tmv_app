export const metadata = {
  title: 'TMV | Brand',
  description: 'Take my vape | Brand page',
}

const BrandPage = ({ params }) => {
  console.log({ params })
  return <h1>Brand {params.id}</h1>
}

export default BrandPage
