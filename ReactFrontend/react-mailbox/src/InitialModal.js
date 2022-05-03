//import "antd/dist/antd.css";
import React from 'react';
import { Modal, Button } from 'antd';
import { notification } from 'antd';
import icon_OW from "./icon_OW.png";
import icon_FFXIV from "./icon_FFXIV.png";
import { Input } from 'antd';

class InitialModal extends React.Component
{
	constructor()
	{
		super();
		
		this.state = 
		{
			showModal: true,
			iconSelected: "",
			username: "",
		}
		
		window.InitialModal = this;
		this.handleOk = this.handleOk.bind(this);
		this.onTextInputChange = this.onTextInputChange.bind(this);
		this.selectIcon = this.selectIcon.bind(this);
	}

	onTextInputChange(event)
	{
		var storeValue = document.getElementById("inputUsername").value.toString();
		console.log(storeValue);
		this.setState({username: storeValue});
	}

	selectIcon(event)
	{
		console.log(event.target.id);
		
		switch(event.target.id)
		{
			case "icon_OW":
				this.setState({iconSelected: icon_OW});
				document.getElementById("icon_OW").style.boxShadow = "2px 2px 2px black";
				document.getElementById("icon_FFXIV").style.boxShadow = "";
				break;
			case "icon_FFXIV":
				this.setState({iconSelected: icon_FFXIV});
				document.getElementById("icon_OW").style.boxShadow = "";
				document.getElementById("icon_FFXIV").style.boxShadow = "2px 2px 2px black";
				break;
		}		
	}

	exitGame()
	{
		console.log("Exit Game");
		window.ue4("ExitGame");
	}

	handleOk()
	{
		if (this.state.username == "" || this.state.iconSelected == "")
		{
			notification.open({
				message: 'Missing Information',
				placement: "topRight",
				duration: 2,
				description:
				  'Input a Username and Icon.',
			  });

		}
		else
		{
			var JSON = {"username": this.state.username, "icon": this.state.iconSelected};
			this.setState({showModal: false});
			window.ue4("InitialiseDetails", JSON);
		}
	}
		
	render()
	{
		return(
		<Modal title="Player Options" visible={this.state.showModal} onOk={this.handleOk} onCancel={this.exitGame} closable={false}>
			<input id="inputUsername" placeholder="Username" onInput={this.onTextInputChange}/>
			<div style={{display: "flex", flexDirection: "row", gap: "5px", paddingTop: "15px"}}>
				<input type="image" onClick={this.selectIcon} id="icon_OW" src={icon_OW} style={{height: "25px", width: "25px"}}/> 
				<input type="image" onClick={this.selectIcon} id="icon_FFXIV" src={icon_FFXIV} style={{height: "25px", width: "25px"}}/> 
			</div>
		</Modal>
		);
	}
}

export default InitialModal;
