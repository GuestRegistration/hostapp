import 'package:flutter/material.dart';
import 'package:hostapp/src/datamodels/drawar_item_data.dart';
import 'package:hostapp/src/widget/base_model.dart';

class DrawerOptionMobilePortrait extends BaseModelWidget<DrawerItemData> {

  @override
  Widget build(BuildContext context, DrawerItemData itemData) {
    return Container(
      padding: const EdgeInsets.only(left: 25),
      height: 80,
      child: Row(
        children: <Widget>[
          Icon(
            itemData.iconData,
            size: 25,
          ),
          SizedBox(
            width: 25,
          ),
          Text(
            itemData.title,
            style: TextStyle(fontSize: 21),
          )
        ],
      ),
    );
  }
}

class DrawerOptionMobileLandscape extends BaseModelWidget<DrawerItemData> {
 
  @override
  Widget build(BuildContext context,  DrawerItemData itemData) {
    return Container(
      height: 70,
      alignment: Alignment.center,
      child: Icon(itemData.iconData),
    );
  }
}
