import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        output: "",
        value: ""
      };
      this.inputChange = this.inputChange.bind(this);
      this.inputCheck = this.inputCheck.bind(this);
    }
    inputChange(event) {
      if (event.target.value === "") this.setState({ output: "" });
      this.setState({
        val: event.target.value
      });
    }
    inputCheck(event) {
      if (event.target.value % 2 === 0)
        {this.setState({ output: "Even" })}
      else {this.setState({ output: "Not an Even Number" });}
    }
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <strong>Please Enter a Number below:</strong>
              <br></br>
              <br></br>
              
              <input type="text"
                className="form-control"
                placeholder="Enter any number"
                onChange={this.inputChange}
              />
              <br />
              <button className="btn btn-info"
                onClick={this.inputCheck}
                value={this.state.val}>
                show output
              </button>
              <br />
              <br />
              <p>{this.state.output}</p>
            </div>
          </div>
        </div>
      );
    }
   }
   
   class App extends React.Component {
    render() {
      return <Input />;
    }
   }
   ReactDOM.render(<App />, document.getElementById("root"));
   