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
			<div style={{paddingRight: "15px"}}>
				<div>
					<h2> In Session </h2>
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
				</div>
				<div style={{paddingTop: "25px"}}>
					<h2> Tools </h2>
					<div style={{display: "flex", flexDirection: "row"}}>
						<Tooltip title="Who is Hosting?" placement="top">
							<Button type="primary" shape="square" icon={<CrownOutlined />}/>
						</Tooltip>
						<Tooltip title="Alert" placement="top">
							<Button type="primary" shape="square" icon={<AlertOutlined />}/>
						</Tooltip>
					</div>
				</div>
			</div>
		);
	}
}

export default SideBar;
