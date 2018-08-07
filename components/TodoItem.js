import React, {Component} from 'react';
import {Body,Left, Right, ListItem, CheckBox, Text, Button, SwipeRow, Icon} from 'native-base';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';
import {connect} from 'react-redux';
import {API_URL} from '../constans';
import {allTodos} from '../actions';

class TodoItem extends Component{

  state = {
    isDone: false
  }

  componentDidMount(){
    const {todo: {isDone}} = this.props;

    this.setState({isDone: Boolean(isDone)});
  }

  handleDone(){
    const {todo: {id}} = this.props;

    this.setState({
      isDone: !this.state.isDone
    });

    axios.patch(`${API_URL}/todos/${id}`, {
      isDone: !this.state.isDone
    });
  }

  async handleDelete(id){
    await axios.delete(`${API_URL}/todos/${id}`);
    this.props.dispatch(allTodos());
  }

  render(){
    const {todo: {id, name}} = this.props;


    return (
      // <ListItem>
      //   <Left>
      //     <CheckBox checked={this.state.isDone} onPress={()=> this.handleDone()} color="#0bb6b1"/>
      //   </Left>
      //     <Body>
      //     <Text>{name}</Text>
      //   </Body>
      //   <Right/>
      // </ListItem>
      <SwipeRow
        key={id}
        rightOpenValue={-75}
        body={
          <View style={{flexDirection: 'row'}}>
            <View style={{padding: 10}}>
              <CheckBox checked={this.state.isDone} onPress={()=> this.handleDone()} color="#0bb6b1"/>
            </View>
            <View style={{padding: 10}}>
              <Text>{name}</Text>
            </View>
          </View>
        }
        right={
          <Button danger onPress={() => this.handleDelete(id)}>
            <Icon active name="trash" />
          </Button>
        }
      />
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({

});

export default connect(mapStateToProps)(TodoItem);
