//import "antd/dist/antd.css";
import React from 'react';
import {Button} from 'antd';
import { Input } from 'antd';
import { CaretRightOutlined, SmileOutlined } from '@ant-design/icons';

const { TextArea } = Input;

window.ue.interface.ScrollToBottom = function(JSON_Payload)
{
	var objDiv = document.getElementById("customSlider");
	objDiv.scrollTop = objDiv.scrollHeight;
}

class SubmitText extends React.Component
{
	constructor()
	{
		super();
		
		this.keyPress = this.keyPress.bind(this);
		this.SubmitMail = this.SubmitMail.bind(this);
	}
	
	keyPress(event)
	{
		console.log(event.key);
		
		if (event.key === "Enter")
		{
			this.SubmitMail();
			event.preventDefault();
		}
	}
	
	SubmitMail()
	{
		console.log(document.getElementById("MyInputText").value);
		window.ue4("AddToMailboxArray", document.getElementById("MyInputText").value);
		document.getElementById("MyInputText").value = " ";
		//document.getElementById("MyInputText").value.focus();
		//document.getElementById("MyInputText").setSelectionRange(0,0);
	}
		
	render()
	{
		return(
			<div style={{display: "flex", flexDirection: "row", boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.2)"}}>
				<TextArea rows={2} id="MyInputText" onKeyDown={this.keyPress} style={{resize: "none"}}/>
				<Button type="primary" style={{height: "auto", width: "15%"}} icon=<CaretRightOutlined/>></Button>
			</div>
		);
	}
}

export default SubmitText;
