import React from 'react';
import style from './ProfileInfo.module.css';


class ProfileStatus extends React.Component{

	state = {
		editMode: false,
		status: this.props.status
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
			this.props.updateStatus(this.state.status);
	 }

  onStatusChange = (e) => {
		this.setState({
		status: e.currentTarget.value
		})
	}

render(){
				return(
				<>
				 {!this.state.editMode&& 
					<div>
						<span className = {style.spanClick} onClick={this.activateMode}>{this.props.status||"no status"} </span>
					</div>
				 }
					{this.state.editMode&& 
						<div>
						<input onChange = {this.onStatusChange} autoFocus={true} onBlur={this.deactivateMode} value={this.state.status} />
					</div>
					}

				</>
			)
	}
}

export default ProfileStatus;
