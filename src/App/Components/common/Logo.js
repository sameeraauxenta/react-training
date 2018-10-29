import React from 'react';
import { PropTypes } from 'prop-types';
import './Logo.css';

const Logo = ({ src, alt, width }) => <div className="logo-wrapper" >
    <img src={src} alt={alt} style={{width}} />
</div>

Logo.propTypes = {
    src     : PropTypes.string.isRequired,
    alt     : PropTypes.string.isRequired,
    width   : PropTypes.number.isRequired
}

export default Logo;