import React from 'react';
import ReactDOM from 'react-dom';

class MyButton extends React.Component{
    buttonClicked(event) {
        let store = event.target.value;
        if (store%2===0){
          alert("The number you have entered is an Even Number")
        }
        else {
           alert("The number you have entered is not an Even Number")
        }
    }
    inputChanged(event){
        console.log(event.target.value)
    }


    render() {
        return (
         <p>
            <br />
            <input type = "number" onChange = {this.inputChanged} />
            <br />
            <button onClick = {this.buttonClicked}>Click Me</button>
         </p>   
        );
    }
}

ReactDOM.render( <MyButton />, document.getElementById('root') );