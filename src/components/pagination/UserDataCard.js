import React from 'react';
import './UserDataCard.css';

const UserDataCard = ({currentUserData}) => {
  return (
    <div className='userdatacard'>
        {currentUserData.map((User) => (
            <div className='userdatabox' key={User.id}>
                <p>{User.first_name} {User.last_name}</p>
                <p>{User.email}</p>
            </div>
        ))}
    </div>
  )
}

export default UserDataCard