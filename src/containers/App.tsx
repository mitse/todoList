import React from 'react';
import AddTodo from './AddTodo';
import Layout from '../components/Layout';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import ModalContainer from './ModalContainer';

const App = () => (
      <Layout>
        <ModalContainer/>
        <AddTodo />
        <TodoList />
    </Layout>
)

const mapStateToProps = state => {
  return { todos: state.todos,
  state}
}

export default connect(mapStateToProps)(App)
