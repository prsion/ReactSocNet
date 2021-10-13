import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader';
import foto from "../../../assets/images/foto.jpg";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

	 if(!props.profile){
	 	return <Preloader/>
	 }

	return (
		<div className={style.content}>
			{/* <img className={style.img1} src={foto}/> */}
			<div>
				<img className={style.img2} src={props.profile.photos.large?props.profile.photos.large:"https://social-network.samuraijs.com/activecontent/images/users/9/user-small.jpg?v=0"} />

				<ProfileStatus status={props.status} updateStatus={props.updateStatus} />


				<p>{`${props.profile.aboutMe}`}</p>
				<p>{`${props.profile.fullName}`}</p>
				<p>{`${props.profile.userId}`}</p>

			</div>
		</div>
	)
}

export default ProfileInfo;
