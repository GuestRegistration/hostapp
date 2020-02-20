import 'package:flutter/material.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:hostapp/src/model/propertyModel.dart';
import 'package:hostapp/src/style/AppColor.dart';
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
    return  Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: GestureDetector(
                         child: Container(
                           height: 100,
                             child: Card(
                              elevation: 10,
                              shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.only(
                                bottomRight: Radius.circular(20),
                                bottomLeft: Radius.circular(20),
                                topLeft:Radius.circular(20),
                                topRight: Radius.circular(20))
      ),
                              child: Padding(
                                padding: const EdgeInsets.only(top: 10.0),
                                child: ListTile(
                                 title: Padding(
                                   padding: const EdgeInsets.only(bottom: 10.0, top: 10.0),
                                   child: Text(propertyModel.propertyName, style: AppTextStyle.title(context),),
                                 ),
                                 subtitle: Padding(
                                   padding: const EdgeInsets.only(bottom: 10.0),
                                   child: Text(propertyModel.propertyAddress, style: AppTextStyle.subtitle(context),),
                                 ),
                                 trailing: Icon(Icons.menu),
                             ),
                              ),
                           ),
                         ),
                    onTap: (){
                       
                    },
                  ),
                );
  }
}