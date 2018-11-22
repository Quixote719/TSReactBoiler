import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import { PlayGround } from "./components/PlayGround"; 

ReactDOM.render(
	<div>
		<Hello compiler="TypeScript1" framework="React1" />
		<PlayGround compiler="TypeScript2" framework="React2" />
	</div>,
    document.getElementById("example")
);