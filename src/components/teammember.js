import React from 'react';


export default function TeamMember(props) {
    return (
        <div className='card'>
            <h3>{props.member.name}</h3>
            <a href={`mailto:${props.member.email}`}>{props.member.email}</a><br></br>
            <p>Role: {props.member.role}</p>
            <p>Index: {props.index}</p>
        </div>
    )
}