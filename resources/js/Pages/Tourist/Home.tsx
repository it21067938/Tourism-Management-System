import Carousel from '@/Components/Carousel/Carousel'
import Hero from '@/Components/Hero/Hero'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React from 'react'

function Home() {
  return (
   <AuthenticatedLayout>
      <Carousel />
      <Hero/>
    </AuthenticatedLayout>
  
   
  )
}

export default Home