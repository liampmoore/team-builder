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
            <form onSubmit={(event) => {
                event.preventDefault();
                props.setMembers(
                    [...props.members,
                    newMember]
                )
            }}>
                <label><strong>Name: </strong><input name='name' type='text' value={newMember.name} onChange={event => handleChange(event)}/></label>
                <label><strong>Email: </strong><input name='email' type='text' value={newMember.email} onChange={event => handleChange(event)}/></label>
                <label><strong>Role: </strong><input name='role' type='text' value={newMember.role} onChange={event => handleChange(event)}/></label>
                <label><input type='submit'></input></label>
            </form>
        </div>
    )
}