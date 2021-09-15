import React from 'react';


const LibrarySong = ({song,songs,setCurrentSong,audioRef,isPlaying, setSongs,currentSong})=>{
    const songSelectHandler = ()=>{
        
          
         setCurrentSong(song);
         //Add active song

  

         //check if the song is playing
        //  if(isPlaying){
        //      const playPromise =    audioRef.current.play();
        //      if(playPromise !== undefined){
        //          playPromise.then((audio)=>{
        //              audioRef.current.play()
        //          });
        //      }
        //  }
      

     
    }
return(
    <div onClick={songSelectHandler} className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}>

       <img src={song.cover} alt= {song.name}/>
       <div className="song-description">
       <h3>{song.name}</h3>
        <h4>{song.artist}</h4>

       </div>
       

    </div>


)

}

export default LibrarySong;