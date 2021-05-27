import React from 'react';
import './styles.css';

class ChangingComponent extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {
            cycle: "Mount",
            error: "",
        };  
        this.changeState = this.changeState.bind(this)  
    }    
    
    render() {  
        return (  
           <div>   
               <h3>Cycle Method: {this.state.cycle}</h3> 
               <button onClick = {this.changeState} className="updButton">Update</button>
            </div>  
        );  
    }  

    componentDidMount() {  
        console.log('Component Did mount for update example!')  
    }  

    changeState(){ 
        this.setState({cycle:"Update"});
    } 

    shouldComponentUpdate(newProps, newState) {  
        return true;  
    } 

    componentDidUpdate(prevProps, prevState) { 
        
        if(prevState.cycle === "Update"){
            throw new Error("Text was already Updated");
        }  
        console.log('Component Did UPDATE!')  
    }
}

export default ChangingComponent;