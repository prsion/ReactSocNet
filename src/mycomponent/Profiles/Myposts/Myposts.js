import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';


// let posts = [
// 				{id:1, message:'Hi how are you?', likes:10},
// 				{id:1, message:'Its my first post', likes:40},
// 				{id:1, message:'bla bla bla bla....', likes:11},
// 				{id:1, message:'REACT ITS COOL  ....', likes:10},

// ]




const Myposts = (props) => {
	let postElement = props.posts.map(elem => <Post message = {elem.message} likes = {elem.likes} />);

	return (
		<div>
			Myposts
			<div>
				<textarea name="" id="" cols="30" rows="3"></textarea>
					<div>
					<button>Add Post</button>
					</div>
			</div>
			<div className={s.posts}>
			{postElement}
				{/*<Post message='Hi how are you?' likes='10'/>
				<Post message='Its my first post' likes='40'/>
				<Post message='bla bla ....' likes='11'/>
				<Post message='REACT ITS COOL ....' likes='99'/>*/}
			</div>
		</div>
	);
}
export default Myposts;