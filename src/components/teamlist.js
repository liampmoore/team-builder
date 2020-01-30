import React from 'react';
import TeamMember from './teammember';
import MemberInput from './memberinput';

export default function TeamList(props) {
    return (
        <div className='container'>
            <MemberInput setMembers={props.setMembers} members={props.members}></MemberInput>
            {props.members.map((member, index) => {
                console.log(member, index)
                return <TeamMember key={member.name} index={index} member={member}/>
            })}
        </div>
    )
}