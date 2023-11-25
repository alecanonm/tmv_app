export const metadata = {
  title: 'TMV | About',
  description: 'Take my vape | About page',
}

const AboutPage = ({ params, searchParams }) => {
  console.log({ params, searchParams })
  return (
    <div className='container mx-auto'>
      <h1>About</h1>
    </div>
  )
}

export default AboutPage
