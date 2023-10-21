const GameList = (state = [], action) => {
  if (action.type === 'ADD_GAME') {
    console.log(`Your game was ${action.payload}`);

    return [...state, action.payload]
  }
  return state
}

export default GameList;
