import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import foto from "../../../assets/images/foto.jpg";


const ProfileInfo = (props) => {

	if(!props.profile){
		return <Preloader/>
	}

	return (
		<div className={style.content}>
			<img className={style.img1} src={foto}/>
			<div>
				<img className={style.img2} src={props.profile.photos.large} />
				<p>{`about me  ${props.profile.aboutMe}`}</p>
				<p>{`myName ${props.profile.fullName}`}</p>
				<p>{`my id ${props.profile.userId}`}</p>

			</div>
		</div>
	)
}

export default ProfileInfo;
