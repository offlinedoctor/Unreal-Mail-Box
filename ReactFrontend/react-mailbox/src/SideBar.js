//import "antd/dist/antd.css";
import React from 'react';
import {Button} from 'antd';
import { Input } from 'antd';
import { Avatar, Divider, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
const { TextArea } = Input;



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
			</div>
		);
	}
}

export default SideBar;
