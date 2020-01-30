import React, {useState} from 'react';


export default function TeamMember(props) {

    const [editMode, setEditMode] = useState(false);
    const [memberEdit, setMemberEdit] = useState(props.member);
   

    const handleSubmit = (event) => {
        event.preventDefault();
        let arr = [...props.members];
        arr[props.index] = memberEdit;
        props.setMembers(arr);
        setEditMode(false);
    }

    const handleChange = (event) => {
        setMemberEdit( {
            ...memberEdit,
            [event.target.name]: event.target.value
        } )
    }

    return (
        <div className='card' onDoubleClick={() => {
            setEditMode(!editMode);
        }}>
            
            {editMode ?
            <>
            <form onSubmit={(event) => {handleSubmit(event)}}>
                <label>Name: <input name='name' type='text' value={memberEdit.name} onChange={event => handleChange(event)}/></label>
                <label>Email: <input name='email' type='text' value={memberEdit.email} onChange={event => handleChange(event)}/></label>
                <label>Role: <input name='role' type='text' value={memberEdit.role} onChange={event => handleChange(event)}/></label>
                <label><input type='submit'></input></label>
            </form>
            </>
            :
            <><h3>{props.member.name}</h3>
            <a href={`mailto:${props.member.email}`}>{props.member.email}</a><br></br>
            <p>Role: {props.member.role}</p>
            <p>Index: {props.index}</p></>}
        </div>
    )
}