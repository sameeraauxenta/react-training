// This file contains a stateless component.
// You need to import React into the scope of the Module.The reason is React uses its top level api From imported 'React' variable internally.
// Read more: https://reactjs.org/docs/react-api.html
import React from 'react';
import { PropTypes } from 'prop-types';

/**
 * Function representing Logo component.
 * @param {*} param0 Object
 */
const Logo = ({ src, alt }) => <img src={src} alt={alt} style={styles}/>;

Logo.propTypes = {
    src: PropTypes.string.isRequired
}

const styles = {
    width: 200,
    position: "absolute",
    top: 100,
    marginLeft: '50%',
    left: -100
};

export default Logo;