// Code Keypad Component Here
import React from 'react';
function Keypad (){
    function handleChange(){
        console.log(`Entering password...`)
    }
    return (
 <div>
    <input
    type="password"
    onChange={handleChange}
    placeholder="Enter password"
    />
 </div>
    )
}

export default Keypad;

/*function ChangeItUp() {
    function handleChange(event) {
      console.log(`${event.target.name}: ${event.target.value}`);
    }
  
    return (
      <div>
        <input
          type="text"
          name="search"
          onChange={handleChange}
          placeholder="Enter search term..."
        />
  
        <select name="filter" onChange={handleChange}>
          <option value="all">Select a filter...</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    );
  }*/