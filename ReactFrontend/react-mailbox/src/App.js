//import "antd/dist/antd.css";
import React from 'react';
import Navbar from './Navbar.js';
import EachChatBox from './EachChatBox.js';
import {Button} from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;


class App extends React.Component
{
	render()
	{
		return(
			<div style={{display: "flex", flexDirection: "row"}}>
				<EachChatBox/>
			</div>
		);
	}
}

export default App;
