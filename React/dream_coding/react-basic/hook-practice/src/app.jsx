import './app.css';
import React, { useCallback, useState } from 'react';
import Habits from './components/habits';
import NavBar from './components/navBar';
import AddForm from './components/addForm';


const App = () => {
  const [habits, setHabits] = useState([
    {id: 1, name: "coding", count: 0},
    {id: 2, name: "training", count: 0},
    {id: 3, name: "listening music", count: 0}
  ]);
  
  const handleIncrement = useCallback(habit => {
    setHabits(habits => 
      habits.map(item => {
        if (item.id === habit.id) {
          return {...habit, count: habit.count + 1};
        }
        return item;
      })
      );
  }, [])

  const handleDecrement = useCallback(habit => {
    setHabits(habits => 
      habits.map(item => {
        if (item.id === habit.id) {
          let count = habit.count - 1 > 0 ? habit.count - 1 : 0
          return {...habit, count: count};
        }
        return item;
      })
      );
  }, [])

  const handleAdd = useCallback(name => {
    setHabits([...habits,{id: Date.now(), name, count: 0}])
  })

 const handleReset = useCallback(() => {
   setHabits(habits => 
    habits.map(habit => {
      if (habit.count !== 0) {
        return {...habit, count: 0};
      }
      return habit;
     }))
 })

 const handleRemove = useCallback(habit => {
   setHabits(habits =>
    habits.filter(item => item.id !== habit.id))
 })

  return (
    <>
      <NavBar totalCount={habits.filter(item => item.count > 0).length} />
      <AddForm onAdd={handleAdd}/>
      <Habits 
      habits={habits}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onRemove={handleRemove}
      />
      <button className="reset-button" onClick={handleReset}>Reset</button>
    </>
  );
};

export default App;
