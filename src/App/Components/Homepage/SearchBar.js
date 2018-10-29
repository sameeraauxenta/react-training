import React from 'react';
import { PropTypes } from 'prop-types';


class SearchBar extends React.Component {

    state = {
        textValue: ''
    }

    static propTypes = {
        placeholder: PropTypes.string.isRequired
    }

    handleOnChange = (event) => {

        this.setState({
            textValue: event.target.value
        });
       
    }

    render () {
        return (
            <div style={{textAlign: 'center'}}>
                <input 
                    value={this.state.textValue} 
                    style={inputStyles} 
                    placeholder={this.props.placeholder}
                    onChange={this.handleOnChange}
                    name="textInput"
                />
            </div>
        )
    }
}

const inputStyles = {
    width: 400,
    border: 'none',
    height: 30,
    outline: 'none',
    padding: '3px 10px'
}

export default SearchBar;