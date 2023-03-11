import React, { Component } from 'react'
import Model from './Model'
import Glasses from './Glasses'

export default class GlassExcercise extends Component {

    listGlasses = [
        {id: 1, img: "./images/v1.png"},
        {id: 2, img: "./images/v2.png"},
        {id: 3, img: "./images/v3.png"},
        {id: 4, img: "./images/v4.png"},
        {id: 5, img: "./images/v5.png"},
        {id: 6, img: "./images/v6.png"},
        {id: 7, img: "./images/v7.png"},
        {id: 8, img: "./images/v8.png"},
        {id: 9, img: "./images/v9.png"}
    ];

    state = {
        tryingGlass: ''
    }

    tryGlass = (name) => {
        this.setState({
            tryingGlass: name
        })
    }

    render() {
        return (
            <div>
                <Model tryingGlass={this.state.tryingGlass}/>
                <Glasses listGlasses={this.listGlasses} tryGlass={this.tryGlass}/>
            </div>
        )
    }
}
