import React from 'react';
import { PropTypes } from 'prop-types';

/**
 * Function representing ShortCut stateless component.
 * @param {Object} param0 Props
 */
const ShortCut = ({ url, name, icon, alt }) =>  <a href={url}>
    <img src={icon} alt={alt} />
    <p style={{color: '#fff'}}>{name}</p>
</a>

// Proptype validations
ShortCut.propTypes = {
    url : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

export default ShortCut;