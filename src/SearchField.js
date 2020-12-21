import React from 'react';
import './SearchField.css';
import { connect } from 'react-redux';

import imgSearch from './images/search.svg';

import setFilters from './.store/actions/actionFilter';

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event){
        this.props.setFiltersFunction(event.target.value.trim());
    }

    render(){
        return (
            <div className="searchbox">
                <img src={imgSearch} height="30" className="searchicon"/>
                <input className="search" placeholder="Type an ID ..." defaultValue={this.props.value} onChange={this.onChangeHandler}/>
            </div>
        );

    }

}

function mapDispatchToProps(dispatch) {
    return {
        setFiltersFunction: filters => {
            dispatch(setFilters(filters))
        }
    }
}

export default connect(null,mapDispatchToProps)(SearchField);