import React, { Component } from 'react';
import './App.css';
import Homepage from './Components/Homepage/Homepage';

/**
 * Class representing App component.
 */
class App extends Component {
	render() {
		return (
			<div className="App">
				<Homepage/>
			</div>
		);
	}
}

export default App;
