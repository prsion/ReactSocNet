import React from 'react';
import s from './Dialogs.module.css';
//import {NavLink} from 'react-router-dom';
import DialogItem  from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

// const DialogItem = (props) => {
// 	let path= "/dialogs/"+ props.id;
//    return (
//    			<div className={s.dialog +' '+ s.active}>
// 					<NavLink to={path}>{props.name}</NavLink>
// 				</div>
// 				)
//  } 


// const Message = (props) => {
// 		return (
// 			<div className={s.message}>{props.message}</div>
// 	)
// }

// let DialogData = [
// 					{id:1, name: 'Dimuch'},
// 					{id:2, name: 'Andrey'},
// 					{id:3, name: 'Lucie'},
// 					{id:4, name: 'Sveta'},
// 					{id:5, name: 'Sasha'}
// ]

//  let DialogElement = DialogData.map(elem => <DialogItem name = {elem.name} id= {elem.id} /> );


// let MessageData = [
// 					{id:1, message: 'Hi HI  '},
// 					{id:2, message: 'OOOOohohoho'},
// 					{id:3, message: 'egegegeggey'},
// 					{id:4, message: 'wwwaaaauuu'},
// 					{id:5, message: '"euuuuuuuuu'}
// ]


// let DialogElement = DialogData.map(elem => <DialogItem name = {elem.name} id= {elem.id}/>);
// let MessageElement = MessageData.map( elem => <Messages message = {elem.message}/>); 

const Dialogs = (props) => {
let DialogElement =props.dialogs.map(elem => <DialogItem name = {elem.name} id= {elem.id}/>);
let MessageElement = props.messages.map( elem => <Messages message = {elem.message}/>); 

	return (
		
			<div className={s.dialogs}>
						<div className={s.dialogsItems}>
							{DialogElement}
{/*						<DialogItem name = {DialogData[2].name} id={DialogData[2].id}/>	
							<DialogItem name = {DialogData[3].name} id={DialogData[3].id}/>	*/}
							
						</div>
						<div className={s.messages}>
						{MessageElement}
{/*								<Message message = {MessageData[2].message}/>
									<Message message = {MessageData[3].message}/>*/}
						</div>
			</div>
		
	);
}
export default Dialogs;