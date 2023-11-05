import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MatchHistoryPage() {


  const matchdata = useSelector((store) => store.matchSetup);
console.log("Match data from store", matchdata);



  return (

    <div>
      <h1>Hi History</h1>

      <div>
        <h3>List of Games:  </h3>
        <ul>

        </ul>
      </div>
    </div>
  )
}
export default MatchHistoryPage;
