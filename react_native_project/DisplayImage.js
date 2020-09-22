import React from "react";
import { StyleSheet, View, Image } from 'react-native';

export default class DisplayImage extends React.Component{

  render() {
    return (
      <View style={styles.Container}>
        <Image
          style={{ width: 500, height: 500 }}
          source={{ uri: this.props.imagePath }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
    Container: {
      width:  500,
      height: 500,
      margin: 20,
    }
});