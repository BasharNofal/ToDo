import React from 'react';
import Header from './components/todo/header.js';
import ToDo from './components/todo/todo-connected';
import PaginationProvider from './context/pagination';
import SortProvider from './context/sort'

export default function App() {

  return (
    <SortProvider>
      <PaginationProvider>
        <Header />
        <ToDo />
      </PaginationProvider>
    </SortProvider>
  );
}
