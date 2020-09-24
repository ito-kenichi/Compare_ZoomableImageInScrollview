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
              <Text
                style={{ width: 200, height: 200 }}
              >
                彼は背後にひそかな足音を聞いた。それはあまり良い意味を示すものではない。誰がこんな夜更けに、しかもこんな街灯のお粗末な港街の狭い小道で彼をつけて来るというのだ。人生の航路を捻じ曲げ、その獲物と共に立ち去ろうとしている、その丁度今。 彼のこの仕事への恐れを和らげるために、数多い仲間の中に同じ考えを抱き、彼を見守り、待っている者がいるというのか。それとも背後の足音の主は、この街に無数にいる法監視役で、強靭な罰をすぐにも彼の手首にガシャンと下すというのか。彼は足音が止まったことに気が着いた。あわてて辺りを見回す。ふと狭い抜け道に目が止まる。 彼は素早く右に身を翻し、建物の間に消え去った。その時彼は、もう少しで道の真中に転がっていたごみバケツに躓き転ぶところだった。 彼は暗闇の中で道を確かめようとじっと見つめた。どうやら自分の通ってきた道以外にこの中庭からの出道はないようだ。 足音はだんだん近づき、彼には角を曲がる黒い人影が見えた。彼の目は夜の闇の中を必死にさまよい、逃げ道を探す。もうすべては終わりなのか。すべての苦労と準備は水の泡だというのか。 突然、彼の横で扉が風に揺らぎ、ほんのわずかにきしむのを聞いた時、彼は背中を壁に押し付け、追跡者に見付けられないことを願った。この扉は望みの綱として投げかけられた、彼のジレンマからの出口なのだろうか。背中を壁にぴったり押し付けたまま、ゆっくりと彼は開いている扉の方へと身を動かして行った。この扉は彼の救いとなるのだろうか。
              </Text>
            </ReactNativeZoomableView>
          </View>
        </ScrollView>
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
