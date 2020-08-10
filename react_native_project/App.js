import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Image } from 'react-native';

export default class App extends Component {

  state = {
    numColumns:3,
    items:[
      {id : "1", req : require('./assets/images/image001.jpg')},
      {id : "2", req : require('./assets/images/image002.jpg')},
      {id : "3", req : require('./assets/images/image003.jpg')},
    ]
  };

  renderItem = ({index}) => {
    return (
      <Image
        style={styles.image}
        source={this.state.items[index].req}
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.items}
          renderItem={this.renderItem}
          keyExtractor={index => index.id}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginLeft: 100,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 700,
    width: 500,
  },
  image: {
    width: 200,
    height: 100,
    marginLeft: 10,
    marginTop: 10,
  }
});
