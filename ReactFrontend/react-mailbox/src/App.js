//import "antd/dist/antd.css";
import React from 'react';
import SubmitText from './SubmitText.js';
import SideBar from './SideBar.js';
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
				<div style={{paddingLeft: "150px"}}>
					<SideBar/>
				</div>
				<div style={{display: "flex", flexDirection: "column"}}>
					<div style={{height: "500px", overflowY: "auto", position: "fixed", overflowX: "hidden"}}>
						<EachChatBox/>
						<EachChatBox/>
						<EachChatBox/>
						<EachChatBox/>
					</div>
					<div style={{paddingTop: "550px"}}>
						<SubmitText/>
					</div>
				</div>
			</div>

		);
	}
}

export default App;
