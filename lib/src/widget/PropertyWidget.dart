import 'package:flutter/material.dart';
import 'package:hostapp/src/model/propertyModel.dart';
import 'package:hostapp/src/style/AppImage.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/viewmodels/AddProperty_view_mode.dart';
import 'package:provider_architecture/provider_architecture.dart';

class PropertyWidget extends StatelessWidget{
   final PropertyModel propertyModel;
   final Function onDeleteItem;

   const PropertyWidget({
    Key key,
    this.propertyModel,
    this.onDeleteItem,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListTile(
        trailing: Column(
          children: <Widget>[
            Icon(Icons.menu),
            SizedBox(height: 5,),
            Container(child: CircleAvatar(backgroundColor: Colors.green,), height: 10, width: 10,)
          ],
        ),
        leading: Image.asset(AppImage.icode, height: 50, width: 50,),
        title: Text(propertyModel.propertyName, style: AppTextStyle.headerSmall(context),),
        subtitle: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Row(
            children: <Widget>[
              Icon(Icons.location_on, color: Colors.grey),
              Flexible(
                  child: Text(propertyModel.propertyAddress, style: AppTextStyle.headerSmall2(context),
                 overflow: TextOverflow.ellipsis),
              )
            ],
          ),
        ), 
      ),
    );
  }
}