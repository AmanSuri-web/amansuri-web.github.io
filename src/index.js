import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App.js';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
				<>
				<BrowserRouter>
				<App/>
				</BrowserRouter>
				</>, 
	document.getElementById("root") ); // this is always fixed and it points to the index.html file


