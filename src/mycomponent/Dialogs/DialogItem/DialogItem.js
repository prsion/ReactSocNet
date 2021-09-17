import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
	let path= "/dialogs/"+ props.id;
   return (
   			<div className={s.dialog +' '+ s.active}>
					<NavLink to={path}>{props.name}</NavLink>
				</div>
				)
 }


//  let DialogData = [
// 					{id:1, name: 'Dimuch'},
// 					{id:2, name: 'Andrey'},
// 					{id:3, name: 'Lucie'},
// 					{id:4, name: 'Sveta'},
// 					{id:5, name: 'Sasha'}
// ]

 // let DialogElement = DialogData.map(elem => <DialogItem name = {elem.name} id= {elem.id} /> );

 export default DialogItem;