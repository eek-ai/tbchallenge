import React from 'react';
import './Table.css';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    clickRow(id){
        let fav=localStorage.getItem('fav');
        let favArr;
        if(fav!=null){
            favArr=fav.split(',');
        } else favArr=[];

        const index = favArr.indexOf(""+id);
        if (index > -1) {
            favArr.splice(index, 1);
        } else {
            favArr.push(id);
        }
        localStorage.setItem('fav', favArr.join(','));
        this.forceUpdate()
    }

    isChecked(id){
        let fav=localStorage.getItem('fav');
        let favArr;
        if(fav!=null){
            favArr=fav.split(',');
        } else favArr=[];

        const index = favArr.indexOf(""+id);
        if (index > -1) {
            return true;
        } else {
            return false;
        }
    }

    render(){
        return (
            <div className="table">
                <div className="row header">
                    {this.props.columns&&Object.keys(this.props.columns).map((fieldName,h)=> (
                        <div className="cell" key={h}>{(this.props.columns[fieldName].title === undefined) ? fieldName : this.props.columns[fieldName].title}</div>
                    ))}
                </div>
                {this.props.data&&this.props.columns&&this.props.data.map((row,i)=> {
                    if(this.props.filters==''||this.props.filters==row['id'])
                    return (
                        <div className={"row regularRow" + ((row['active'] != true) ? ' inactive' : '') + (this.isChecked(row['id']) ? ' selected' : '')} key={i} onClick={()=>{this.clickRow(row['id']);console.log('click')}}>
                            {Object.keys(this.props.columns).map((fieldName, j) => (
                                <div className={"cell " + this.props.columns[fieldName].style}
                                     key={j}>{row[fieldName]}</div>
                            ))}
                        </div>
                    )
                })}

            </div>
        );

    }

}

export default Table;