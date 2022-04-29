//import "antd/dist/antd.css";
import React from 'react';
import {Button} from 'antd';
import { Input } from 'antd';
import { CaretRightOutlined, SmileOutlined } from '@ant-design/icons';

const { TextArea } = Input;

class SubmitText extends React.Component
{
	render()
	{
		return(
			<div style={{display: "flex", flexDirection: "row", boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.2)"}}>
				<TextArea rows={2} style={{resize: "none"}}/>
				<Button type="primary" style={{height: "auto", width: "15%"}} icon=<CaretRightOutlined/>></Button>
			</div>
		);
	}
}

export default SubmitText;
