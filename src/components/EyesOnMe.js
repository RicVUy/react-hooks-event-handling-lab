// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe(){
    function handleChange(){
        console.log('Good!')
    }
    function handleChange1(){
        console.log('Hey! Eyes on me!')
    }
  return (
    <div>
      <button             
            onFocus={handleChange}
            onBlur={handleChange1}>
             Eyes on me</button>
    </div>
  );
};

export default EyesOnMe;

/*function Example() {
    return (
      <div
        tabIndex={1}
        onFocus={(e) => {
          if (e.currentTarget === e.target) {
            console.log('focused self');
          } else {
            console.log('focused child', e.target);
          }
          if (!e.currentTarget.contains(e.relatedTarget)) {
            // Not triggered when swapping focus between children
            console.log('focus entered self');
          }
        }}
        onBlur={(e) => {
          if (e.currentTarget === e.target) {
            console.log('unfocused self');
          } else {
            console.log('unfocused child', e.target);
          }
          if (!e.currentTarget.contains(e.relatedTarget)) {
            // Not triggered when swapping focus between children
            console.log('focus left self');
          }
        }}
      >
        <input id="1" />
        <input id="2" />
      </div>
    );
  }*/

//export default Example