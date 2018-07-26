import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body,Left, Right,
  List, ListItem, CheckBox,
  Button, Icon, Title, Fab
} from 'native-base';
import {FlatList} from 'react-native';
import TodoItem from './components/TodoItem';

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      count: 0,
      todos: []
    };
  }

  componentWillMount(){
    this.handleIncTodo();
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  _keyExtractor = (item, index) => item.id;

  handleIncTodo(){
    const count = this.state.count + 1;

    let todos = this.state.todos;
    todos.push({
      id: count,
      todo: "Not To Do #" + count
    });

    this.setState({
      todos,
      count
    });
  }
  render(){
    return (
      <Container>
        <Header style={{paddingTop: 20}}>
          <Text style={{color: '#dee5ec'}}>No To Do List ({this.state.count})</Text>
        </Header>

        <Content style={{backgroundColor: '#86c4c6'}}>
          <List>
            <FlatList
              data={this.state.todos}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TodoItem todo={item}/>}
            />
            {/*this.todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/> )*/}
          </List>
        </Content>

        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.handleIncTodo() }>
          <Icon name="add" />
        </Fab>

      </Container>
    );
  }
}
