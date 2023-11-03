const matchSetup = (state = {  }, action) => {
  switch (action.type) {
    case 'SET_MATCH_DETAILS':
      return action.payload
    // case 'STORE_NEW_MATCH_ID':
    //   return { ...state, ...action.payload }

    default:
      return state;
  }
};


export default matchSetup;
