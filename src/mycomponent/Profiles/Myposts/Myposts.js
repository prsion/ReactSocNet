import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';



const Myposts = (props) => {
	let postElement = props.posts.map(elem => <Post message = {elem.message} likes = {elem.likes} />);

 let newPostElement= React.createRef();


	let onAddPost = () => {
			props.addPost();
	}

	let onPostChange = () => {
		 let text = newPostElement.current.value;
		 props.updateNewPostText(text);

	}

	return (
		<div>

			<div>
				<textarea onChange={onPostChange}  ref={newPostElement} placeholder={'write smth,,,'} value={props.newPostText} />
					<div>
					<button onClick={onAddPost}>Add Post</button>
					</div>
			</div>
			<div className={s.posts}>
			{postElement}

			</div>
		</div>
	);
}
export default Myposts;