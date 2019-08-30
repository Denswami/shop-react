import React, {Component } from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';



export default class Product extends Component {


  state= {
    amount: 0
  }

  buy=() => this.setState({
    amount: this.state.amount + 1
  })

// show() {
//   Alert.alert("You clicked Me!")
// }
  render(){
    return (
      <View>
      <Text style ={style.textStyle}> {this.props.name} </Text>
      <Text style ={style.textStyle}>Amount: { this.state.amount} </Text>
      <Button title='buy' onPress={ this.buy}></Button>

      </View>

    );
  }
}



const style = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 20
  }
});
