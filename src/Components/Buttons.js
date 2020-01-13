import React, {Component} from 'react';

class Buttons extends Component {
    


    
    
    render(){
        return(
            <div className='btn-container'>
                
            <button className='nav-btn' onClick={()=>this.props.previousBtn()}>
                {"<"} Previous
            </button>
                
                <div className='edit-btns'>
                    <button>Edit</button>
                    <button onClick={()=>this.props.deleteUser()}>Delete</button>
                    <button>New</button>
                </div>
               
                <button className='nav-btn' onClick={()=>this.props.nextBtn()}>
                    Next {">"}
                </button>
            
            </div>
        )
    }
} 

export default Buttons;