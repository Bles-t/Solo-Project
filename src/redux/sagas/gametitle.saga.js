import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


//adds gametitle to DB then fetches upated list of gametitles
function* addGameTitle(action) {
  try {
    const newGame = action.payload.game
    yield axios.post('/gametitle', { game: newGame });
    // yield put({ type:'ADD_GAME'});
    console.log('Game title successfully added to the database.');
  } catch (error) {
    console.log('error posting an gametitle', error);
  }
}




function* gametitleSaga() { //also known as watcherSaga
  yield all([
    takeEvery('ADD_GAME', addGameTitle)
  ])
}
export default gametitleSaga;
