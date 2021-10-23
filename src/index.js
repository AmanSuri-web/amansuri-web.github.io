import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App.js';
import {BrowserRouter} from "react-router-dom";
import { hydrate, render } from "react-dom";

const APP = (<>
				<BrowserRouter>
				<App/>
				</BrowserRouter>
				</>);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}

