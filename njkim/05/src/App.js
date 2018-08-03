import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

class App extends Component {
  id = 3
  selectedColor = ''

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false},
      { id: 1, text: '리액트 소개', checked: true},
      { id: 2, text: '리액트 소개', checked: false}
    ],
    colors: ['#343a40', '#f03e3e', '#12b886', '#228ae6']
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: this.selectedColor
      })
    });
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    
    this.setState({
      todos: nextTodos
    })
  }
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  onColorChange = (e) => {
    this.selectedColor = e.target.style.background
  }

  render() {
    const { input, todos, colors } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      onColorChange
    } = this;



    return (
      <TodoListTemplate 
        form={<Form value={input} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate} />} 
        palette={<Palette colors={colors} onClick={onColorChange} />}>
            <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
    );
  }
}

export default App;

