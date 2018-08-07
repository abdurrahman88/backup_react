import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../navigators';
import todosReducer from './todos';

// Start with two routes: The Main screen, with the Login screen on top.
const action = RootNavigator.router.getActionForPathAndParams('Todos');
const initialNavState = RootNavigator.router.getStateForAction(action);


function nav(state = initialNavState, action) {
  const nextState = RootNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const AppReducer = combineReducers({
  nav,
  todosReducer
});

export default AppReducer;
