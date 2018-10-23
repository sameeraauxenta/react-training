// This file contains a statefull class component.
import React, { Component } from 'react';
import './GoogleHomePage.css';
import Logo from './common/Logo';

/**
 * Class representing GoogleHomePage componrnt
 */
class GoogleHomePage extends Component {

	// This is render function. JSX you put here will be rendered.
	render() {
		return (
			<div className="homePage">

				<Logo
					src="https://www.google.lk/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
					alt="logo"
				/>

			</div>
		);
	}
}

export default GoogleHomePage;
