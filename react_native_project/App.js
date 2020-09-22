import React from 'react';
import { StyleSheet, View } from 'react-native';
import DisplayImage from "./DisplayImage"

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <DisplayImage
        // DisplayImageファイル側で指定したimagePathという引数に画像のURLを設定する
          imagePath={'https://picsum.photos/250?image=9'}
        />
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
