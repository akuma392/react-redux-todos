export function addTodos(event) {
  return {
    type: 'addTodos',
    event: event,
  };
}

export function handleToggle(event) {
  return {
    type: 'toggle',
    event: event,
    id: +event.target.id,
  };
}
export function handleDelete(event) {
  return {
    type: 'delete',
    event: event,
    id: +event.target.id,
  };
}
