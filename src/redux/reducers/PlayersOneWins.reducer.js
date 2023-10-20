const PlayerOneWins = (state = 0, action) => {
  if (action.type === 'WINBUTTON') {
    console.log(`The element was ${action.payload}`);

    return state + 1
  }
  return state
}

export default PlayerOneWins;
