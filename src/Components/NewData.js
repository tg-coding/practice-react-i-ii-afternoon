import React from 'react';

function NewData(props) {
    
    const {user, index} = props

    let list = user[index].favoriteMovies.map((element, index) => {
        return <li key={index}> {element} </li>
    });
       
        return(
            <div className='info-container'>
                <h1 className='userIndex'>
                    /{user.length}
                </h1>

                <div className='userInfo'>
                    <h1 className='personInfo'>
                        <input placeholder='First Name'/><input placeholder='Last Name'/>
                    </h1>

                    <p>
                        <strong>From: </strong> <input placeholder='City'/><input placeholder='Country'/>
                    </p>

                    <p>
                        <strong>Job Title: </strong><input placeholder='Job Title'/>
                    </p>

                    <p>
                        <strong>Employer: </strong><input placeholder='Employer'/>
                    </p>

                    <p>
                        <strong>Favorite Movies: </strong>
                    </p>

                    <ol>
                    <li><input placeholder='Movie 1'/></li>
                    <li><input placeholder='Movie 2'/></li>
                    <li><input placeholder='Movie 3'/></li>
                    </ol>
                </div>

            </div>
        )
} 

export default NewData;