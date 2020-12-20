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
                    {this.props.headers&&this.props.headers.map((header)=>(
                        <div className="cell">{header}</div>
                    ))}
                </div>
                {this.props.data&&this.props.data.map((row,i)=>(
                    <div className={"row regularRow" + ((i==2)?' inactive':'')}>
                        {row.map((cellData)=> (
                            <div className="cell left">{cellData}</div>
                        ))}
                    </div>
                ))}

            </div>
        );

    }

}

export default Table;