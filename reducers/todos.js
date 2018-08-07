const todosInitialState = {
  todos: [],
  isLoading: false
}
export default function(state = todosInitialState, action){
  switch (action.type) {
    case 'ALL_TODOS_PENDING ':
      state = {...state, isLoading: true};
      break;
    case 'ALL_TODOS_FULFILLED':
      state = {...state, isLoading: false, todos: action.payload.data};
      break;
    default:
      state;
  }
  return state;
}