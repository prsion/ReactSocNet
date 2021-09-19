import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';


const Myposts = (props) => {
	let postElement = props.posts.map(elem => <Post message = {elem.message} likes = {elem.likes} />);

 let newPostElement= React.createRef();


	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);

	}

	let onPostChange = () => {
		 let text = newPostElement.current.value;
		 props.updatePostText(text) ;
	}

	return (
		<div>

			<div>
				<textarea onChange={onPostChange}  ref={newPostElement} value={props.newPostText} />
					<div>
					<button onClick={addPost}>Add Post</button>
					</div>
			</div>
			<div className={s.posts}>
			{postElement}

			</div>
		</div>
	);
}
export default Myposts;