import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppColor.dart';

class PropertyButton extends StatelessWidget {
  String text;
  Function onpress;
  Color background;
  PropertyButton({this.text, this.onpress, this.background});
  @override
  Widget build(BuildContext context) {
    return MaterialButton(
      child: Text(text,
      style: TextStyle(
        color: AppColor.white,
        fontSize: 17.0,
        fontWeight: FontWeight.bold
      ),),
      color: background,
      onPressed: onpress,
    );
  }
}