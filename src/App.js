import React, {Component} from 'react';
import data from './data';
import Header from './Components/Header';
import PersonInfo from './Components/PersonInfo';
import Buttons from './Components/Buttons';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: data,
      index: 0,
    };

    this.previousBtn = this.previousBtn.bind(this);
    this.nextBtn = this.nextBtn.bind(this);
    this.deleteUser = this.deleteUser.bind(this)
  };

  previousBtn(){
    if(this.state.index < 2){
        this.setState({index: this.state.user.length - 1});
    } else {
        this.setState({index: this.state.index -= 1})
    }
  };

  nextBtn(){
    if(this.state.index > 23){
        this.setState({index: 0});
    } else {
        this.setState({index: this.state.index += 1})
    }
  };


  deleteUser() {
    const deletedUsers = this.state.user
    deletedUsers.splice(this.state.index, 1)
    this.setState({user: deletedUsers})
  };


  // deleteUser() {
  //   const filteredUsers = this.state.user.filter(element => element.id !== this.state.index)
  //   this.setState({user: filteredUsers, index: this.state.index})
  // };

 


  render(){
    const {user, index} = this.state;

    return (
      <div className="App">
       
        <Header/>
        
        <PersonInfo 
          user={user}
          index={index}
        />
        
        <Buttons
          previousBtn={this.previousBtn}
          nextBtn={this.nextBtn}
          deleteUser={this.deleteUser}
        />
      
      </div>
    );
  }
}

export default App;
