import React from 'react';
import './Table.css';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render(){
        return (
            <div className="table">
                <div className="row header">
                    {this.props.columns&&Object.keys(this.props.columns).map((fieldName,h)=> (
                        <div className="cell" key={h}>{(this.props.columns[fieldName].title === undefined) ? fieldName : this.props.columns[fieldName].title}</div>
                    ))}
                </div>
                {this.props.data&&this.props.columns&&this.props.data.map((row,i)=>(
                    <div className={"row regularRow" + ((row['active']!=true)?' inactive':'')} key={i}>
                        {Object.keys(this.props.columns).map((fieldName,j)=> (
                            <div className={"cell "+this.props.columns[fieldName].style} key={j}>{row[fieldName]}</div>
                        ))}
                    </div>
                ))}

            </div>
        );

    }

}

export default Table;