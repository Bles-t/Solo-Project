const PlayerTwo = (state = [], action) => {
  if (action.type === 'ADD_PLAYERTWO') {
    console.log(`The element was ${action.payload}`);

    return [action.payload]
  }
  return state
}

export default PlayerTwo;
