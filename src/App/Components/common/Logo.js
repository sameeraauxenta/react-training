import React from 'react';
import { PropTypes } from 'prop-types';
import './Logo.css';

/**
 * Functional component representing Logo stateless component.
 * @param {Object} param0 props
 */
const Logo = ({ src, alt, width }) => <div className="logo-wrapper" >
    <img src={src} alt={alt} style={{width}} />
</div>

// Proptype validations
Logo.propTypes = {
    src     : PropTypes.string.isRequired,
    alt     : PropTypes.string.isRequired,
    width   : PropTypes.number.isRequired
}

export default Logo;