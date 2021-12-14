import React from 'react';
import Habit from './habit';

const Habits = ({
    habits,
    onIncrement,
    onDecrement
}) => {
    
    
    return (
      <ul>
        {habits.map(habit => (
          <Habit
          key={habit.id}
          habit={habit}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          />
          ))}
      </ul>
      
    )
}

export default Habits;