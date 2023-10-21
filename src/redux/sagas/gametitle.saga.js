import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


//adds gametitle to DB then fetches upated list of gametitles
function* addGameTitle(action) {
  try {
    yield axios.post('/gametitle/add', action.payload);
    yield put({ type: '' });
  } catch (error) {
    console.log('error posting an gametitle', error);
  }
}




function* gametitlesaga() { //also known as watcherSaga
  yield all([
    takeEvery('ADD_GAME', addGameTitle)
  ])
}
export default gametitlesaga;
