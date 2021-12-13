import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "coding", count: 0 },
    ]
  }

  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return {...habit, count: habit.count + 1 };
      }
      return item;
    })
    this.setState({ habits: habits });
  }
  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const changedCount = habit.count - 1 > 0 ? habit.count - 1 : 0;
        return {...habit, count: changedCount};
      }
      return item;
    })
    this.setState({ habits });
  }
  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  }
  handleAdd = name => {
    const habits = [...this.state.habits, { id : Date.now(), name, count: 0}];
    this.setState({habits})
  }
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return {...habit, count: 0};
      }
      return habit
    })
    this.setState({habits});
  }
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />

      </>
    )
  }

}

export default App;
