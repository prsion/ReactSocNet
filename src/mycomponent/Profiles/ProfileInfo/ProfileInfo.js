import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";

const ProfileInfo = (props) => {

	if(!props.profile){
		return <Preloader/>
	}

	return (
		<div className={style.content}>
			<img className={style.img1} src="foto.jpg" alt="foto"/>
			<div>
				<img className={style.img2} src={props.profile.photos.large} />
				ava + discription
			</div>
		</div>
	)
}

export default ProfileInfo;
