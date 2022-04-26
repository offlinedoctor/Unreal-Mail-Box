//import "antd/dist/antd.css";
import React from 'react';
import {Button} from 'antd';
import { Input } from 'antd';
import { Avatar } from 'antd';
const { TextArea } = Input;


class Navbar extends React.Component
{
	render()
	{
		return(
			<div style={{display: "flex", flexDirection: "column"}}>
				<TextArea rows={1} style={{resize: "none"}}/>
				<Button type="primary">Submit</Button>
				<Avatar size={64} icon="user" />
				<Avatar size={64} icon="user" />
			</div>
		);
	}
}

export default Navbar;
