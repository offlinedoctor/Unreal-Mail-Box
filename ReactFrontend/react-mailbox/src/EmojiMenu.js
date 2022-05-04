import React from 'react';
import JSON_EmojiList from './emojiJSONList.json';
import { Button } from 'antd';
import { Row, Col, Divider } from 'antd';
import StyleCSS from './StyleCSS.css';

var EmojiList_Smileys = JSON_EmojiList.Smileys;
var EmojiList_Gestures = JSON_EmojiList.Gestures;
var EmojiList_People = JSON_EmojiList.People;
var EmojiList_Clothing = JSON_EmojiList.Clothing;
var EmojiList_Animals = JSON_EmojiList.Animals;
var EmojiList_Food = JSON_EmojiList.Food;
var EmojiList_Activities = JSON_EmojiList.Activities;
var EmojiList_Travel = JSON_EmojiList.Travel;
var EmojiList_Objects = JSON_EmojiList.Objects;
var EmojiList_Symbols = JSON_EmojiList.Symbols;

var Emoji_SelectionList = 
{
	"List":
	[
		{id: "Smileys", value: "😀"},
		{id: "Gestures",value: "👋"},
		{id: "People", value: "🤳"},
		{id: "Clothing", value: "🛍"},
		{id: "Animals", value: "🐱"},
		{id: "Food", value: "🍟"},
		{id: "Activities", value: "🎳"},
		{id: "Travel", value: "🚅"},
		{id: "Objects",	value: "💻"},
		{id: "Symbols",	value: "🔶"},
	]
}

class EmojiMenu extends React.Component
{
	constructor()
	{
		super();
		
		this.state =
		{
			chosenEmojiList: EmojiList_Smileys,
		}
		
		this.ShowSelectedEmojiList = this.ShowSelectedEmojiList.bind(this);
		this.SelectedEmoji = this.SelectedEmoji.bind(this);
		
	}
	
	ShowSelectedEmojiList(event)
	{
		console.log(event.target.id);
		
		switch(event.target.id.toString())
		{
			case "Smileys":
				this.setState({chosenEmojiList: EmojiList_Smileys});
				break;
			case "Gestures":
				this.setState({chosenEmojiList: EmojiList_Gestures});
				break;
			case "People":
				this.setState({chosenEmojiList: EmojiList_People});
				break;
			case "Clothing":
				this.setState({chosenEmojiList: EmojiList_Clothing});
				break;
			case "Animals":
				this.setState({chosenEmojiList: EmojiList_Animals});
				break;
			case "Food":
				this.setState({chosenEmojiList: EmojiList_Food});
				break;
			case "Activities":
				this.setState({chosenEmojiList: EmojiList_Activities});
				break;
			case "Travel":
				this.setState({chosenEmojiList: EmojiList_Travel});
				break;
			case "Objects":
				this.setState({chosenEmojiList: EmojiList_Objects});
				break;
			case "Symbols":
				this.setState({chosenEmojiList: EmojiList_Symbols});
				break;
			default:
				break;
		}
		//this.setState({chosenEmojiList:});
	}
	
	SelectedEmoji(event)
	{
		console.log(event.target.id);
	}
	
	componentDidMount()
	{
		
	}
		
	render()
	{
		return(
			<div style={{width: "50vw"}}>
				<div style={{padding: "5px", borderRadius: "15px", border: "5px solid #0d47a1"}}>
					<h1 style={{display: "flex", justifyContent: "center"}}> Emoji Selector </h1>
					<div style={{display: "flex", justifyContent: "center"}}>
						{
							Emoji_SelectionList.List.map(eachIteration => 
									<input class="emojiButtonList" id={eachIteration.id} type="button" value={eachIteration.value} onClick={this.ShowSelectedEmojiList}/>
							)
						}
					</div>
					<div style={{paddingTop: "15px", borderBottom: "2.5px solid #0d47a1"}}> </div>
					<div style={{marginTop: "25px", display: "flex", flexDirection: "row", flexWrap: 'wrap', overflowY: "auto", height: "250px"}}>
					{
						this.state.chosenEmojiList.map(eachIteration =>
							<input class="emojiSelectButton" style={{height: "15%", width: "4vw"}} id={eachIteration} type="button" value={eachIteration} onClick={this.SelectedEmoji}/>
						)
					}
					</div>
				</div>
			</div>
		);
	}
}

export default EmojiMenu;
