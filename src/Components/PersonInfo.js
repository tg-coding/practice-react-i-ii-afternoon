import React from 'react';

function PersonInfo(props) {
    
    const {user, index} = props

    let list = user[index].favoriteMovies.map((element, index) => {
        return <li key={index}> {element} </li>
    });
       
        return(
            <div className='info-container'>
                <h1 className='userIndex'>
                    {index + 1}/{user.length}
                </h1>

                <h1 className='personInfo'>
                    {user[index].name.first} {user[index].name.last}
                </h1>

                <p>
                    <strong>From: </strong>{user[index].city}, {user[index].country}
                </p>

                <p>
                    <strong>Job Title: </strong>{user[index].title}
                </p>

                <p>
                    <strong>Employer: </strong>{user[index].employer}
                </p>

                <p>
                    <strong>Favorite Movies: </strong>
                </p>

                <ol>
                    {list}
                </ol>

            </div>
        )
} 

export default PersonInfo;