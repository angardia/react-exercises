import React, { Component } from 'react';
import './Hide.scss';

class Hide extends Component {
	constructor(props){
		super(props);
		this.state = {
			isShow : true
		}
	}


	toggle(){
		this.setState({
			isShow : !this.state.isShow
		})
	}

	render() {
		return (
			<div className="Hide">
				<button onClick={this.toggle.bind(this)} >Hide text now!</button>
			
				<p className={this.state.isShow ? "show" : "hidden"}>
					You can read this text,
					but if you click the button it should disappear. Forever.
				</p>
			</div>
		)
	}
}

export default Hide;
