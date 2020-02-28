import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/widget/PropertyWidget.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:hostapp/src/viewmodels/ListOfPropertyViewModel.dart';

class ListOfProperty extends StatefulWidget {


  @override
  _ListOfPropertyState createState() => _ListOfPropertyState();
}

class _ListOfPropertyState extends State<ListOfProperty>{
 
 @override
  void initState() {
    super.initState();
  }


  @override
  Widget build(BuildContext context) {
     return ViewModelProvider<ListOfPropertyViewModel>.withConsumer(
      viewModel: ListOfPropertyViewModel(),
      onModelReady: (model) => model.initialize(),
      builder: (context, model, child) =>
      !model.busy ?
       Scaffold(
    resizeToAvoidBottomPadding: true,
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
            children: <Widget>[
               Padding(
              padding: const EdgeInsets.only(top: 30.0, left: 20),
              child:  Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  Text('Properties', 
              style:  TextStyle(
            color: AppColor.black,
            fontSize: AppFontSizes.largest,
            fontWeight: FontWeight.bold
          )
        )
                ],
              )
            ),
            Expanded(
           child:
           ListView.builder(
          itemCount: model.properties.length,
          shrinkWrap: true,
          scrollDirection: Axis.vertical,
          itemBuilder: (BuildContext context , int index){
            print('Data ${model.properties}');
            if(model.properties.length == 0){
              return Center(child: Text('You do not have any registered property. '
                  'Click on the ‘’Add Property’’ button below to add one property for free.',
                style:  TextStyle(
                  color: Colors.red,
                  fontStyle: FontStyle.normal,
                  fontSize: 16,
                )
              ),
              );
            }
            return  PropertyWidget(
                getProperties: model.properties[index],
                );
             },)
                      
            ),
          ],),
      ),
         floatingActionButton:
           (model.properties.length >= 1 
           ? FloatingActionButton(
             child: Text('Pro',
                         style: TextStyle(
                             color: AppColor.white,
                             fontSize: 16.0,
                             fontWeight: FontWeight.bold
                         ),),
             onPressed: () { 
              model.proPage();
             },
            )
            
             : FloatingActionButton(onPressed: () { 
             model.addproperty();
             },
            child: Icon(Icons.add, size: 30,),
              ))



        ): Center(child: CircularProgressIndicator(
              valueColor: AlwaysStoppedAnimation(AppColor.primary),
                      )));
  
  
  }


}
