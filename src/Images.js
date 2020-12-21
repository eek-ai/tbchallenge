import React from 'react';
import Gear from './images/gear.svg';
import Tree from './images/tree.svg';
import Heart from './images/heart.svg';
import HeartRed from './images/heartred.svg';
import './Images.css';

class Images extends React.Component {
    selectImage(){
        switch (this.props.icon) {
            case 'gear':
                return Gear;
            case 'tree':
                return Tree;
            case 'heart':
                return Heart;
            case 'heartred':
                return HeartRed;
            default:
                return '';
        }
    }

    render(){
        return (
            <div className="icon">
                <img src={this.selectImage()} height="20" alt=""/>
            </div>
        )
    }

}

export default Images;