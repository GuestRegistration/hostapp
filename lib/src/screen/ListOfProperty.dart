import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:hostapp/src/widget/PropertyWidget.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:hostapp/src/viewmodels/ListOfPropertyViewModel.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'package:provider/provider.dart';

class ListOfProperty extends StatefulWidget {

  @override
  _ListOfPropertyState createState() => _ListOfPropertyState();
}

class _ListOfPropertyState extends State<ListOfProperty>{
  RefreshController _refreshController =  RefreshController(initialRefresh: false);

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
      (model.busy ? loadingWidget()
                 :
                 (model.getErrorMessage == null ? 
                   Scaffold(
    resizeToAvoidBottomPadding: true,
      body: SmartRefresher(
            enablePullDown: true,
        header: WaterDropHeader(waterDropColor: Colors.black,),
        controller: _refreshController,
        onRefresh: (){
          _onRefresh(model);
        },
         child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
                children: <Widget>[
                   Padding(
                  padding: const EdgeInsets.only(top: 30.0, left: 20),
                  child:  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
                      Text('Properties', 
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
                (model.properties == null ?  Expanded(
                              child: Center(
                    child: Text('You do not have any registered property. '
                        'Click on the ‘’Add icon’’ button below to add one property for free.',
                        textAlign: TextAlign.center,
                      style:  TextStyle(
                        color: Colors.red,
                        fontStyle: FontStyle.normal,
                        fontSize: 16,
                      )
                    ),
                    ),
                ) : 
                Expanded(
               child:
               ListView.builder(
              itemCount: (model.properties == null ? 0 : model.properties.length),
              shrinkWrap: true,
              scrollDirection: Axis.vertical,
              itemBuilder: (BuildContext context , int index){
                return  PropertyWidget(
                    getProperties: model.properties[index],
                    );
                 },)
                          
                ))
              ],),
        ),
         ),
      
         floatingActionButton:
           ((model.properties == null ? 0 : model.properties.length) >= 1   //>= 1 
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
                   )
                   : errorWidget(model)
                   )
                   ), );
  }

   
  errorWidget(ListOfPropertyViewModel model){
    return Center(
      child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  SizedBox(height: 30,),
                  Center(
                    child: Text(model.getErrorMessage,
                     textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.red,
                    fontSize: AppFontSizes.medium,
                    fontWeight: FontWeight.bold
                              ),),),
                  verticalSpaceLarge,
                  GestureDetector(child: Padding(
                      padding: const EdgeInsets.all(1.0),
                      child: Container(
                        width: 150,
                        height: 50,
                        child: Material(
                        child: Center(
                            child: Text('Retry',
                            style: TextStyle(
                              color: AppColor.white,
                              fontSize: 17.0,
                              fontWeight: FontWeight.bold
                            ),),
                        ),
                        color: Color(0xFF45A1C9),
                        shape: RoundedRectangleBorder(
          borderRadius: new BorderRadius.circular(18.0),
              side: BorderSide(color: AppColor.borderColor)
      ),
                     
                  ),
                      ),
                    ),
                    onTap: (){
                      //model.d(); //DEBUG ONLY
                      model.initialize();
                      model.setErrorMessage(erorr: null); //back to null
                    },
                          ),
                ],
              ),
    );
  }
  
  loadingWidget(){
   return Center(
      child: CircularProgressIndicator(
                    strokeWidth: 4,
                    valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                    backgroundColor: AppColor.borderColor,
                    ),
    );
  }

  void _onRefresh(ListOfPropertyViewModel model) async{
    // monitor network fetch
    await Future.delayed(Duration(milliseconds: 1000));
    model.initialize();
    // if failed,use refreshFailed()
    _refreshController.refreshCompleted();
  }
}

