import React from 'react';
import s from './Post.module.css';
import avatar from "./../../../../assets/images/avatar.png";

const Post = (props) => {
	return (
		
			<div className={s.item}>
				<img src={avatar} />
				{props.message}
				<div>
					<span>likes = {props.likes}</span>
				</div>
				
			</div>
		
	);
}
export default Post;