import React from "react";

const AddPerson = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <input type="text" placeholder="name" name="name"/>
      <input type="text" placeholder="age" name="age"/>
      <input type="submit" />
    </form>
  );
};

export default AddPerson;
