import React from "react"
import { useDispatch } from "react-redux";


function GameSetUp() {

const dispatch = useDispatch()



  return (

<form onSubmit={handleSubmit}>
<h2>Enter Match Details</h2>

<input name="name" placeholder="Enter Here" type="text" value={newComments} onChange={event => setNewComments(event.target.value)} />

<button type='submit'> Submit</button>

</form>

    )
}




export default GameSetUp;
