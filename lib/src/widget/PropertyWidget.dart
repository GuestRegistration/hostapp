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
    return Padding(
      padding: const EdgeInsets.only(top: 30.0, bottom: 66),
      child: Stack(
        children: <Widget>[
          Center(
            child:ClipRRect(
    borderRadius: BorderRadius.circular(8.0),
    child: Image.network(
       'https://www.aliantlaw.com/uploads/general/Lagos_VI_Skyline-2.jpg',
       fit: BoxFit.fill,
         height: MediaQuery.of(context).size.height,
                 width: MediaQuery.of(context).size.width,
                 loadingBuilder: (context, Widget child,ImageChunkEvent loadingProgress){
                                  return loadingProgress == null ? child:
                                      Padding(
                                        padding: const EdgeInsets.all(8.0),
                                        child: CircularProgressIndicator(
                                          value: loadingProgress.expectedTotalBytes != null ?
                                        loadingProgress.cumulativeBytesLoaded / loadingProgress.expectedTotalBytes
                                          : null,
                                        ),
                                      );
                                  },
    ),
)
          ),
          Positioned(
            left: 20,
            bottom: 70,
           child:  Text(propertyModel.propertyName,
                style: TextStyle(
                fontSize: 18.0,
                fontWeight: FontWeight.w900,
                color: Colors.white,
              ),),
          ),
           Positioned(
            left: 20,
            bottom: 50,
           child:  Text(propertyModel.propertyAddress,
                style: AppTextStyle.inputHint(context)),
          ),
           Positioned(
            left: 20,
            bottom: 20,
           child: Row(children: <Widget>[
              Icon(Icons.location_on, color: Colors.white),
              Text('L2K 2M1',
                style: AppTextStyle.headerSmall2(context)),
           ],)
          ),
           Positioned(
            left: 300,
           bottom: 30, 
           child:  Column(children: <Widget>[
             Icon(Icons.menu, color: Colors.white),
             SizedBox(height: 5,),
            Container(child: CircleAvatar(backgroundColor: Colors.green,), height: 10, width: 10,)
           ],)
          ),
          
        ],
      )
    );
  }
}