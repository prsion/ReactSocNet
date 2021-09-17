import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		
			<div className={s.item}>
				<img src="avatar.png" alt="" />
				{props.message}
				<div>
					<span>likes = {props.likes}</span>
				</div>
				
			</div>
		
	);
}
export default Post;