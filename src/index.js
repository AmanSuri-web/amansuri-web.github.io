import 'core-js/actual';
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App.js';
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';

ReactDOM.render(
				<>
				<BrowserRouter basename="/">
				
					<App/>
					
				</BrowserRouter>
				</>, 
	document.getElementById("root") ); // this is always fixed and it points to the index.html file


