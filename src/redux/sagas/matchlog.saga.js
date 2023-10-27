import axios from 'axios';
import { all, put, takeEvery } from 'redux-saga/effects';


function* newMatchLog(action) {
  try {
    // const logData = { winner: action.payload };
    // // const logMatch = {
    // //   winner: winner,
    // // }
    const { playerOne, playerTwo, gameTitle, userId } = action.payload;
    const logData = {
      winner: playerOne,
      loser: playerTwo,
      gametitle: gameTitle,
      date: new Date(),
      userId
    }
    yield axios.post('/matches', logData);
    // yield put({ type: 'GET_GAME', win: newmatchlog });
    console.log('Game title successfully added to the database.');
  } catch (error) {
    console.log('error posting an gametitle', error);
  }
}



function* newMatchLog2(action) {
  try {
    // const logData = { winner: action.payload };
    // // const logMatch = {
    // //   winner: winner,
    // // }
    const { playerOne, playerTwo, gameTitle, userId } = action.payload;
    const logData = {
      winner: playerTwo,
      loser: playerOne,
      gametitle: gameTitle,
      date: new Date(),
      userId
    }
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
    takeEvery('WINBUTTON', newMatchLog2),

  ])
}

export default matchLogSaga;
