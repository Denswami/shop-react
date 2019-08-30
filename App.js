import React, {Component } from 'react';
import ReactNative, { Text, View } from 'react-native';
import Product from './src/components/Product';
import ProductList from './src/components/ProductList';




export default class Main extends Component {
  render(){
    return (
<ProductList/>

);
  }
}





ReactNative.AppRegistry.registerComponent('Shop',()=> Main);
