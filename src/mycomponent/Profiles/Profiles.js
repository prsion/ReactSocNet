import React from 'react';
import s from './Profiles.module.css';
import Myposts from './Myposts/Myposts';
import Profile from './Profile/Profile';


const Profiles = (props) => {

	return (
		<div className={s.content}>
			<Profile/>
		  <Myposts posts = {props.state.posts} addPost = {props.addPost}/>
		</div>
	)
}

export default Profiles;


