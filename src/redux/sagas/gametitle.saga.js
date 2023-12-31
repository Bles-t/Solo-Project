import axios from "axios";
import { all, put, takeEvery } from 'redux-saga/effects';


//adds gametitle to DB then fetches upated list of gametitles
function* addGameTitle(action) {
  try {
    const newGame = action.payload.game
    yield axios.post('/gametitle', { game: newGame });
    // yield put({ type: 'LIST_GAMES', game: newGame });
    console.log('Game title successfully added to the database.');
  } catch (error) {
    console.log('error posting an gametitle', error);
  }
}
// shows all games in database
function* fetchGameTitle() {
  try {
    const allGames = yield axios.get('/gametitle')
    // const gameTitle = allGames.data;
    yield put({ type: 'LIST_GAMES', payload: allGames.data })
    // yield put({ type:'ADD_GAME'});
    console.log('Game title successfully added to the database.');
  } catch (error) {
    console.log('error listing an gametitle', error);
  }
}


function* gametitleSaga() { //also known as watcherSaga
  yield all([
    takeEvery('SET_GAME', addGameTitle),
    takeEvery('ALL_GAMES', fetchGameTitle)
  ])
}
export default gametitleSaga;
