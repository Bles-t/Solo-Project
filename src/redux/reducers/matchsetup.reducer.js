const matchSetup = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MATCH_DETAILS':
      return action.payload;
    case 'REMOVED_GAME_FROM_LIST':
      if (typeof action.payload === 'undefined') {
        return state;
      }
    case 'INCREMENT_P1_WIN_COUNT':
      return {
        ...state,
        p1wincount: state.p1wincount,
      };
    case 'SHOW_MATCH_DEATAILS':
      return action.payload;
    default:
      return state;
  }
};


export default matchSetup;
