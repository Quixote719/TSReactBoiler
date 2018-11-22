import * as React from "react";
import {playGround} from './constant' 

export interface HelloProps { compiler: string; framework: string; }

export const PlayGround = (props: HelloProps) => {
	console.log(JSON.stringify(playGround().Color))
	return(
		<h1>Hello from {props.compiler} & {props.framework}</h1>
	)
};