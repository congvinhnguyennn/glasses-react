import React, { Component } from 'react'

export default class Glass extends Component {

    render() {
        let glass = this.props.glass;

        return (
            <div className="glass col col-6 col-sm-4 col-md-3 col-xl-2">
                <img src={glass.img} alt="..." onClick={() => {
                    this.props.tryGlass(glass.img);
                    console.log(glass.img);
                }}></img>
            </div>
        )
    }
}
