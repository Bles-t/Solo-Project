const GameList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GAME':
      console.log('ADD_GAME action payload:', action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
}
export default GameList;
