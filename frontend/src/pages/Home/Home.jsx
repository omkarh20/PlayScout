import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreSports from '../../components/ExploreSports/ExploreSports'
import ExploreVenues from '../../components/ExploreVenues/ExploreVenues'
import ExplorePlayers from '../../components/ExplorePlayers/ExplorePlayers'
import ExploreNews from '../../components/ExploreNews/ExploreNews'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <ExploreSports />
      <ExploreVenues />
      <ExplorePlayers />
      <ExploreNews />
    </div>
  )
}

export default Home
