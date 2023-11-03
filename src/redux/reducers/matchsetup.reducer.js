const matchSetup = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MATCH_DETAILS':
      return action.payload;
      case 'LIST_DATA':
    default:
      return state;
  }
};


export default matchSetup;
