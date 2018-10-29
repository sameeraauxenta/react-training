import React from 'react';

/**
 * Class representing AddShortCutModal compoomnent.
 */
class AddShortCutModal extends React.Component {

    render () {
        return <div style={modalWrapperStyles}>
            <form style={{border: '1px solid #000'}}>
                <input type="text" name="shortcutName" />
                <input type="text" name="shortcutUrl" />
                <button>Add</button>
            </form>
        </div>
    }
}

// Modal wrapper inline styles
const modalWrapperStyles = {position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.6)'};

export default AddShortCutModal;