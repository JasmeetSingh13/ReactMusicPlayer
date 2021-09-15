import React,{useRef,useState}     from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft,faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong,isPlaying, setIsPlaying,songs,setCurrentSong})=>{
    //Refs
    const audioRef = useRef(null);
// eventHandlers
    const playSongHandler =() =>{

        if(isPlaying){
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
        }
        else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }

    };

    const timeUpdateHandler = (e)=>{
            const current = e.target.currentTime;
            const duration =e.target.duration || 0;
            //Calculate Percentage
            const roundedCurrent = Math.round(current);
            const roundedDuration = Math.round(duration);
            const animatedPercentage =  Math.round((roundedCurrent/roundedDuration) * 100);
            // console.log(animatedPercentage)

           setSongInfo({...songInfo, currentTime: current, duration,animatePercentage:animatedPercentage} )
    

    };
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    // check if song is playing if playing ,play other songs on click
    const autoPlayHandler =()=>{
        if(isPlaying){
            audioRef.current.play();
        }
    }

    const skipTrackHandler = (direction)=>{
        let currentIndex =  songs.findIndex((song)=> song.id === currentSong.id);
        if(direction === 'skip-forward'){
            setCurrentSong(songs[(currentIndex + 1 )% songs.length]);
        }
        if(direction === 'skip-back'){
            if((currentIndex - 1) % songs.length === -1){
                setCurrentSong(songs[songs.length - 1])
            return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
    }

    const songEndHandler = async ()=>{
        let currentIndex =  songs.findIndex((song)=> song.id === currentSong.id);

        await setCurrentSong(songs[(currentIndex + 1 )% songs.length]);
        if(isPlaying) audioRef.current.play();
    
    }

    const getTime = (time)=>{

        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );

    }
    //State

    const [songInfo, setSongInfo] = useState({
        currentTime : 0,
        duration : 0,
        animatePercentage:0,
    })

    // Add the styles to the input range
    const trackAnim = {
        transform :`translateX(${songInfo.animatePercentage}%)`
    }
return(
    <div className="player">

        <div className="time-control">

            <p>{getTime(songInfo.currentTime)}</p>

            <div style ={ {background : `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">

        
            <input
             min ={0}
            max = {songInfo.duration}
            value = {songInfo.currentTime}
            onChange= {dragHandler}
            type="range" />
            <div style ={trackAnim} className="animate-track">


            </div>
</div>
            <p>{getTime(songInfo.duration || 0)}</p>

        </div>
<div className="play-control">

    
    <FontAwesomeIcon 
    className="skip-back"  
    size="2x" 
    icon = {faAngleLeft}
    onClick={()=>skipTrackHandler('skip-back')}
    
    />
    <FontAwesomeIcon  onClick={playSongHandler} 
    className="play" 
    size="2x" 
     icon = {isPlaying ? faPause : faPlay}/>
    <FontAwesomeIcon 
    className="skip-forward"  
    size="2x" 
    icon = {faAngleRight}
    onClick={()=>skipTrackHandler('skip-forward')}
     />
</div>
        <audio 
        onLoadedData ={autoPlayHandler}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata = {timeUpdateHandler}
         ref={audioRef} 
         src={currentSong.audio}
         onEnded = {songEndHandler}
         
         >

         </audio>
    </div>


)

}

export default Player;