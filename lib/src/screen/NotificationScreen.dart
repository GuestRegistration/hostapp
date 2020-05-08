import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/viewmodels/NotificationViewModel.dart';
import 'package:provider_architecture/provider_architecture.dart';

class NotificationScreen extends StatefulWidget {
  @override
  _NotificationScreenState createState() => _NotificationScreenState();
}

class _NotificationScreenState extends State<NotificationScreen> {
  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<NotificationViewModel>.withConsumer(
      viewModel: NotificationViewModel(),
      onModelReady: (model) => model.initialize(),
      builder: (context, model, child) =>
      Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
            children: <Widget>[
               Padding(
              padding: const EdgeInsets.only(top: 30.0, left: 20),
              child:  Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Text('Notification', 
              style:  TextStyle(
            color: AppColor.black,
            fontSize: AppFontSizes.largest,
            fontWeight: FontWeight.bold
          )
        ),
        GestureDetector(child: Icon(Icons.settings, size: 30,),
         onTap: (){
          model.movetoSettings();
        },)
                ],
              )
            ),
           
          ],),
      ),
    )
  
    );
  
  }
}