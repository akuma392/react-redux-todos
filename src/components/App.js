import Header from './Header';
import { connect } from 'react-redux';
import { addTodos, handleToggle, handleDelete } from '../store/action';
import React from 'react';
function App(props) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="input-block">
          <div className="icon">
            <i className="fas fa-caret-down"></i>
          </div>
          <input
            className="input-text"
            id="text"
            type="text"
            placeholder="what needs to be done?"
            onKeyUp={(event) => props.dispatch(addTodos(event))}
          />
        </div>
        <ul>
          {props.todos.map((todo, i) => {
            return (
              <li key={i}>
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onClick={(event) => props.dispatch(handleToggle(event))}
                  data-set={i}
                  id={i}
                  // onChange={addtodo}
                />
                <p className={todo.isDone ? 'checked' : ''}>{todo.todo}</p>
                <div className="span-delete">
                  <span
                    onClick={(event) => props.dispatch(handleDelete(event))}
                  >
                    X
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <div>
          <p className="action item"></p>
          <p className="action All">All</p>
          <p className="action Active">Active</p>
          <p className="action Completed">Completed</p>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}
export default connect(mapStateToProps)(App);
