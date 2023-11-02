const matchSetup = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MATCH_DETAILS':
      return action.payload;
    default:
      return state;
  }
};


export default matchSetup;
