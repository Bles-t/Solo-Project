const MatchTitle = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MATCHTITLE':
      return [...state, action.payload];
    case 'SHOW_MATCHDATA':
      return action.payload;
    default:
      return state;
  }
}

export default MatchTitle;
