import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb'

const App = () => {
  const [load, setLoad] = useState([])

  useEffect(() => {
    const load = async () => {
      const list = await Tmdb.get1()
      console.log(list)
    }

    load()
    
    /* const loadAll = async () => {
      const list = await Tmdb.getHomeList()
      console.log(await Tmdb.getHomeList())
    }
    loadAll() */
  }, []);

  return (
    <div>

    </div>
  )
}

export default App;