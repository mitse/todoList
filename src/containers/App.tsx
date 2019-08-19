import React from 'react';
import AddTodo from './AddTodo';
import Layout from '../components/Layout';
import TodoList from './TodoList';
import ModalContainer from './ModalContainer';

const App = () => (
      <Layout>
        <ModalContainer/>
        <AddTodo />
        <TodoList />
    </Layout>
)

export default App

