import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/style/AppColor.dart';
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
       Scaffold(
    resizeToAvoidBottomPadding: true,
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: AppColor.white,
        title: Text('My Properties'),
        actions: <Widget>[
          // Padding(
          //   padding: const EdgeInsets.only(right: 15.0),
          //   child: GestureDetector(child: Icon(FontAwesome.sign_out, size: 30, color: Colors.red), 
          //   onTap: (){
            
          //   },
          //   ),
          // ),
        ],

      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
            children: <Widget>[
              Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: GestureDetector(
                         child: Center(
                      child: Container(
                        height: 60,
                        width: double.infinity,
                         decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(10.0),
                            shape: BoxShape.rectangle,
                            color: Colors.red,
                          ),
                        child: Material(
                          color: Colors.white,
                          elevation: 20,
                         shadowColor: AppColor.primary,
                         child: Padding(
                           padding: const EdgeInsets.all(8.0),
                           child: Row(
                             mainAxisAlignment: MainAxisAlignment.center,
                             children: <Widget>[
                               Icon(Icons.add_circle),
                               SizedBox(width: 10,),
                               Text('Add a new Property', style: AppTextStyle.subTitle(context),)
                             ],
                           ),
                         ),

                        ),
                      ),
                    ),
                    onTap: (){
                       model.addproperty();
                    },
                  ),
                ),
            
            Expanded(
           child: model.properties != null ?
           ListView.builder(
          itemCount: model.properties.length,
          shrinkWrap: true,
          scrollDirection: Axis.vertical,
          itemBuilder: (BuildContext context , int index){
            if(model.properties.length == 0){
              return Center(child: Text('No Property Available', style: AppTextStyle.error(context, Colors.redAccent),),);
            }
            return Padding(
              padding: const EdgeInsets.all(8.0),
              child: PropertyWidget(
                  propertyModel: model.properties[index],
                ),
            );
             },)
                      : Center(child: CircularProgressIndicator(
                        valueColor: AlwaysStoppedAnimation(AppColor.primary),
                      ))
            ),
          ],),
      ),
    )
      );
  
  
  }


}

