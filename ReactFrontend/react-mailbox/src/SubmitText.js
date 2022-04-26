//import "antd/dist/antd.css";
import React from 'react';
import {Button} from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;


class SubmitText extends React.Component
{
	render()
	{
		return(
			<div style={{display: "flex", flexDirection: "column", width: "50%"}}>
				<TextArea rows={1} style={{resize: "none"}}/>
				<Button type="primary">Submit</Button>
			</div>
		);
	}
}

export default SubmitText;
