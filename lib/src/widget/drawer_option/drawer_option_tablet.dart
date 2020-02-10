import 'package:flutter/material.dart';
import 'package:hostapp/src/datamodels/drawar_item_data.dart';
import 'package:hostapp/src/widget/base_model.dart';

class DrawerOptionTabletPortrait extends BaseModelWidget<DrawerItemData> {
 
  @override
  Widget build(BuildContext context,  DrawerItemData itemData) {
    return Container(
      width: 152,
      alignment: Alignment.center,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          Icon(
            itemData.iconData,
            size: 45,
          ),
          Text(itemData.title, style: TextStyle(fontSize: 20)),
        ],
      ),
    );
  }
}
