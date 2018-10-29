import React from 'react';
import { PropTypes } from 'prop-types';

/**
 * Class representing SearchBar Component.
 */
class SearchBar extends React.Component {

    state = {
        textValue: ''
    }

    static propTypes = {
        placeholder: PropTypes.string.isRequired
    }

    /**
     * This is an event handler which handles the state of text input
     */
    handleOnChange = (event) => {

        this.setState({ textValue: event.target.value });
       
    }

    render () {
        return (
            <div style={{textAlign: 'center'}}>

                {/* 
                    Controlled component. 
                    The state is manged within the container component. 
                    Check onChange event handler.
                */}
                <input 
                    value={this.state.textValue} 
                    style={inputStyles} 
                    placeholder={this.props.placeholder}
                    onChange={this.handleOnChange}
                />

            </div>
        )
    }
}

// Input styles
const inputStyles = {
    width: 400,
    border: 'none',
    height: 30,
    outline: 'none',
    padding: '3px 10px'
}

export default SearchBar;