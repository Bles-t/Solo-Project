const PlayerOne = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYERONE':
      return [...state, action.payload];
    case 'SHOW_MATCHDATA':
      return action.payload;
    default:
      return state;
  }
}




export default PlayerOne;
