function* newMatchLog(action) {
  try {
    const newmatchlog = action.payload
    yield axios.post('/matches', newmatchlog);
    yield put({ type: 'GET_GAME', game: newGame });
    console.log('Game title successfully added to the database.');
  } catch (error) {
    console.log('error posting an gametitle', error);
  }
}





function* matchesSaga() { //also known as watcherSaga
  yield all([
    takeEvery('PLAYERONEWIN', newMatchLog),

  ])
}

export default matchesSaga;
