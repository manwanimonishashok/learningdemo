import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component{
    render() {
        return <h1>Login</h1>
    }
}

class Username extends React.Component{
    render(){
        return(
            <div className="form-group">
                <label>Username:&nbsp;</label>
                <input type="email" className="form-control"></input>
            </div>
        )
    }
}

class Password extends React.Component{
    render(){
        return(
            <div className="form-group">
                <label>Password:&nbsp;&nbsp;</label>
                <input type="password" className="form-control"></input>
            </div>
        )
    }
}

class Button extends React.Component{
    render(){
        return <button type="submit" className="btn btn-info">Login</button>
    }
}



class App extends React.Component{
    render(){
        return(
            <div className="form-group">
            <div className="row">
            <div class="column">
                        <Login />
                        <hr></hr>
                        <Username />
                        <br></br>
                        <Password />
                        <br></br>
                        <Button />
                    </div>
                </div>
            </div>

            
         
        )
    }
}

ReactDOM.render( <App />, document.getElementById('root') );