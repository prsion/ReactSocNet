import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div className={s.content}>
			<img src="foto.jpg" alt="foto"/>
			<div>
				ava + discription
			</div>
		</div>
	)
}

export default Profile;
