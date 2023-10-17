import React from "react"
import { useState } from "react";
import { useDispatch } from "react-redux";


function GameSetUp() {

  const dispatch = useDispatch()

  const [newPlayerOne, setNewPlayerOne] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch({
      type: 'ADD_PLAYERONE',
      payload: newPlayerOne
    })
    setNewPlayerOne('')
  }


  return (

    <form onSubmit={handleSubmit}>
      <h2>Enter Match Details</h2>

      <input name="name" placeholder="Enter Here" type="text" value={newPlayerOne} onChange={event => setNewPlayerOne(event.target.value)} />

      <button type='submit'> Submit</button>

    </form>

  )
}




export default GameSetUp;
