import React from 'react';


class AddShortCutModal extends React.Component {

    render () {
        return <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.6)'}}>
            <form style={{border: '1px solid #000'}}>
                <input type="text" name="shortcutName" />
                <input type="text" name="shortcutUrl" />
                <button>Add</button>
            </form>
        </div>
    }
}

export default AddShortCutModal;