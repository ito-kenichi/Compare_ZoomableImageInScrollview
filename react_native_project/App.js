import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, SafeAreaView } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <SafeAreaView style={styles.container} />
        <ScrollView
          contentContainerStyle={styles.scrollView}
        >
          <View style={styles.modalContainer}>
          <ReactNativeZoomableView
              maxZoom={3.0}
              minZoom={0.5}
              zoomStep={0.5}
              initialZoom={1}
              bindToBorders={true}
              onZoomAfter={this.logOutZoomState}
              style={{
                padding: 10,
                backgroundColor: "red",
              }}
            >
              <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: "https://picsum.photos/250?image=9" }}
              />
            </ReactNativeZoomableView>
          </View>
        </ScrollView>
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    height: 200,
    margin: 20,
  },
  scrollView: {
    backgroundColor: 'green',
    marginHorizontal: 20,
  },
});
