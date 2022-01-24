import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(AppWidget(title: 'Test'));
}

class AppWidget extends StatelessWidget {
  final String title;

  AppWidget({Key? key, required this.title}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primarySwatch: Colors.amber),
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  State<HomePage> createState() {
    return HomePageState();
  }
}

class HomePageState extends State<HomePage> {
  int counter = 0;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
          child: GestureDetector(
        child: Text("Contador: $counter"),
        onTap: () {
          setState(() {
            counter++;
          });
        },
      )),
      color: Colors.black,
    );
  }
}
