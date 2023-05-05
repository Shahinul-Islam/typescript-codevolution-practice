import React from 'react';
interface PersonProps {
    personName:{
        firstName:string
        lastName:string
    }
}

const Person = ({personName}:PersonProps) => {
    const {firstName,lastName} = personName;
    return (
        <div>
            <h2>{firstName} {lastName}</h2>
        </div>
    );
};

export default Person;