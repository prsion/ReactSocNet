import React from 'react';
import style from './ProfileInfo.module.css';


class ProfileStatus extends React.Component{
	state = {
		editMode: false
	}
		 activateMode = () =>{
				this.setState({
					editMode: true
				});
			//  this.state.editMode = true;
			//  this.forceUpdate();
		}

		deactivateMode = () =>{
			this.setState({
				editMode: false
			});
	 }

render(){
				return(
				<>
				 {!this.state.editMode&& 
					<div>
						<span className = {style.spanClick} onClick={this.activateMode}>{this.props.status} </span>
					</div>
				 }
					{this.state.editMode&& 
						<div>
						<input autoFocus={true} onBlur={this.deactivateMode} value={this.props.status} />
					</div>
					}

				</>
			)
	}
}

export default ProfileStatus;
