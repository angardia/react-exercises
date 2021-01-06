import React, { Component } from 'react';
import './President.scss';

class President extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			presidents: [
				{
					firstName: 'Bill',
					lastName: 'Clinton',
					image: 'bill.jpeg'
				},
				{
					firstName: 'George',
					lastName: 'Bush',
					image: 'george.jpeg'
				},
				{
					firstName: 'Barack',
					lastName: 'Obama',
					image: 'barack.jpeg'
				}
			],

		};
	}

	getPresident(e) {
		const index = e.target.id;
		this.setState({
			name: this.state.presidents[index].firstName + " " + this.state.presidents[index].lastName
		})

	}

	render() {
		return (
			<div className="President">
				<p>When clicking on a president, display his <strong>full</strong> name below.</p>
				<div className="president-list">
					{this.state.presidents.map((president, index) => {
						return <img key={index} id={index} src={require('./images/' + president.image)} alt="" onClick={this.getPresident.bind(this)} />
					})}
				</div>
				<div>
					<strong>You selected: </strong> Full name here
				<p>{this.state.name}</p>
				</div>
			</div>
		)
	}
}

export default President;
