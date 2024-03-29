//import "antd/dist/antd.css";
import React from 'react';
import {Button} from 'antd';
import { Input } from 'antd';
import { CaretRightOutlined, SmileOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import EmojiMenu from './EmojiMenu.js';
import StyleCSS from './StyleCSS.css';

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
		
		this.state = 
		{
			isShiftDown: false
		}
		
		this.keyPress = this.keyPress.bind(this);
		this.SubmitMail = this.SubmitMail.bind(this);
		this.downHandler = this.downHandler.bind(this);
		this.upHandler = this.upHandler.bind(this);
	}
	
	downHandler(key)
	{
		console.log(key);
		
		if (key.key == "Shift")
		{
			this.setState({isShiftDown: true});
			console.log("shift held down");
		}
	}
	
	upHandler(key)
	{
		if (key.key == "Shift")
		{
			this.setState({isShiftDown: false});
			console.log("shift released");
		}
	}
	
	keyPress(event)
	{				
		if (event.key === "Enter" && this.state.isShiftDown == false)
		{
			this.SubmitMail();
			event.preventDefault();
		}
	}
		
	SubmitMail()
	{
		console.log(document.getElementById("MyInputText").value);
		window.ue4("AddToMailboxArray", document.getElementById("MyInputText").value);
		document.getElementById("MyInputText").value = "";
		//document.getElementById("MyInputText").value.focus();
		//document.getElementById("MyInputText").setSelectionRange(0,0);
	}
		
	componentDidMount()
	{
		 window.addEventListener('keydown', this.downHandler);
		 window.addEventListener('keyup', this.upHandler);
	}
		
	render()
	{
		return(
			<div style={{display: "flex", flexDirection: "row", boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.2)"}}>
				<textarea cols={240} rows={2} id="MyInputText" onKeyDown={this.keyPress} style={{resize: "none"}}/>
				<div style={{display: "flex", flexDirection: "column"}}>
					<Popover overlayInnerStyle={{borderRadius: "25px", backgroundColor: "rgba(255,255,255,0.8)"}} trigger="click" content={<EmojiMenu/>}>
						<input id="inputbuttonStyle" type="button" value="😀"/>
					</Popover>
					<Button style={{width: "100%"}} onClick={this.SubmitMail} type="primary" icon=<CaretRightOutlined/>></Button>
				</div>
			</div>
		);
	}
}

export default SubmitText;
