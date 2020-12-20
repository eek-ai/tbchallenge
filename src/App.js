import React from 'react';
import './App.css';
import Table from './Table';
import SearchField from './SearchField';

import { connect } from 'react-redux';


class App extends React.Component {

    render(){
        return (
            <div className="App">
                <header className="App-header">

                    <p>
                        Table
                    </p>
                    <div className="abovetable">
                        <SearchField/>
                    </div>
                    <Table headers={this.props.data.headers} data={this.props.data.rows}/>

                </header>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data:state.dataInfo.data
    }
}

export default connect(mapStateToProps)(App);
