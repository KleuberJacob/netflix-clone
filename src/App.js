import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import ListMovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [headerBlack, setHeaderBlack] = useState(false);

  useEffect(() => {
    const loadList = async () => {
      const list = await Tmdb.getHomeList()
      setDataMovies(list)
      
      const originals = list.filter(item => item.slug === "originals")
      const randomChoose = Math.floor(Math.random() * (originals[0].items.data.results.length - 1))
      const choose = originals[0].items.data.results[randomChoose]
      const dataFeaturedMovie = await Tmdb.getDataMovieInfo(choose.id, 'tv')
      setFeatureData(dataFeaturedMovie)
    } 
    loadList()    
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if( window.scrollY > 10){
        setHeaderBlack(true)
      }else {
        setHeaderBlack(false)
      }
    }

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return (
    <div className='page'>
      <Header headerBlack={headerBlack}/>
      {featureData && 
        <FeaturedMovie item={featureData}/>
      }
      <section className='lists'>
        {dataMovies.map((item, key) => (
          <ListMovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <Footer/>
      {dataMovies.length <= 0 &&
        <div className='loading'>
          <img src='https://i.gifer.com/VAyR.gif' alt='Carregando...'></img>
        </div>
      }
    </div>
  )
};

export default App;