const GameList = (state = [], action) => {
  if (action.type === 'ADD_GAME') {
    console.log(`Your game was ${action.payload}`);

    return [action.payload]
  }
  return state
}

export default GameList;
