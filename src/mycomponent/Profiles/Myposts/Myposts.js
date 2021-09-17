import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';


const Myposts = (props) => {
	let postElement = props.posts.map(elem => <Post message = {elem.message} likes = {elem.likes} />);

 let newPostElement= React.createRef();


	let addPost = () => {

		let text = newPostElement.current.value ;
		props.addPost(text);
	}

	return (
		<div>
			Myposts
			<div>
				<textarea  ref={newPostElement} name="" id="" cols="30" rows="3"></textarea>
					<div>
					<button onClick={addPost}>Add Post</button>
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