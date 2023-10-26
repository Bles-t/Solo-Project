import axios from 'axios';
import { all, put, takeEvery } from 'redux-saga/effects';


function* newMatchLog(action) {
  try {
    const logData = { winner: action.payload };
    // const logMatch = {
    //   winner: winner,
    // }
    yield axios.post('/matches', logData);
    // yield put({ type: 'GET_GAME', win: newmatchlog });
    console.log('Game title successfully added to the database.');
  } catch (error) {
    console.log('error posting an gametitle', error);
  }
}





function* matchLogSaga() { //also known as watcherSaga
  yield all([
    takeEvery('PLAYERONEWIN', newMatchLog),

  ])
}

export default matchLogSaga;
