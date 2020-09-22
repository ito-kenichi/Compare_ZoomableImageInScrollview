import 'package:flutter/material.dart';

class ContentsImage extends StatelessWidget {
  final String imagePath;
  ContentsImage({Key key, @required this.imagePath}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Center(
        child: InteractiveViewer(
          boundaryMargin: EdgeInsets.all(20.0),
          minScale: 0.1,
          maxScale: 3.0,
          child: Image.network(
            imagePath,
            width: 500,
            height: 500,
          ),
        ),
      ),
    );
  }
}