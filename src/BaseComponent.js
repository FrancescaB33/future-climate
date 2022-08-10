import * as React from 'react';
import GraphsComponent from "./GraphsComponent";
import TableComponent from "./TableComponent";
import Bar from "./Bar";
import axios from 'axios';
const { initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

initializeApp({
  apiKey: "AIzaSyBOf4MGrNf02Mv5Wl0PmFHbpLVWGrYqP9s",
  authDomain: "future-climate.firebaseapp.com",
  projectId: "future-climate",
  storageBucket: "future-climate.appspot.com",
  messagingSenderId: "68072956517",
  appId: "1:68072956517:web:6b20890a05ead4e0291c8c",
});

const BaseComponent = () => {
  const [assets, setAssets] = React.useState([]);
  let token = ''
  const auth = getAuth();
  let config = {}

    const login = async () => {
      await signInWithEmailAndPassword(
        auth,
        "francesca@futureclimate.org",
        "francescabonin"
      );
      token = await auth.currentUser.getIdToken();
      
  }

  const getData = async () => {
    await login().then(() => {
       axios.get(`https://api-futureclimate-test.lobelia.earth/api/web-v0/portfolio/6fa6d87b-0034-4164-ac09-b399d4a9503a/assets`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
      setAssets(response.data.results);
      })
      .catch((error) => {
      console.log(error);
    });
    })
}

React.useEffect(() => {
getData();
}, [])

    return (
<div class="container-fluid">
  <Bar />
  <br/>
  <br/>
  <div class="row row-eq-height">
    <div class="col-lg-10 col-md-12">
    <div class="col-lg-12">
    <p class="text-start mb-0 fs-5">Exposure risk by hazard for 2030, Business as usual</p>
    <p class="text-start">40 models, 25km spatial resolution, 587 numerical simulations, 6 climate variables</p>
    </div>

      <div class="col-lg-12">
       <GraphsComponent />
      </div>
      <br/>
      <br/>
      <br/>
      <div class="col-lg-12">
       <TableComponent assets={assets} />
      </div>
    </div>
    {/* Map */}
    <div class="col-lg-2 col-xs-12">
      MAP
      {/* <img class="img-responsive" alt="worldmap" src="/map.png" style={{ width: 'auto', height:"941px"}} /> */}
    </div>
  </div>
</div>
        )
}


export default BaseComponent;