const MatchTitle = (state = [], action) => {
  if (action.type === 'ADD_MATCHTITLE') {
    console.log(`Your game was ${action.payload}`);

    return action.payload
  }
  return state
}

export default MatchTitle;
