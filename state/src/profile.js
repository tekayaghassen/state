import React from 'react'

const Profile = (props) => {
    return (
        <div>
            <h3>{props.person.fullname}</h3> 
            <h3>{props.person.bio}</h3> 
            <h3>{props.person.proffession}</h3> 
        </div>
    )
}
 export default Profile;