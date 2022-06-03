import React from 'react';
import './App.css';
import NiceHeader from './components/NiceHeader';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='app'>
      <NiceHeader name='Rafael' />
      <TodoList />
    </div>
  );
}

export default App;
