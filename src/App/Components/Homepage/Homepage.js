import React from 'react';
import Logo from '../common/Logo';
import './Homepage.css';
import SearchBar from './SearchBar';
import ShortCuts from './ShortCuts';

/**
 * Class representing Homepage component
 */
class Homepage extends React.Component {

    render () {

        return <div className="homepage-wrapper">

            <Logo
                src="https://www.google.lk/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
                alt="Logo"
                width={300}
            />

            <SearchBar placeholder="Search google or type a URL" />

            <ShortCuts />

        </div>
    }
}

export default Homepage;