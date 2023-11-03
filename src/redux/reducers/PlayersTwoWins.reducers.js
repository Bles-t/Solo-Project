const PlayerTwoWins = (state = {}, action) => {
  switch (action.type) {
    case 'WINBUTTON':
      return action.payload;
    default:
      return state;
  }
};



export default PlayerTwoWins;
