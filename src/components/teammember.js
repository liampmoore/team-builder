import React, { useState } from 'react';


export default function TeamMember(props) {

    const [editMode, setEditMode] = useState(false);
    const [memberEdit, setMemberEdit] = useState(props.member);


    const handleDoubleClick = (event) => {
        event.stopPropagation()
        event.preventDefault()

        if (editMode) {
            let arr = [...props.members];
            arr[props.index] = memberEdit;
            props.setMembers(arr);
        }

        setEditMode(!editMode);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let arr = [...props.members];
        arr[props.index] = memberEdit;
        props.setMembers(arr);
        setEditMode(false);
    }

    const handleChange = (event) => {
        setMemberEdit({
            ...memberEdit,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='card' onDoubleClick={(event) => { handleDoubleClick(event) }}>

            {editMode ?
                <>
                    <form onSubmit={(event) => { handleSubmit(event) }}>
                        <div className='flexbox'>
                            <div className='flexitem'>
                                <label htmlFor={`name${props.index}`}>Name: </label>
                                <label htmlFor={`email${props.index}`}>Email: </label>
                                <label htmlFor={`role${props.index}`}>Role: </label>
                            </div>
                            <div className='flexitem'>
                                <input id={`name${props.index}`} name='name' type='text' value={memberEdit.name} onChange={event => handleChange(event)} />
                                <input id={`email${props.index}`} name='email' type='text' value={memberEdit.email} onChange={event => handleChange(event)} />
                                <input id={`role${props.index}`} name='role' type='text' value={memberEdit.role} onChange={event => handleChange(event)} />
                            </div>
                        </div>
                        <input type='submit'></input>
                    </form>
                </>
                :
                <>
                    <h3>{props.member.name}</h3>
                    <a href={`mailto:${props.member.email}`}>{props.member.email}</a><br></br>
                    <p>Role: {props.member.role}</p>
                </>
            }
        </div>
    )
}