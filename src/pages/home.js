import React from 'react';
import { Button } from 'react-bootstrap';
import {getListings} from '../components/getListings.js'

function Home() {
  return (
    <>
    <center>
    <h2>MagicEden Snapshot Tool</h2>
    <p>
      colley#8131 // @0xColley
    </p>
    <label>
    Collection ID (ex: elixir_ovols):   &nbsp;&nbsp;
    </label>
    <p>Output will be sent to the developer console in JSON format, open Inspect Element and you may copy from there.</p>
    <input type="text" name="collection_id" id="collection_input"/>
    <Button onClick={() => getListings(document.getElementById("collection_input").value)}>Click to Snapshot</Button>
    
    </center>
    </>
  );
}


export default Home;