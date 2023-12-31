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
    yield put({ type: 'SHOW_MATCH_DEATAILS', payload: query.data })
    // yield put({ type:'ADD_GAME'});
    console.log('Match data fetched from database.');
  } catch (error) {
    console.log('error listing all match data', error);
  }
}


function* deleteGame(action) {
  try {
    yield axios.delete(`/matches/${action.payload}`);

    yield put({ type: 'REMOVED_GAME_FROM_LIST' });
    yield put({ type: 'DISPLAY_MATCHDATA' });
  } catch (error) {
    console.log('error removing a game', error);
  }
}

function* handleIncrementP1WinCount(action) {
  try {
    const { matchId, p1wincount,p2wincount } = action.payload;
    // Make an axios.put request to update p1wincount
    console.log("  whats here", action.payload);
    


    const matchCount = yield axios.put(`/matches/${matchId}`, { p1wincount: p1wincount } ,{p2wincount:p2wincount} )


    // Dispatch an action to update the Redux state with the new p1wincount
    yield put({
      type: 'INCREMENT_P1_WIN_COUNT',
      payload: matchCount.data.p1wincount,
      payload: matchCount.data.p2wincount
    });
    // yield put({
    //   type: 'INCREMENT_P2_WIN_COUNT',
    //   payload: matchCount.data.p2wincount
    // });



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
