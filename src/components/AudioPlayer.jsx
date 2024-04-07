import React, { useRef, useState } from 'react';

// AudioPlayer component
const AudioPlayer = ({src_url}) => {
 
  const audioRef = useRef(null);
 
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle play/pause
  const togglePlayPause = () => {
    
    if (!audioRef.current) return;

    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

   
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='flex items-center justify-center'>
      <audio ref={audioRef} src={src_url} />
      <button onClick={togglePlayPause} className='text-white text-center'>
        <i className={`fi fi-rr-${isPlaying ? 'pause-circle' : 'play-circle'} text-3xl`} ></i>

      </button>
      
      
    </div>
  );
};

export default AudioPlayer;
