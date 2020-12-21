import React from 'react';
import Images from './Images';

class Label extends React.Component {
    render(){
        return (
            <div className="multiple">
                <Images icon={this.props.icon}/>
                {Array.isArray(this.props.data)&&this.props.data.join(', ')}
            </div>
        )
    }

}

export default Label;