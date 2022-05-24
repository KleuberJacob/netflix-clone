import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import ListMovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

const App = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [headerBlack, setHeaderBlack] = useState(true);


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
    </div>
  )
};

export default App;