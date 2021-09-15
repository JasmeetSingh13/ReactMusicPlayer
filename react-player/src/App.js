import React,{useState} from "react";


// import styles
import "./styles/app.scss";
//Adding Components

import Player  from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav"
// import utils

import data from "./util";



function App() {


 
  const [songs,setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const [libraryStatus,setLibraryStatus] = useState(false);

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
     <Nav libraryStatus ={libraryStatus} setLibraryStatus={setLibraryStatus}/>

     <Song currentSong={currentSong}/>
     <Player 
  
    
   
     isPlaying={isPlaying} 
     setIsPlaying={setIsPlaying} 
     currentSong={currentSong}
     songs = {songs}
     setCurrentSong ={setCurrentSong}
     />
    <Library 
   
    songs={songs}
     setCurrentSong={setCurrentSong}
     isPlaying ={isPlaying}
     setSongs= {setSongs}
     currentSong={currentSong}
     libraryStatus={libraryStatus}
     />

    </div>
  );
}

export default App;
