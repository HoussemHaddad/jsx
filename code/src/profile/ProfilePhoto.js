import React from 'react';

function ProfilePhoto(props) {
  return (
    <img src={props.src} alt={props.alt} />
  );
}

export default ProfilePhoto;
