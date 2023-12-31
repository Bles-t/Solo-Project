import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import PlayerOne from './player1.reducer';
import PlayerTwo from './player2.reducer';
import GameList from './gameList.reducer';
import MatchTitle from './matchTitle.reducer';
import PlayerOneWins from './PlayersOneWins.reducer';
import PlayerTwoWins from './PlayersTwoWins.reducers';
import matchSetup from './matchsetup.reducer';
import storeNewMatchId from './storeNewMatchId.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  PlayerOne,
  PlayerTwo,
  GameList,
  MatchTitle,
  PlayerOneWins,
  PlayerTwoWins,
  matchSetup,
  storeNewMatchId,

});

export default rootReducer;
