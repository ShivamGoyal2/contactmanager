import React from 'react'
import icon from '../images/icon.png';
import profile from '../images/profile.png';

const ContactList = (props) => {
// console.log(props);

const deleteContact = () => {

}
    return (
        <div>
            {
                props !== null ? props.contacts.map((item) => {
                    return (
                    <div style={{border: '2px solid black', padding: '10px', margin : '5px'}} >
                        <div style={{float : 'left', padding: '3px', margin : '5px'}}>
                        <img style={{width:"40px", height:"40px"}} src={profile} alt="user"></img>
                        </div>
                        <div style={{float : 'left', padding: '3px', margin : '5px'}}>
                            <span>{item.name}</span><br />
                            <span>{item.email}</span>
                        </div>
                        <div>
                            <img style={{width:"40px", height:"40px", color: 'red'}} src={icon} alt="delete" onClick={()=> deleteContact}></img>
                        </div>
                    </div>
                    )
                }) : <div>No data</div>
            }
        </div>
    );
};

export default ContactList;