import React, {Component } from 'react';
import ReactNative, { Text, View } from 'react-native';
import Product from './src/components/Product';




class Main extends Component {
  render(){
    return (
      <View>
      <Product name= "Android"/>
      <Product name= "Nokia"/>
      <Product name="iPhone"/>
      </View>

    )
  }
}


export default Main


ReactNative.AppRegistry.registerComponent('Shop',()=> Main);
