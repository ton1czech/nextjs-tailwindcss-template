import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='grid h-screen place-content-center bg-blue-200'>
      <h1 className='pb-8 text-5xl font-bold uppercase'>
        <span className='text-blue-800'>tailwind</span> template for your{' '}
        <span className='text-gray-600'>next.js</span> project
      </h1>
      <p className='text-2xl'>with configuration</p>
      <p className='text-4xl'>ready to go!</p>
    </div>
  )
}

export default Home
