import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreSports from '../../components/ExploreSports/ExploreSports'
import ExplorePlayers from '../../components/ExplorePlayers/ExplorePlayers'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <ExploreSports />
      <ExplorePlayers />
    </div>
  )
}

export default Home
