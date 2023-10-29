const PlayerTwo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYERTWO':
      return [...state, action.payload];
    case 'SHOW_MATCHDATA':
      return action.payload;
    default:
      return state;
  }
}





export default PlayerTwo;
