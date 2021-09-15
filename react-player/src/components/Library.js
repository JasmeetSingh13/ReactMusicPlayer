import React from 'react';
import LibrarySong from './LibrarySong';
const Library = ({songs,setCurrentSong, audioRef,isPlaying,setSongs,currentSong,libraryStatus})=>{
    return(
            <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
                <h2>Library</h2>
                <div className="library-songs">
                   {songs.map((song)=> (
                   <LibrarySong 
                   audioRef = {audioRef}
                   key={song.id} 
  
                   songs={songs} 
                   setCurrentSong={setCurrentSong}
                    song ={song}
                    isPlaying={isPlaying}
                    setSongs={setSongs}
                    currentSong = {currentSong}
                    />))}
                </div>
            </div>

    )
}

export default Library;