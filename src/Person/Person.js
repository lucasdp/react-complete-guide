import React from 'react';
import './Person.css';

const person = (props) => {


  return (
    <div className="Person"  onClick={props.click}>
      <p>
        My name is {props.name}
      </p>
      <p>
        I'm  {
        props.age ? props.age : Math.floor(Math.random() * 30)
      } years old;
      </p>
      <small>
        {props.children}
      </small>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default person;
