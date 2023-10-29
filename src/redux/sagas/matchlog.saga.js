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
    console.log('player one match log successfully added to the database.', logData);
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
    console.log('player two match log successfully added to the database. ' , logData);
  } catch (error) {
    console.log('error posting an gametitle', error);
  }
}



// shows all matchdata  in database
function* fetchMatchData() {
  try {
    const allMatchData = yield axios.get('/matches')
    // const gameTitle = allGames.data;
    yield put({ type: 'SHOW_MATCHDATA', payload: allMatchData.data })
    // yield put({ type:'ADD_GAME'});
    console.log('Match data fetched from database.');
  } catch (error) {
    console.log('error listing all match data', error);
  }
}












function* matchLogSaga() { //also known as watcherSaga
  yield all([
    takeEvery('PLAYERONEWIN', newMatchLog),
    takeEvery('WINBUTTON', newMatchLog2),
    takeEvery('DISPLAY_MATCHDATA', fetchMatchData),

  ])
}

export default matchLogSaga;
