import React from 'react';
import './App.css';
import Table from './Table';
import SearchField from './SearchField';

import { connect } from 'react-redux';

import setRows from './.store/actions/actionData';

class App extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        fetch('https://private-734d5c-testproducts.apiary-mock.com/products')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.props.setRowsFunction(result);
            })
            .catch(e => console.log(e));
    }

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
                    <Table columns={this.props.cols} data={this.props.rows}/>

                </header>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setRowsFunction: rows => {
            dispatch(setRows(rows))
        }
    }
}

function mapStateToProps(state) {
    return {
        cols:state.dataInfo.columns,
        rows:state.dataInfo.rows
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
