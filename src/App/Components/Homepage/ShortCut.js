import React from 'react';
import { PropTypes } from 'prop-types';

const ShortCut = ({ url, name, icon, alt }) =>  <a href={url}>
    <img src={icon} alt={alt} />
    <p style={{color: '#fff'}}>{name}</p>
</a>

ShortCut.propTypes = {
    url : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

export default ShortCut;