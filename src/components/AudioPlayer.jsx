import React, { useRef, useState, useEffect } from 'react';

// Enhanced AudioPlayer component
const AudioPlayer = ({ src_url }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // Update current time
  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const updateAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', updateAudioTime);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', updateAudioTime);
    };
  }, []);

  // Seek function for the audio
  const onSeek = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
  };

  // Format time from seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className='flex flex-row gap-5 items-center justify-center w-full px-4 bg-dark-green rounded-lg'>
      <audio ref={audioRef} src={src_url} preload="metadata" />
      <div className='controls flex-shrink-0'>
        <button onClick={togglePlayPause} className='text-white focus:outline-none transition duration-300 ease-in-out rounded-full'>
          <i className={`fi fi-rr-${isPlaying ? 'pause' : 'play'}-circle text-3xl`} ></i>
        </button>
      </div>
      <input type="range" value={duration ? (currentTime / duration) * 100 : 0} onChange={onSeek} className="w-3/5 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
      <p className='text-white flex-shrink-0'>{formatTime(currentTime)} / {formatTime(duration)}</p>
    </div>

  );
};

export default AudioPlayer;
