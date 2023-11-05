// const PlayerOneWins = (state = 0, action) => {
//   if (action.type === 'PLAYERONEWIN') {
//     console.log(`The element was ${action.payload}`);

//     return state + 1
//   }
//   return state
// }

const PlayerOneWins = (state = 0, action) => {
  switch (action.type) {
    case 'PLAYERONEWIN':
      return [...state, action.payload];
    // case 'SHOW_MATCHDATA':
      return action.payload;
    default:
      return state;
  }
}




export default PlayerOneWins;
