const PlayerOne = (state = null, action) => {
  switch (action.type) {
    case 'ADD_PLAYERONE':
      return action.payload;
    // console.log(`The element was ${action.payload}`)
  }
  return state
}

export default PlayerOne;


// const PlayerOne = (state = {}, action) => {
//   switch (action.type) {
//     case 'ADD_PLAYERONE':
//       return action.payload;
//     case 'ADD_PLAYERONE':
//       return {};
//     default:
//       return state;
//   }
// };
