// import {createStackNavigator} from 'react-navigation';
// import Todos from './screens/Todos';
// import TodosCreate from './screens/TodosCreate';
//
// const App = createStackNavigator({
//   Todos: {
//     screen: Todos,
//     navigationOptions: {
//       headerTitle: 'Not To Do List',
//     },
//   },
//   TodosCreate: {
//     screen: TodosCreate,
//     navigationOptions: {
//       headerTitle: 'Create Todos',
//     },
//   },
// });
//
// export default App;

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from './reducers';
import { AppNavigator, middleware } from './navigators';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = applyMiddleware(
  logger,
  promiseMiddleware()
);

const store = createStore(AppReducer, middlewares);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
export default App;
