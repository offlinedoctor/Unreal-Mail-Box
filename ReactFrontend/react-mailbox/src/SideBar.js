//import "antd/dist/antd.css";
import React from 'react';
import {Button} from 'antd';
import { Avatar, Divider, Tooltip } from 'antd';
import { UserOutlined, AlertOutlined, CrownOutlined } from '@ant-design/icons';

class SideBar extends React.Component
{
	
	constructor()
	{
		super();
		
		this.state = 
		{	
			eachuser: ["hello", "hello2"],
		}

		this.NotificationSound = this.NotificationSound.bind(this);
		this.ShowHost = this.ShowHost.bind(this);
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
			<div>
				<div style={{display: "flex", flexDirection: "column", borderBottom: "1px solid", alignItems: "center"}}>
					<h2 style={{color: "white"}}> Session </h2>
					{
						this.state.eachuser.map(eachIteration =>
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
