import React, { Component } from 'react';
import './Tasks.scss';

class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: "",
			toDoList: []
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({
			toDoList: [...this.state.toDoList, this.state.task],
			task: ""
		});

	}


	taskChange(e) {
		this.setState({
			task: e.target.value,
		})
	}

	render() {
		return (

			<div className="Tasks">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<h3>Tasks:</h3>
					<p>Make a Todo list (add only):</p>
					<input placeholder="Your task..." value={this.state.task} onChange={this.taskChange.bind(this)} /> <button>Add task</button>
				</form>
				<ul>
					{this.state.toDoList.map((task, index) => {
						return <li key={index}>{task}
						</li>
					})}
				</ul>
			</div>
		)
	}
}

export default Tasks;
