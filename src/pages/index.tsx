import React from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const Home: NextPageWithLayout = () => {
  return (
    <MainLayout>
      <div></div>
    </MainLayout>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
