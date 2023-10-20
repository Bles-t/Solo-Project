

const MatchTitle = (state = null, action) => {
  if (action.type === 'ADD_MATCHTITLE') {
    console.log(`Your match title is ${action.payload}`);
    return action.payload;
  }
  return state;
};

export default MatchTitle;
