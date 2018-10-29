// This file contains a statefull class component.
import React, { Component } from 'react';
import './GoogleHomePage.css';
import Logo from './common/Logo';
import HomePageLink from './common/HomePageLink';

/**
 * Class representing GoogleHomePage componrnt
 */
class GoogleHomePage extends Component {


	state = {
		links: [
			{
				id  : 1,
				src	: 'https://via.placeholder.com/100',
				name: 'Google',
				alt : 'Google',
				link: 'http://google.com'
			},
			{
				id  : 2,
				src	: 'https://via.placeholder.com/100',
				name: 'Facebook',
				alt : 'Facebook',
				link: 'http://facebook.com'
			}
		],
		name: 'ssss'
	}

	values = []

	// editLink () {
	// 	this.setState({
	// 		link: 
	// 	})
	// }

	// This is render function. JSX you put here will be rendered.
	render() {
		return (
			<div className="homePage">

				<Logo
					src="https://www.google.lk/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
					alt="logo"
				/>

				<div className="homepage-links-wrapper">
					<div className="homepage-links-wrapper-inner">

						{this.state.links.map(function (link, index) {
							return <HomePageLink
								src={link.src}
								alt={link.alt}
								name={link.name}
								link={link.link}
								key={index}
							/>
						})}

					</div>
				</div>

			</div>
		);
	}
}

export default GoogleHomePage;
