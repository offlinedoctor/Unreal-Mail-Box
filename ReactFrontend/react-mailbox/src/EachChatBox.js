import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class EachChatBox extends React.Component
{
	render()
	{
		return(
			<div style={{display: "flex", flexDirection: "column", boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.2)", width: "300px"}}>
				<div style={{display: "flex", flexDirection: "row", borderBottom: "1px solid rgba(0,0,0,0.2)", paddingTop: "5px", paddingBottom: "5px"}}>
					<Avatar size={32} icon={<UserOutlined />} />
					<div style={{display: "flex", alignItems: "center", paddingTop: "3px", paddingLeft: "4px"}}>
						<h3> Username goes here </h3>
						<h5 style={{paddingLeft: "5px", color: "grey"}}> 5:02pm </h5>
					</div>
				</div>
				<div style={{display: "flex", alignItems: "center", paddingTop: "10px"}}>
					<p> This This This This This This This This This This This is test text.This is test textThis is test textThis is test textThis is test text </p>
				</div>
			</div>
		);
	}
}

export default EachChatBox;
