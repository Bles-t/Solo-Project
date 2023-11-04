const storeNewMatchId = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_NEW_MATCH_ID':
      return {
        ...state,
        newMatchId: action.payload,
      };
    default:
      return state;
  }
}

export default storeNewMatchId;
