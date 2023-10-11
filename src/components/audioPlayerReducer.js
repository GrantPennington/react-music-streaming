// audioPlayerReducer.js
export const audioPlayerReducer = (state, action) => {
    switch (action.type) {
      case 'PLAY':
        return { ...state, isPlaying: true };
      case 'PAUSE':
        return { ...state, isPlaying: false };
      case 'SET_SONG':
        return { ...state, currentSong: action.payload };
      default:
        return state;
    }
};
  