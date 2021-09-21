import React from 'react';
import s from './Dialogs.module.css';
//import {NavLink} from 'react-router-dom';
import DialogItem  from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import {updateMessageActionCreator, sendMessageBodyActionCreator} from "../../redux/state";



const Dialogs = (props) => {

let state= props.store.getState().dialogsPage;

let DialogElement = state.dialogs.map(elem => <DialogItem name = {elem.name} id= {elem.id}/>);
let MessageElement = state.messages.map( elem => <Messages message = {elem.message}/>);
let newMessageText= state.newMessageText;

let onSendMessageClick = () => {
	props.store.dispatch(sendMessageBodyActionCreator());
}

let onNewMessageChange = (e) => {
	let bodyMessage = e.target.value ;
	props.store.dispatch(updateMessageActionCreator(bodyMessage));
	}

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