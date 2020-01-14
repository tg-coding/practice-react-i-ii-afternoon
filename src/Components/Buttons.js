import React, {Component} from 'react';

class Buttons extends Component {
    
    
    render(){
        return(
            <div className='btn-container'>
                
            <button className='nav-btn' onClick={()=>this.props.previousBtn()}>
                {"<"} Previous
            </button>
                
                <div>
                    <button className='edit-btns'>Edit</button>

                    <button onClick={()=>this.props.deleteUser()} className='edit-btns'>Delete</button>

                    <button onClick={()=>this.props.newUser()} className='edit-btns'>New</button>
                </div>
               
                <button className='nav-btn' onClick={()=>this.props.nextBtn()}>
                    Next {">"}
                </button>
            
            </div>
        )
    }
} 

export default Buttons;