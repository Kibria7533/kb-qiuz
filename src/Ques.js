import React, { Component } from 'react';

class Ques extends Component {
    constructor(){
        super()
        this.state={
            ans:[]
        }
    }
    componentDidMount(){
        this.setState({ans:this.props.ans})
    }
    setanswer=e=>{
        
        this.setState({ans:e})
    }
    render() {
        return (
            <div>
        <h2>{this.props.q}</h2>
        {this.state.ans.map(item=>{
            return(<button onClick={()=>{this.setanswer([item]);this.props.check(item)}} key={item}>{item}</button>)
            
        })}
                
            </div>
        );
    }
}

export default Ques;