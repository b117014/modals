import React,{Component} from 'react';
import Modal from '../components/modal';
import {Route,Switch} from 'react-router-dom';
import VideoStream from '../components/stream';

class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           
            <Switch>
                <Route exact path="/" render={props=><Modal {...props}/>}/>
                <Route exact path="/stream/:id" render={props=> <VideoStream {...props}/>} />
            </Switch>
        )
    }
}

export default Main;