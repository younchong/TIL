import React from 'react';
import Habit from './habit';

const Habits = ({
    habits,
    onIncrement,
    onDecrement,
    onRemove
}) => {
    
    
    return (
      <ul>
        {habits.map(habit => (
          <Habit
          key={habit.id}
          habit={habit}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onRemove={onRemove}
          />
          ))}
      </ul>
      
    )
}

export default Habits;