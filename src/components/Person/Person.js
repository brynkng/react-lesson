//Stateless component
import React from "react";
import './Person.css';

const Person = props => {
  return (
    <div className='person' onClick={() => props.clicked(props.id)}>
      {props.name}: {props.age}
    </div>
  );
};

export default Person;
