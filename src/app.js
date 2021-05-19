import React from 'react';
import Header from './components/todo/header.js';
import ToDo from './components/todo/todo-connected';
import PaginationProvider from './context/pagination';
import SortProvider from './context/sort';
import AuthProvider from './context/auth';
import LoginProvider from './context/login';

export default function App() {
  return (
    <LoginProvider>
      <AuthProvider>
        <SortProvider>
          <PaginationProvider>
            <Header />
            <ToDo />
          </PaginationProvider>
        </SortProvider>
      </AuthProvider>
    </LoginProvider>
  );
}
