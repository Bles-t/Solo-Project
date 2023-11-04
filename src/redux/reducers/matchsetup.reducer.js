// const matchSetup = (state = { }, action) => {
//   switch (action.type) {
//     case 'SET_MATCH_DETAILS':
//       return action.payload
//     // case 'STORE_NEW_MATCH_ID':
//     //   return { ...state, ...action.payload }

//     default:
//       return state;
//   }
// };


// export const incrementP1WinCount = () => ({
//   type: 'INCREMENT_P1_WIN_COUNT',
// });




const matchSetup = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MATCH_DETAILS':
      return action.payload ;
    case 'INCREMENT_P1_WIN_COUNT':
      return  state.p1wincount += 1 ;
    default:
      return state;
  }
};




export default matchSetup;
