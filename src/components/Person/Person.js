//Stateless component
import React from "react";

const Person = props => {
  return (
    <div onClick={() => props.clicked(props.id)}>
      {props.name}: {props.age}
    </div>
  );
};

export default Person;
