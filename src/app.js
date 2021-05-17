import React from 'react';
import Header from './components/header.js';
import ToDo from './components/todo/todo-connected';

export default function App() {

  return (
    <>
      <Header />
      <ToDo />
    </>
  );
}
