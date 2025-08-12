import React from 'react'
import BestSeller from '../components/BestSeller'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'

const Home = () => {
  return (
    <div className="bg-accent text-dark font-body">
      <Hero className="bg-primary text-white" />
      <LatestCollection className="bg-white" />
      <BestSeller className="bg-secondary text-dark" />
    </div>
  )
}

export default Home
