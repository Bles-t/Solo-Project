
const GameList = (state = [], action) => {
  switch (action.type) {
    case 'SET_GAME':
      return [...state, action.payload];
    case 'LIST_GAMES':
    default:
      return state;
  }
}
export default GameList;
