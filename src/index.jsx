import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx';
import $ from 'jquery';
import '../assets/spinner.css';

import lochistoryjson from "file!./data/LocationHistory.json"

 $.ajax({
      url: lochistoryjson,
      dataType: 'json',
      cache: true,
      success: function(lochistory) {
          console.log(lochistory);

        render(<App lochistory={lochistory.locations}/>, document.querySelector("#app"));
      }
 });


