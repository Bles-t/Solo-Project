import axios from 'axios';
import { all, put, takeEvery, call } from 'redux-saga/effects';


function* newMatchLog(action) {
  try {
    const { matchTitle, playerOne, playerTwo, gamename, p1wincount, p2wincount, userId, matchId } = action.payload;
    const logData = {
      playerOne,
      playerTwo,
      p1wincount,
      p2wincount,
      matchTitle,
      date: new Date(),
      userId,
      gamename,
      matchId,


    };


    console.log("log data", logData);





    const postMAtch = yield axios.post('/matches', logData);

    // Dispatch an action to update the Redux state with the new id

    yield put({ type: 'STORE_NEW_MATCH_ID',
    payload: postMAtch.data.newMatchId });





    console.log('Pnw match  match log successfully added to the database.', logData);
    // place match id in store
  } catch (error) {
    console.log('Error posting match data', error);
  }
}


// 2nd match log in saga is for loggin the data of the 2nd user

function* newMatchLog2(action) {
  try {
    const { matchTitle, playerOne, playerTwo, gamename, p1wincount, p2wincount, userId } = action.payload;
    const logData = {
      playerOne,
      playerTwo,
      p1wincount,
      p2wincount,
      matchTitle,
      date: new Date(),
      userId,
      gamename


    };


    console.log("log data", logData);



    console.log('Player one match log successfully added to the database.', logData);
  } catch (error) {
    console.log('Error posting match data', error);
  }
}



// shows all matchdata  in database
function* fetchMatchData() {
  try {
    const query = yield axios.get('/matches')
    // const gameTitle = allGames.data;
    yield put({ type: 'FETCH_MATCH_DATA', payload: query.data })
    // yield put({ type:'ADD_GAME'});
    console.log('Match data fetched from database.');
  } catch (error) {
    console.log('error listing all match data', error);
  }
}












function* deleteGame(action) {
  try {
    yield axios.delete(`/matches/:id`);
    yield put({ type: 'DISPLAY_MATCHDATA' });
  } catch (error) {
    console.log('error transferring an animal', error);
  }
}

// //In your saga.js
// function* handleIncrementP1WinCount(action) {
//   try {
//     // You can add an API call here to update the server with the new value if needed.
//     // Increment p1wincount by 1
//     // Extract the matchId from the payload
//     const { matchId } = action.payload;

// console.log(action.payload);
//     const p1wincount = yield call(axios.put, `/matches/${matchId}`);


//     yield put({
//       type: 'SET_UPDATE_P1COUNT',
//       payload: {
//         ...action.payload,
//         p1wincount: p1wincount,
//       },
//     });
//   } catch (error) {
//     console.error('Error incrementing p1wincount:', error);
//   }
// }

function* handleIncrementP1WinCount(action) {
  try {
    const { matchId, p1wincount } = action.payload;
    // Make an axios.put request to update p1wincount
    console.log("  whats here", action.payload);
    // yield call(axios.put, `/matches/${matchId}`, { p1wincount: p1wincount });
    // console.log("Response", response);


    const matchCount = yield axios.put(`/matches/${matchId}`, { p1wincount: p1wincount })


    // Dispatch an action to update the Redux state with the new p1wincount
    yield put({
      type: 'INCREMENT_P1_WIN_COUNT',
      payload: matchCount.data.p1wincount
    });

  } catch (error) {
    console.error('Error incrementing p1wincount:', error);
  }
}

function* matchLogSaga() { //also known as watcherSaga
  yield all([
    // should i add the data to the data base on handle submit?
    takeEvery('SET_MATCH_DETAILS', newMatchLog),
    takeEvery('WINBUTTON', newMatchLog2),
    takeEvery('DISPLAY_MATCHDATA', fetchMatchData),
    takeEvery('DELETE_GAME', deleteGame),
    takeEvery('UPDATE_DATABASE', handleIncrementP1WinCount),


  ])
}

export default matchLogSaga;
