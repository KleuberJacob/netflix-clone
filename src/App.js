import React, {useEffect} from 'react';
import './App.css';
import Tmdb from './Tmdb'

const App = () => {

  useEffect(() => {
    Tmdb.getHomeList()
  }, []);

  return (
    <div>

    </div>
  )
}

export default App;