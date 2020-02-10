import 'package:flutter/material.dart';
import 'package:hostapp/src/widget/app_drawer/app_drawer.dart';


//Tablet Orientation is just Row and Column
//Colum => Portrait
//Row => Landscape
class HomeScreenTablet extends StatelessWidget {
  const HomeScreenTablet({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var children = [
      Expanded(
        child: Container(),
      ),
      AppDrawer()
    ];
    var orientation = MediaQuery.of(context).orientation;
    return Scaffold(
      body: orientation == Orientation.portrait
          ? Column(children: children)
          : Row(children: children.reversed.toList()),
    );
  }

}