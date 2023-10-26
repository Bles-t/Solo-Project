const PlayerOne = (state = [], action) => {
  if (action.type === 'ADD_PLAYERONE') {
    console.log(`The element was ${action.payload}`);

    return action.payload
  }
  return state
}

export default PlayerOne;
