import React from 'react';
import { PropTypes } from 'prop-types';

export class HomePageLink extends React.Component {

    static propTypes = {
        src     : PropTypes.string.isRequired,
        alt     : PropTypes.string.isRequired,
        name    : PropTypes.string.isRequired,
        link    : PropTypes.string.isRequired
    }


    render () {

        const { alt, src, name, link } = this.props;

        return <a className="home-page-link" href={link} style={{marginRight: 10}}>
            <div>
                <img src={src} alt={alt} />
            </div>
            <p>{name}</p>
        </a>
    }

}

export default HomePageLink;