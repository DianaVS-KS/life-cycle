import React, { Component } from 'react'
import '../LifeCycle/styles.css'

export default class ComponentWillUnmount extends Component {
    constructor(props){
        super(props)
            this.state = {
                show: true,
            } 
    }

    render() {
        return (
            <>
              <p>{this.state.show ? <Child/> : null}</p>
               <button className="updButton" 
               onClick={() => {this.setState({show: !this.state.show})}}>
                {this.state.show ? "Disappear Text" : "Show Text"}
                </button>
            </>
        )
    }

    componentDidUpdate(prevProps, prevState) {  
        if(this.state.show) console.log('Component Did update in the unmount example!')  
    }
    
    componentDidMount() {  
        console.log('Component did mount for unmount example!')  
    }

}

export class Child extends Component{
    componentWillUnmount(){
        console.log('Component unmounted');
    }
    
    render(){
        return(
            <>
            This text will disappear! :O
            </>
        )
    }
}