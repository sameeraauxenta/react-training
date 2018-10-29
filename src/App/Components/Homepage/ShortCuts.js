import React, { Fragment }  from 'react';
import ShortCut from './ShortCut';
import AddShortCutModal from './AddShortCutModal';

class ShortCuts extends React.Component {

    state={
        shortCuts: [
            { name: 'Google', url: 'https://www.google.com', icon: 'chrome-search://ntpicon/size/24@1.25x/https://stackoverflow.com/' },
            { name: 'Facebook', url: 'https://www.google.com', icon: 'chrome-search://ntpicon/size/24@1.25x/https://stackoverflow.com/' }
        ],
        isModalVisible: false
    }

    handleModalVisibility = () => {
        this.setState({
            isModalVisible: true
        })
    }

    render() {

        const { shortCuts, isModalVisible } = this.state;

        return <Fragment>
            <div>
                {shortCuts.map((item, index) => <ShortCut name={item.name}  url={item.url} icon={item.icon} alt={item.name} key={index} />)}

                <button onClick={this.handleModalVisibility}>Add</button>
        
            </div>
            {isModalVisible && <AddShortCutModal />}
        </Fragment>
    }
}


export default ShortCuts;