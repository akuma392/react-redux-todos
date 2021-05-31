import { createStore } from 'redux';

let intialValue = {
  todos: [{ todo: 'learn react', isDone: false }],
};

function todosReducer(state = intialValue, action) {
  let updatedTodos = [...state.todos];
  switch (action.type) {
    case 'addTodos':
      let value = action.event;

      if (value.keyCode === 13 && action.event.target.value !== '') {
        updatedTodos = updatedTodos.concat({
          todo: value.target.value,
          isDone: false,
        });

        action.event.target.value = '';
        return { ...state, todos: updatedTodos };
      } else return { ...state };

    case 'delete':
      updatedTodos.splice(action.id, 1);
      return { ...state, todos: updatedTodos };
    case 'toggle':
      updatedTodos[action.id].isDone = !updatedTodos[action.id].isDone;
      return { ...state, todos: updatedTodos };

    case 'activeTodo':
      let activeTodos = [...updatedTodos].filter((e) => !e.isDone);

      return { ...state, todos: activeTodos };

    case 'completedTodo':
      let completed = [...updatedTodos].filter((e) => e.isDone);
      console.log(completed, updatedTodos);
      return { ...state, todos: completed };
    case 'allTodos':
      return { ...state };
    default:
      return state;
  }
}

export let store = createStore(todosReducer);
