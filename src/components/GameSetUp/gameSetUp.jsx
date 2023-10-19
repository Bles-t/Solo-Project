import React from "react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function GameSetUp() {

  const dispatch = useDispatch() 

  const [newPlayerOne, setNewPlayerOne] = useState('')

  const [newPlayerTwo, setNewPlayerTwo] = useState('')

  const [newGame, setNewGame] = useState('')

  const [newMatchTitle, setNewMatchTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch({
      type: 'ADD_PLAYERONE',
      payload: newPlayerOne,
    })
    dispatch({
      type: 'ADD_PLAYERTWO',
      payload: newPlayerTwo,
    })
    dispatch({
      type: 'ADD_GAME',
      payload: newGame,
    })
    dispatch({
      type: 'ADD_MATCHTITLE',
      payload: newMatchTitle,
    })

    setNewPlayerOne('')
    setNewPlayerTwo('')
    setNewGame('')
    setNewMatchTitle('')
    history.push('/ActivityPage')
  }

  const history = useHistory()
  return (

    <form  onSubmit={handleSubmit}   >
      <h2>Enter Match Details</h2>

      <input name="name" placeholder="Player 1" type="text" value={newPlayerOne} onChange={event => setNewPlayerOne(event.target.value)} />

      <input name="name" placeholder="Player 2" type="text" value={newPlayerTwo} onChange={event => setNewPlayerTwo(event.target.value)} />

      <input name="name" placeholder="Game Title" type="text" value={newGame} onChange={event => setNewGame(event.target.value)} />

      <input name="name" placeholder="Match Title" type="text" value={newMatchTitle} onChange={event => setNewMatchTitle(event.target.value)} />

      <button type='submit'>Submit</button>

    </form>

  )
}




export default GameSetUp;
