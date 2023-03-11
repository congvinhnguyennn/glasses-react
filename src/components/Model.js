import React, { Component } from 'react'

export default class Model extends Component {

    

    renderTryingGlass() {
        return (
            <img className="trying-glass" src={this.props.tryingGlass}></img>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row model">
                    <div className="col col-12 col-md-6">
                        <div className="model-imgs">
                            <img className="model-bg" src="./images/model.jpg"></img>
                            <img className="trying-glass" src="./images/v7.png"></img>
                            <div className="glass-info">
                                <h4>FENDI F8750</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6">
                        <div className="model-imgs try-model">
                            <img className="model-bg" src="./images/model.jpg"></img>
                            {this.renderTryingGlass()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
