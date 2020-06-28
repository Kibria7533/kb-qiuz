import React,{Component}from 'react';
import './App.css';
import Bank from './Bank'
import Ques from './Ques';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      score:0,
      response:0
    }
  }
  async componentDidMount(){
   await Bank().then(res=>{
     this.setState({data:res})
    })
  }
  checking=(ans,correct)=>{
   if(ans===correct){
       this.setState({score:this.state.score+1});
   }
   this.setState({
     response:this.state.response<5 ? this.state.response+1:5
   })
  }
  playagain=async (e)=>{
    await Bank().then(res=>{
      this.setState({data:res,score:0,response:0})
     })
    
  }
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.data.length>0 &&
          this.state.response<5 &&
          this.state.data.map(item=>{
            return(<Ques key={item.questionId} q={item.question} check={ans=>this.checking(ans,item.correct)} ans={item.answers}/>)
             
          })}
        {this.state.response===5? (<div><h1>Your score:{this.state.score}</h1>
        <button onClick={this.playagain}>Play again</button>
        </div>):null}
        </header>
        
      </div>
    );
  }
 
}

export default App;
