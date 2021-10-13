import React from 'react';
import s from './Profiles.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./Myposts/MyPostsContainer";


const Profiles = (props) => {

	return (
		<div className={s.content}>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
		  <MyPostsContainer/>
		</div>
	)
}

export default Profiles;


