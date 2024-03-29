//import "antd/dist/antd.css";
import React from 'react';
import {Button} from 'antd';
import { Avatar, Divider, Tooltip } from 'antd';
import { NotificationOutlined, CrownOutlined, SmileTwoTone, ClusterOutlined} from '@ant-design/icons';
import { Input } from 'antd';
import { Select } from 'antd';

import icon_OW from "./icon_OW.png";
import icon_FFXIV from "./icon_FFXIV.png";
import icon_Generic from "./icon_Generic.png";

var UserSessions = ["NameA", "NameB"];
var nameAndIcon = {name: "", icon: ""};

window.ue.interface.UpdateUserSessions = function(JSON_PayLoad)
{
	UserSessions = JSON_PayLoad;
	window.sideBarComponent.UpdateUsers();
}

window.ue.interface.UpdateNamesAndIcons = function(JSON_PayLoad)
{
	console.log(JSON_PayLoad);
	nameAndIcon = JSON_PayLoad;
	window.sideBarComponent.UpdateNameAndIcon();
}


class SideBar extends React.Component
{
	
	constructor()
	{
		super();
		
		this.state = 
		{	
			eachuser: [],
			iconSelected: icon_Generic,
			username: ""
		}
	
		window.sideBarComponent = this;
		this.NotificationSound = this.NotificationSound.bind(this);
		this.ShowHost = this.ShowHost.bind(this);
		this.UpdateUsers = this.UpdateUsers.bind(this);
		this.UpdateNameAndIcon = this.UpdateNameAndIcon.bind(this);
		this.ShowDebugMenu = this.ShowDebugMenu.bind(this);
	}

	//Could we abstract this and use Props instead?
	UpdateUsers()
	{
		this.setState({eachuser: UserSessions});
	}

	NotificationSound()
	{
		window.ue4("NotificationSound");
	}

	ShowHost()
	{
		window.ue4("ShowHost");
	}
	
	UpdateNameAndIcon()
	{
		this.setState({username: nameAndIcon.username});
		this.setState({iconSelected: nameAndIcon.icon});
	}
	
	ShowDebugMenu()
	{
		window.ue4("ShowDebugMenu");
	}
		
	render()
	{
		return(
			<div style={{padding: "25px", backgroundColor: "rgba(1,1,1,0.75)", borderRadius: "15px", boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.2)"}}>
				<h2 style={{color: "white"}}> User Settings </h2>
				<div style={{display: "flex", flexDirection: "row", paddingBottom: "25px", borderBottom: "1px solid", alignItems: "center"}}>
					<Input placeholder={this.state.username} disabled={true} />
					<img src={this.state.iconSelected} style={{height: "25px", width: "25px"}}/>
				</div>
				<div style={{display: "flex", flexDirection: "column", paddingBottom: "25px", borderBottom: "1px solid", alignItems: "center"}}>
					<h2 style={{color: "white"}}> Session </h2>
					{
						this.state.eachuser.map(eachIteration =>
							<Tooltip title={eachIteration} placement="right">
								<Avatar style={{backgroundColor: 'white'}} icon={<SmileTwoTone />}/>
							</Tooltip>
						)
					}
				</div>
				<div style={{paddingTop: "25px"}}>
					<h2 style={{color: "white", textAlign: "center"}}> Tools </h2>
					<div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
						<Tooltip title="Who is Hosting?" placement="right">
							<Button type="primary" onClick={this.ShowHost} shape="square" icon={<CrownOutlined />}/>
						</Tooltip>
						<Tooltip title="Ring Bell"  placement="right">
							<Button type="primary" onClick={this.NotificationSound} shape="square" icon={<NotificationOutlined />}/>
						</Tooltip>
						<Tooltip title="Debug Menu"  placement="right">
							<Button type="primary" onClick={this.ShowDebugMenu} shape="square" icon={<ClusterOutlined />}/>
						</Tooltip>
					</div>
				</div>
			</div>
		);
	}
}

export default SideBar;
