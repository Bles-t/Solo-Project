import axios from 'axios';
import { all, put, takeEvery } from 'redux-saga/effects';

// orginal function
// function* newMatchLog(action) {
//   try {

//     const { playerOne, playerTwo, PlayerOneWinButton, gameTitle, matchTitle, userId } = action.payload;
//     const logData = {
//       winner: playerOne,
//       loser: playerTwo,
//       p1wincount: PlayerOneWinButton,
//       matchtitle: matchTitle,
//       gametitle: gameTitle,
//       date: new Date(),
//       userId
//     }
//     yield axios.post('/matches', logData);
//     // yield put({ type: 'GET_GAME', win: newmatchlog });
//     console.log('player one match log successfully added to the database.', logData);
//   } catch (error) {
//     console.log('error posting an gametitle', error);
//   }
// }


function* newMatchLog(action) {
  try {
    const { winner, loser, gametitle, matchtitle, p1wincount, userId } = action.payload;
    const logData = {
      winner,
      loser,
      p1wincount,
      gametitle,
      matchtitle,
      date: new Date(),
      userId,
    };



    yield axios.post('/matches', logData);
    console.log('Player one match log successfully added to the database.', logData);
  } catch (error) {
    console.log('Error posting match data', error);
  }
}


// 2nd match log in saga is for loggin the data of the 2nd user

function* newMatchLog2(action) {
  try {
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
    console.log('player two match log successfully added to the database. ', logData);
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
