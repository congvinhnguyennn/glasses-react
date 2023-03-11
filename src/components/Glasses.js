import React, { Component } from 'react'
import Glass from './Glass';

export default class Glasses extends Component {
    render() {

        return (
            <div className="container">
                <div className="row glasses">
                    {
                        this.props.listGlasses.map(item => <Glass key={item.id} glass={item} tryGlass={this.props.tryGlass}/>)
                    }
                </div>
            </div>
        )
    }
}
