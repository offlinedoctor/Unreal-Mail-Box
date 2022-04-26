//import "antd/dist/antd.css";
import React from 'react';
import {Button} from 'antd';
import { Avatar, Divider, Tooltip } from 'antd';
import { UserOutlined, AlertOutlined, CrownOutlined } from '@ant-design/icons';



class SideBar extends React.Component
{
	render()
	{
		return(
			<div>
				<h2> Current Login List </h2>
				<Avatar.Group>
					<Tooltip title="User1" placement="top">
						<Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />}/>
					</Tooltip>
					<Tooltip title="User2" placement="top">
						<Avatar style={{backgroundColor: 'blue'}} icon={<UserOutlined />}/>
					</Tooltip>
					<Tooltip title="User3" placement="top">
						<Avatar style={{backgroundColor: 'red'}} icon={<UserOutlined />}/>
					</Tooltip>
				</Avatar.Group>
								<div style={{display: "flex", flexDirection: "row", paddingTop: "15px"}}>
					<Tooltip title="Alert" placement="top">
						<Button type="primary" shape="square" icon={<AlertOutlined />}/>
					</Tooltip>
					<Tooltip title="Who is Hosting?" placement="top">
						<Button type="primary" shape="square" icon={<CrownOutlined />}/>
					</Tooltip>
				</div>
			</div>
		);
	}
}

export default SideBar;
