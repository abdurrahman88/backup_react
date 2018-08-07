import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body,Left, Right,
  List, ListItem, CheckBox,
  Button, Icon, Title, Fab
} from 'native-base';
import {FlatList} from 'react-native';
import TodoItem from '../components/TodoItem';
// import TryRedux from '../components/TryRedux';
import {connect} from 'react-redux';
import {allTodos} from '../actions';

class Todos extends Component{

  componentDidMount(){
    this.props.dispatch(allTodos());
  }

  _keyExtractor = (item, index) => item.id;


  render(){
    return (
      <Container>

        <Content style={{backgroundColor: '#86c4c6'}}>
          <List>
            <FlatList
              data={this.props.todosReducer.todos}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TodoItem todo={item}/>}
            />
            {/*this.todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/> )*/}
          </List>
        </Content>

        <Fab
          style={{ backgroundColor: '#8a969d' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('TodosCreate') }>
          <Icon name="add" />
        </Fab>

      </Container>
    );
  }
}


const mapStateToProps = (state)=>({
  todosReducer: state.todosReducer
});
export default connect(mapStateToProps)(Todos)
