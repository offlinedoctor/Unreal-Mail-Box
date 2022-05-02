//import "antd/dist/antd.css";
import React from 'react';
import SubmitText from './SubmitText.js';
import SideBar from './SideBar.js';
import EachChatBox from './EachChatBox.js';
import StyleCSS from './StyleCSS.css';
import {Button} from 'antd';
import {Input} from 'antd';
const  {TextArea} = Input;


var ArrayList = 
{
	"List":
	[
		{
			username: "hello1",
			chat: "hello1",
			timestamp: "hello1"
		},
		{
			username: "hello232",
			chat: "hello2",
			timestamp: "hello2"
		}
	]
};

window.ue.interface.UpdateArrayList = function(JSON_PayLoad)
{
	ArrayList = JSON_PayLoad;
	console.log(ArrayList);
	window.AppComponent.UpdateStateArrayList();
}

class App extends React.Component
{
	constructor()
	{
		super();
		
		this.state = 
		{	
			StateArrayList: ArrayList,
		}
	
		window.AppComponent = this;
		this.UpdateStateArrayList = this.UpdateStateArrayList.bind(this);
	}
	
	UpdateStateArrayList()
	{
		this.setState({StateArrayList: ArrayList});
		console.log(this.StateArrayList);
	}
	
	componentDidMount()
	{
		var objDiv = document.getElementById("customSlider");
		objDiv.scrollTop = objDiv.scrollHeight;
	}
	
	render()
	{
		return(
			<div style={{display: "flex", flexDirection: "row", height: "100%", width: "100%", padding: "25px", border: "25px solid rgba(1,1,1,0.5)"}}>
				<div style={{marginRight: "20px"}}>
					<SideBar/>
				</div>
				<div style={{display: "flex", flexDirection: "column", boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.2)", width: "100%", backgroundColor: "rgba(238,238,238,0.95)", borderTopLeftRadius: "25px", borderTopRightRadius: "25px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", overflow: "hidden"}}>
					<div  id="customSlider" style={{overflowY: "auto", overflowX: "hidden", height: "100%"}}>
					{
						this.state.StateArrayList.List.map(eachIteration =>
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
