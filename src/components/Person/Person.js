//Stateless component
import React from "react";
import './Person.css';

const Person = props => {
  let classes = ['person']
  if (props.name === 'Bryan') classes.push('green');
  if (props.age > 30) classes.push('red');
  
  return (
    <div className={classes.join(' ')} onClick={() => props.clicked(props.id)}>
      {props.name}: {props.age}
    </div>
  );
};

export default Person;
