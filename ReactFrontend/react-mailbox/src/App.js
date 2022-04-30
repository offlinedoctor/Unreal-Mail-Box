//import "antd/dist/antd.css";
import React from 'react';
import SubmitText from './SubmitText.js';
import SideBar from './SideBar.js';
import EachChatBox from './EachChatBox.js';
import {Button} from 'antd';
import {Input} from 'antd';
const  {TextArea} = Input;

var ArrayList = 
[
	{
		username: "hello",
		chat: "hello",
		timestamp: "hello"
	},
	{
		username: "hello",
		chat: "hello",
		timestamp: "hello"
	}
];

window.ue.interface.UpdateArrayList = function(JSON_PayLoad)
{
	console.log(JSON_PayLoad);
	ArrayList = JSON_PayLoad;
}

class App extends React.Component
{
	render()
	{
		return(
			<div style={{display: "flex", flexDirection: "row"}}>
				<div style={{background: "#9E9E9E"}}>
					<SideBar/>
				</div>
				<div style={{display: "flex", flexDirection: "column", boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.2)"}}>
					<div style={{height: "500px", overflowY: "auto", overflowX: "hidden"}}>
					{
						ArrayList.map(eachIteration =>
							<EachChatBox username={eachIteration.username} chat={eachIteration.chat} timestamp = {eachIteration.timestamp}/>
						)
					}
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
