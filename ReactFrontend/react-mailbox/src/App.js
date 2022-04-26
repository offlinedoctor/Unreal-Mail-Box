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
				<div>
					<SideBar/>
				</div>
				<div style={{display: "flex", flexDirection: "column"}}>
					<div style={{height: "500px", overflowY: "auto", overflowX: "hidden"}}>
						<EachChatBox/>
						<EachChatBox/>
						<EachChatBox/>
						<EachChatBox/>
						<EachChatBox/>
						<EachChatBox/>
						<EachChatBox/>
						<EachChatBox/>
						<EachChatBox/>
						<EachChatBox/>
					</div>
					<div>
						<SubmitText/>
					</div>
				</div>
			</div>

		);
	}
}

export default App;
