import React from 'react';
import ColorfulText from '../../ColorfulText';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">


<br />
<br />
<br />
      <br />
      <p><ColorfulText   text={"Info Page"}   ></ColorfulText></p>
<p>
<ul className='font'  >
  <p>  <ColorfulText text={" Technologies Used: "}></ColorfulText>   </p>
  <li>
 <ColorfulText text={"React"}></ColorfulText>
  <li>
  <ColorfulText text={"  Redux"}></ColorfulText>
  </li>
  <li>
  <ColorfulText text={"    Node.JS"}></ColorfulText>
  </li>
  <li>
  <ColorfulText text={" Express"}></ColorfulText>
  </li>
  <li>
  <ColorfulText text={"    Axios"}></ColorfulText>
  </li>
  <li>
  <ColorfulText text={"    Javascript"}></ColorfulText>
  </li>
  <li>
  <ColorfulText text={"         Bootstrap"}></ColorfulText>
  </li>
  <li>

  </li>
  </li>
</ul>
  <ColorfulText   text={"React ,Redux ,Node.Js, Express ,Axios ,Javascript  and Bootstrap "}   ></ColorfulText>
   </p>

    </div>
  );
}

export default InfoPage;
