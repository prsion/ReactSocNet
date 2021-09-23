import React from 'react';
import s from './Profiles.module.css';
import Profile from './Profile/Profile';
import MyPostsContainer from "./Myposts/MyPostsContainer";


const Profiles = (props) => {

	return (
		<div className={s.content}>
			<Profile/>
		  <MyPostsContainer store={props.store} />
		</div>
	)
}

export default Profiles;


