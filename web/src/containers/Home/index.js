import React, { Component } from 'react';
import Notes from '../../components/Notes';
import './styles.css'; 

export  default class Home extends Component {
    render() {
        return ( 
            <div className = { "home-container" }>
                <Notes { ...this.props }/>
            </div>
        )
    }
} 