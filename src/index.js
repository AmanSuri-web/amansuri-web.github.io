import 'core-js/actual';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App.js';
import {HashRouter} from "react-router-dom";

const Artists = lazy(() => import("./App.js"))
ReactDOM.render(
				<>
				<HashRouter>
					<Suspense fallback={<h1>Still Loading…</h1>}>
						<Artists/>
					</Suspense>
				</HashRouter>
				</>, 
	document.getElementById("root") ); // this is always fixed and it points to the index.html file


