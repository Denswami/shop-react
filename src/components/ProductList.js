import React, {Component } from 'react';
import { ScrollView } from 'react-native';
import Product from './Product';



export default class ProductList extends Component {
  state = {
    products: []
  }
 componentDidMount() {
   return fetch('http://demo0782917.mockable.io/mobiles')
   .then((response) => response.json())
   .then((responseJson) =>{
     this.setState({products: responseJson})
  //   console.log(responseJson);
   })
 }

  render() {
    var productList = this.state.products.map(function(item) {
      return (
        <Product name = {item.name} key = {item.id}/>
      )
    })
    return(
      <ScrollView>
      {productList}
      </ScrollView>


    );


  }
}
