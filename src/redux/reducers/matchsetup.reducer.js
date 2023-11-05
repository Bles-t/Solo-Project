const matchSetup = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MATCH_DETAILS':
      return action.payload;
    case 'INCREMENT_P1_WIN_COUNT':
      return {
        ...state,
        p1wincount: state.p1wincount,
      };
    default:
      return state;
  }
};


export default matchSetup;
