import React from "react";
import ReactDOM from "react-dom";

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            number1: "0",
            number2: "0",
            result: ""
            
        };

        this.number1Changed = this.number1Changed.bind(this)
        this.number2Changed = this.number2Changed.bind(this)
        this.additionHandler = this.additionHandler.bind(this)
        this.subtractionHandler = this.subtractionHandler.bind(this)
        this.multiplyHandler = this.multiplyHandler.bind(this)
        this.divisionHandler = this.divisionHandler.bind(this)

    }

    number1Changed(event) {
        this.setState({
            number1: parseInt(event.target.value)

        });

    }

    number2Changed(event) {
        this.setState({
            number2: parseInt(event.target.value)

        });

    }

    additionHandler() {

        this.setState({
            result: this.state.number1 + this.state.number2,
        })

    }

    subtractionHandler() {
        this.setState({
            result: this.state.number1 - this.state.number2,
        })
    }

    multiplyHandler() {
        this.setState({
            result: this.state.number1 * this.state.number2,
        })
    }

    divisionHandler() {
        this.setState({
            result: this.state.number1 / this.state.number2,
        })
    }

    render() {

        return (
            <div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 offset-md-5">
                            <h1>Calculator</h1>
                            <hr></hr>
                            <h1 >{this.state.result} </h1>

                            <input onChange={this.number1Changed} type="number" />
                            <br />
                            <br />
                            
                            <input onChange={this.number2Changed} type="number" />
                            <br />
                            <br />
                            
                            <button className="btn btn-primary" onClick={this.additionHandler}>+</button>
                            &nbsp;&nbsp;
                            <button className="btn btn-primary" onClick={this.subtractionHandler}>-</button>
                            &nbsp;&nbsp;
                            <button className="btn btn-primary" onClick={this.multiplyHandler}>x</button>
                            &nbsp;&nbsp;
                            <button className="btn btn-primary" onClick={this.divisionHandler}>/</button>

                        </div>
                    </div>
                </div>




            </div>

        );
    }

}

ReactDOM.render(<Calculator />, document.getElementById("root"))