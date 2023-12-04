import './App.css';
import React, { useEffect, useState } from 'react';
import NavMenu from './components/navMenu';
import SearchBlock from './components/searchBlock';
import SideBar from './components/sideBar';
import AudioPlayer from './components/AudioPlayer';
import Filter from './components/filter';
import TrackList from './components/trackList';


function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(!loader);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <div>
          <main className="main">
            <NavMenu />
            <div className="main__centerblock centerblock">
              <SearchBlock />
              <h2 className="centerblock__h2">Треки</h2>
              <Filter />
              <TrackList 
              loader={loader}
              />
            </div>
            <SideBar 
            loader={loader}
            />
          </main>
          <AudioPlayer
          loader={loader}
          />
          <footer className="footer" />
        </div>
      </div>
    </div>
  );
}

export default App;
