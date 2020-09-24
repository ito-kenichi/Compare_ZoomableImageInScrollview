import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SingleChildScrollView(
              child: Center(
                child: InteractiveViewer(
                  boundaryMargin: EdgeInsets.all(20.0),
                  minScale: 0.1,
                  maxScale: 3.0,
                  child: Text(
                    '彼は背後にひそかな足音を聞いた。それはあまり良い意味を示すものではない。誰がこんな夜更けに、しかもこんな街灯のお粗末な港街の狭い小道で彼をつけて来るというのだ。人生の航路を捻じ曲げ、その獲物と共に立ち去ろうとしている、その丁度今。 彼のこの仕事への恐れを和らげるために、数多い仲間の中に同じ考えを抱き、彼を見守り、待っている者がいるというのか。',
                  ),
                ),
              ),
            ),
            SingleChildScrollView(
              child: Center(
                child: InteractiveViewer(
                  boundaryMargin: EdgeInsets.all(20.0),
                  minScale: 0.1,
                  maxScale: 3.0,
                  child: Image.network(
                    'https://picsum.photos/250?image=9',
                    width: 500,
                    height: 500,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}