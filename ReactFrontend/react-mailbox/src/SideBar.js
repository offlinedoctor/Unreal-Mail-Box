//import "antd/dist/antd.css";
import React from 'react';
import {Button} from 'antd';
import { Avatar, Divider, Tooltip } from 'antd';
import { UserOutlined, AlertOutlined, CrownOutlined } from '@ant-design/icons';

var UserSessions = ["NameA", "NameB"];

window.ue.interface.UpdateUserSessions = function(JSON_PayLoad)
{
	UserSessions = JSON_PayLoad;
	window.sideBarComponent.UpdateUsers();
}

class SideBar extends React.Component
{
	
	constructor()
	{
		super();
		
		this.state = 
		{	
			eachuser: [],
		}
	
		window.sideBarComponent = this;
		this.NotificationSound = this.NotificationSound.bind(this);
		this.ShowHost = this.ShowHost.bind(this);
		this.UpdateUsers = this.UpdateUsers.bind(this);
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
	
	render()
	{
		return(
			<div style={{padding: "25px", backgroundColor: "rgba(1,1,1,0.6)", borderRadius: "15px", boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.2)"}}>
				<div style={{display: "flex", flexDirection: "column", paddingBottom: "25px", borderBottom: "1px solid", alignItems: "center"}}>
					<h2 style={{color: "white"}}> Session </h2>
					{
						UserSessions.map(eachIteration =>
							<Tooltip title={eachIteration} placement="right">
								<Avatar style={{backgroundColor: 'red'}} icon={<UserOutlined />}/>
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
						<Tooltip title="Ring Bell" placement="right">
							<Button type="primary" onClick={this.NotificationSound} shape="square" icon={<AlertOutlined />}/>
						</Tooltip>
					</div>
				</div>
			</div>
		);
	}
}

export default SideBar;
