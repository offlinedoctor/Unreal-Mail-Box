import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import icon_OW from "./icon_OW.png";
import icon_FFXIV from "./icon_FFXIV.png";


class EachChatBox extends React.Component
{
	render()
	{
		return(
			<div style={{display: "flex", flexDirection: "column", marginTop: "25px", backgroundColor: "rgba(255,255,255,0.8)", borderRadius: "15px", boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.2)"}}>
				<div style={{display: "flex", flexDirection: "row", paddingTop: "5px", paddingBottom: "5px", paddingLeft: "25px"}}>
					<img src={this.props.icon} style={{height: "25px", width: "25px", marginTop: "5px"}}/>
					<div style={{display: "flex", alignItems: "center", paddingTop: "3px", paddingLeft: "4px"}}>
						<h3> {this.props.username} </h3>
						<h5 style={{paddingLeft: "5px", color: "grey"}}> {this.props.timestamp} </h5>
					</div>
				</div>
				<div style={{borderBottom: "1px solid rgba(0,0,0,0.2)"}}/>
				<div style={{display: "flex", alignItems: "center", paddingTop: "10px", overflowWrap: "break-word", width: "95%", paddingLeft: "25px", whiteSpace: "pre-wrap"}}>
					<p> {this.props.chat} </p>
				</div>
			</div>
		);
	}
}

export default EachChatBox;
