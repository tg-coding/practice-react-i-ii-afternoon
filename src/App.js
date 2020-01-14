import React, {Component} from 'react';
import data from './data';
import Header from './Components/Header';
import PersonInfo from './Components/PersonInfo';
import NewData from './Components/NewData';
import Buttons from './Components/Buttons';
import ButtonsNew from './Components/ButtonsNew'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: data,
      index: 0,
      view: 'default'
    };
  };

  previousBtn =() => {
    const length = this.state.user.length;
    const index = this.state.index;

    this.setState({index: (index == 0) && length - 1 || index - 1})
  };

  nextBtn = () => {
    const length = this.state.user.length;
    const index = this.state.index;

    this.setState({index: (index + 1) % length})
  };

  deleteUser = () => {
    const deletedUsers = this.state.user
    
    if(this.state.user.length > 1){
      deletedUsers.splice(this.state.index, 1)
      this.setState({user: deletedUsers})
    }
  };
 
  newUser = () => {
    this.setState({view: 'new'})
  }

  // handleChange = e => {
  //   let { value } = e.target;
  //   this.setState({ [e.target.name]: value });
  // };

  // submitUser = () => {
  //   const { title, img, content, id, posts } = this.state;
  //   this.setState({
  //     posts: [
  //       {
  //         id,
  //         title,
  //         img,
  //         content
  //       },
  //       ...posts
  //     ],
  //     id: id + 1,
  //     title: "",
  //     img: "",
  //     content: ""
  //   });
  // };


  render(){
    const {user, index, view} = this.state;
    
    let display = '';

    if(view === 'default'){
      display = (
        <div>
          <PersonInfo 
            user={user}
            index={index}/>
          <Buttons
            previousBtn={this.previousBtn}
            nextBtn={this.nextBtn}
            deleteUser={this.deleteUser}
            newUser={this.newUser}/>
        </div>
      )
    } else if (view === 'new'){
      display = (
        <div>
          <NewData 
            user={user}
            index={index}/>
          <ButtonsNew
            cancelBtn={this.cancelBtn}
            submitBtn={this.submitBtn}/>
        </div>
      )
    }

    return (
      <div className="App">
        <Header/>
        {display}
      </div>
    );
  }
}

export default App;
