import React, {useState} from 'react';

export default function MemberInput(props) {
    const [newMember, setNewMember] = useState(
        { name: '',
        email: '',
        role: '' });

    const handleChange = event => {
        setNewMember(
            {
                ...newMember,
                [event.target.name]: event.target.value
            }
        )
    }
    

    return (
        <div className='card'>
            <h3>Make a new card here:</h3>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.setMembers(
                    [...props.members,
                    newMember]
                )
            }}>
                <div className='flexbox'>
                    <div className='flexitem'>
                        <label htmlFor='name'>Name: </label>
                        <label htmlFor='email'>Email: </label>
                        <label htmlFor='role'>Role: </label>
                    </div>
                    <div className='flexitem'>
                        <input id='name' name='name' type='text' value={newMember.name} onChange={event => handleChange(event)}/>
                        <input id ='email' name='email' type='text' value={newMember.email} onChange={event => handleChange(event)}/>
                        <input id='role' name='role' type='text' value={newMember.role} onChange={event => handleChange(event)}/>
                    </div>
                </div>
                <input type='submit'></input>
            </form>
            <p style={{color: 'blue', fontSize: '.85rem'}}>Or doubleclick a card below to edit...</p>
        </div>
    )
}