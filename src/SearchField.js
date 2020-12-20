import React from 'react';
import './SearchField.css';

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render(){
        return (
            <div className="searchbox">
                <span className="searchicon">Q</span>
                <input className="search" placeholder="Type an ID ..."/>
            </div>
        );

    }

}

export default SearchField;