const GameList = (state = null, action) => {
  if (action.type === 'ADD_GAME') {
    console.log(`Your game was ${action.payload}`);

    return action.payload
  }
  return state
}

export default GameList;
