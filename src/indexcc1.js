import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-12">

                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a class="navbar-brand" href="#">Awesome Company</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                    
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                            
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

class Title extends React.Component{
    render() {
        return (
            <div class="container-fluid">


            <div class="row">
                <div class="offset-md-3 col-md-6">
                    <h1 class="display-4">AwesomeCompany.com</h1>
                    <hr></hr>
                </div>
    
            </div>
            </div>   
        )
    }
}
class Information extends React.Component{
    render() {
    return (
    <div class="container-fluid">

        <div class="row">
            <div class="col-md-3">
                

              <h5>Vision</h5>
                <hr></hr>
                <p> To offer the best educational,consultancy and remote work services by aide of suitable training thereby creating a win win situation for prospective students as well as prospective clients
           </p>
          </div>
            <div class="col-md-3">

                <h5>Education and Training</h5>
                <hr></hr>
                <p>We have started offering Full-Stack Web Development FULL-time 9am-5pm Mon-Fri for 24 weeks)for Job seekers who are at least 12th pass (any stream)</p>

            </div>
            <div class="col-md-3">

                
                <h5> Future Plans</h5>
                <hr></hr>
                <ul>
                    <li>To train and set up in house team of remote developers who sit in our office but work for various software companies worldwide</li>
                    <li>Enter into IT consultancy services</li>
                    <li>Introduction of flexi tracks for existing software developers who want to update their knowledge beyond the basics in a quicker manner without compromise on quality</li>
                    <li>Offer courses in new Computing,ICT and ICT enabled areas such AI, Data Science and Digital Marketing</li>
                    <li>Collaboration with like minded universities for offering school pass outs Work while you graduate so they are easily Employable after Graduation</li> 
                </ul>
            </div>
            <div class="col-md-3">

                <h5>Important Notice</h5>
                <hr></hr>
                <ul>
                    <li>Legal Jurisduction for all disputes are courts of Bengaluru</li>
                    <li>We have not authorised any agent/institution/body/individual apart from those mentioned on our website to represent us and we are not liable for any such loss commited by an imposter</li>
                    <li>All communication and information is given our website and this is the sole point for all interaction with us</li>
                    
                </ul>
            </div>
        </div>
    </div>
    )
}
}

class App extends React.Component{
    render(){
        return(
            <div className="containder-fluid">
                
                <Navbar />
                <Title/>
                <Information />
                
            </div>
        )
    }
}


ReactDOM.render( <App />, document.getElementById('root') );