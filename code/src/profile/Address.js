import React from 'react';

function Address(props) {
  return (
    <div>
      <p>{props.street}</p>
      <p>{props.city}, {props.state} {props.zip}</p>
    </div>
  );
}

export default Address;
