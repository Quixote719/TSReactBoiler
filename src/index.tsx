import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import { PlayGround } from "./components/PlayGround"; 

ReactDOM.render(
	<div>
		<Hello compiler="TS001" framework="R001" />
		<PlayGround compiler="TS002" framework="R002" />
	</div>,
    document.getElementById("example")
);