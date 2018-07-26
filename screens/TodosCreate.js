import React, {Component} from 'react';
import {Container, Content, Text, Form, Input, Item, Label, Button} from 'native-base';

export default class TodosCreate extends Component{
  constructor() {
    super();
    this.state = {
      isReady: false,
      text: ""
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  handleSubmit(){
    alert(this.state.text);
  }

  render(){

    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Not To Do</Label>
              <Input onChangeText={(text) => this.setState({text})}/>
            </Item>
            <Button full primary onPress={()=> this.handleSubmit()}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
