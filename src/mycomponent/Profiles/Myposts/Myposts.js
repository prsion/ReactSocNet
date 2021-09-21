import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";


const Myposts = (props) => {
	let postElement = props.posts.map(elem => <Post message = {elem.message} likes = {elem.likes} />);

 let newPostElement= React.createRef();



	let addPost = () => {

		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		 let text = newPostElement.current.value;
		 let action = updatePostTextActionCreator(text);
		 props.dispatch(action);
	}

	return (
		<div>

			<div>
				<textarea onChange={onPostChange}  ref={newPostElement} placeholder={'write smth,,,'} value={props.newPostText} />
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