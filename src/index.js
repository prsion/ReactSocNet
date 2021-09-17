import React from 'react';
import ReactDOM from 'react-dom';
import Myapp from './Myapp.js';


let posts = [
				{id:1, message:'React its cool  ', likes:10},
				{id:1, message:'Hi how are you?', likes:40},
				{id:1, message:'bla bla bla bla....', likes:11},
				{id:1, message:'awesome....', likes:10},

];

let dialogs = [
					{id:1, name: 'Dimuch'},
					{id:2, name: 'Andrey'},
					{id:3, name: 'Lucie'},
					{id:4, name: 'Sveta'},
					{id:5, name: 'Sasha'}
];

let messages = [
					{id:1, message: 'Hi HI '},
					{id:2, message: 'OOOOohohoho'},
					{id:3, message: 'egegegeggey'},
					{id:4, message: 'wwwaaaauuu'},
					{id:5, message: '"euuuuuuuuu'}
]

ReactDOM.render(<Myapp posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));