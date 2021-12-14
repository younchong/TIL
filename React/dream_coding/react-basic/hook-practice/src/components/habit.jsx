import React, { memo } from 'react';

const Habit = memo(({habit, onIncrement, onDecrement}) => {
  
  const handleIncrement = () => {
    onIncrement(habit);
  }
  const handleDecrement = () => {
    onDecrement(habit)
  }
  return(
    <div>
      <li className="habit">
        <span className="habit-name">{habit.name}</span>
        <button 
        className="habit-button habit-increase"
        onClick={handleIncrement}
        >
          <i className="far fa-plus-square"></i>
        </button>
        <button 
        className="habit-button habit-decrease"
        onClick={handleDecrement}
        >
          <i className="far fa-minus-square"></i>
        </button>
        <span className="habit.count">{habit.count}</span>
      </li>
    </div>
    
  );
})

export default Habit;