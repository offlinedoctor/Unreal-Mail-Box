import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';



class EachChatBox extends React.Component
{
	render()
	{
		return(
			<div style={{display: "flex", flexDirection: "column", width: "auto", marginTop: "25px"}}>
				<div style={{display: "flex", flexDirection: "row", borderBottom: "1px solid rgba(0,0,0,0.2)", paddingTop: "5px", paddingBottom: "5px"}}>
					<Avatar size={32} icon={<UserOutlined />} />
					<div style={{display: "flex", alignItems: "center", paddingTop: "3px", paddingLeft: "4px"}}>
						<h3> {this.props.username} </h3>
						<h5 style={{paddingLeft: "5px", color: "grey"}}> {this.props.timettamp} </h5>
					</div>
				</div>
				<div style={{display: "flex", alignItems: "center", paddingTop: "10px"}}>
					<p> {this.props.chat} </p>
				</div>
			</div>
		);
	}
}

export default EachChatBox;
