import 'package:flutter/material.dart';
import 'package:grouped_list/grouped_list.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/viewmodels/NotificationViewModel.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:hostapp/src/locator.dart';

class NotificationScreen extends StatefulWidget {
  @override
  _NotificationScreenState createState() => _NotificationScreenState();
}

class _NotificationScreenState extends State<NotificationScreen> {
  
  final CustomFuntion _developerFunction =  locator<CustomFuntion>();

  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<NotificationViewModel>.withConsumer(
       viewModelBuilder: () => NotificationViewModel(),
      onModelReady: (model) => model.initialize(),
      builder: (context, model, child) =>
      (model.busy ? _developerFunction.loadingWidget() : 
      (model.getErrorMessage == null ?  Scaffold(
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
        },),
                ],
              )
            ),
      
             (model.notifications == null ?  Expanded(
                              child: Center(
                    child: Text('You do not have any notification',
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
                          child: GroupedListView<dynamic, String>(
          elements: model.notifications,
          groupBy: (element) => element['timestamp'],
          groupSeparatorBuilder: (String groupByValue) => Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(groupByValue,style:  TextStyle(
            color: AppColor.black,
            fontSize: AppFontSizes.large,
            fontWeight: FontWeight.bold
          )),
          ),
          itemBuilder: (c, element) {
              return Card(
                elevation: 2.0,
                  shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.only(
                          bottomRight: Radius.circular(20),
                          bottomLeft: Radius.circular(20),
                          topLeft:Radius.circular(20),
                          topRight: Radius.circular(20))
      ),
                //margin: new EdgeInsets.symmetric(horizontal: 10.0, vertical: 6.0),
                child: Container(
                  child: ListTile(
                    contentPadding: EdgeInsets.symmetric(horizontal: 20.0,  vertical: 10.0),
                    leading: Icon(Icons.calendar_today),
                    title: Text(element['name']),
                    trailing: Icon(Icons.more_horiz),
                  ),
                ),
              );
          },
          order: GroupedListOrder.ASC,
        ),
            ))
           

        //         Padding(
        //           padding: const EdgeInsets.all(8.0),
        //           child: Row(mainAxisAlignment: MainAxisAlignment.start,
        //             children: <Widget>[
        //              Text('Reservation', 
        //       style:  TextStyle(
        //     color: AppColor.black,
        //     fontSize: AppFontSizes.large,
        //     fontWeight: FontWeight.bold
        //   )
        // ),
        //           ],),
        //         ),
              //   Expanded(
              //  child:
              //  ListView.builder(
              // itemCount: (model.notifications == null ? 0 : model.notifications.length),
              // shrinkWrap: true,
              // scrollDirection: Axis.vertical,
              // itemBuilder: (BuildContext context , int index){
              //   return  NotificationWidget(
              //       getNotificationModel: model.notifications[index],
              //       );
              //    },)
                          
              //   )
          ],),
      ),
    ) : errorWidget(model)
  ) )
     
    );
  
  }
  
   
  errorWidget(NotificationViewModel model){
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
  
}