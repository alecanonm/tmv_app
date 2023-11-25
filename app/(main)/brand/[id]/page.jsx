import { Brand } from '@components/templates'

export const metadata = {
  title: 'TMV | Brand',
  description: 'Take my vape | Brand page',
}

const BrandPage = ({ params }) => <Brand params={params} />

export default BrandPage
