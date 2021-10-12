import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {
let state = props.dialogsPage;

let DialogElement = state.dialogs.map(elem => <DialogItem name = {elem.name} id= {elem.id}/>);
let MessageElement = state.messages.map( elem => <Messages message = {elem.message}/>);
let newMessageText = state.newMessageText;

let onSendMessageClick = () => {
	props.sendMessage();
}

let onNewMessageChange = (e) => {
	let text = e.target.value ;
	props.updateNewMessageBody(text);
	}

if(!props.isAuth) return <Redirect to ={"/login"} />;

	return (
		
			<div className={s.dialogs}>
						<div className={s.dialogsItems}>
							{DialogElement}

						</div>
						<div className={s.messages}>
							<div>{MessageElement}</div>
							<div>
								<div><textarea value={newMessageText} onChange={onNewMessageChange} placeholder= 'enter your ...'></textarea> </div>
								<div> <button onClick={onSendMessageClick}>Send message </button>	</div>
								
							</div>


						</div>
			</div>
		
	);
}
export default Dialogs;