//import "antd/dist/antd.css";
import React from 'react';
import {Button} from 'antd';
import { Input } from 'antd';
import { CaretRightOutlined, SmileOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import Picker from 'emoji-picker-react';

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
		this.GetSelectedEmoji = this.GetSelectedEmoji.bind(this);
		this.downHandler = this.downHandler.bind(this);
		this.upHandler = this.upHandler.bind(this);
	}
	
	downHandler(key)
	{
		console.log(key.code);
		
		if (key.code == "ShiftLeft")
		{
			this.setState({isShiftDown: true});
			console.log("shift held down");
		}
	}
	
	upHandler(key)
	{
		if (key.code == "ShiftLeft")
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
	
	GetSelectedEmoji(event, emojiObject)
	{
		console.log(emojiObject.emoji);
		let textToInsert = emojiObject.emoji;
		let cursorPosition = document.getElementById("MyInputText").selectionStart;
		let textBeforeCursorPosition = document.getElementById("MyInputText").value.substring(0, cursorPosition);
		let textAfterCursorPosition = document.getElementById("MyInputText").value.substring(cursorPosition, document.getElementById("MyInputText").value.length);
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
				<TextArea rows={2} id="MyInputText" onKeyDown={this.keyPress} style={{resize: "none"}}/>
				<div style={{display: "flex", flexDirection: "column"}}>
					<Button type="primary" icon=<CaretRightOutlined/>></Button>
					<Popover content={<Picker onEmojiClick={this.GetSelectedEmoji}/>}>
						<Button type="primary" icon=<SmileOutlined/>></Button>
					</Popover>
				</div>
			</div>
		);
	}
}

export default SubmitText;
