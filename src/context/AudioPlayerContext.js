// AudioPlayerContext.js
import React, { createContext, useContext, useReducer } from 'react';
import { audioPlayerReducer } from '../components/audioPlayerReducer';

// Define the initial state of the audio player
const initialState = {
  isPlaying: false,
  currentSong: null,
};

// Create the context
const AudioPlayerContext = createContext(initialState);

// Create a custom provider for the context
const AudioPlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(audioPlayerReducer, initialState);

  return (
    <AudioPlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

// Create a custom hook to access the context
const useAudioPlayer = () => {
    const context = useContext(AudioPlayerContext);
    if (!context) {
        throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
    }
    return context;
};

export { AudioPlayerProvider, useAudioPlayer };
