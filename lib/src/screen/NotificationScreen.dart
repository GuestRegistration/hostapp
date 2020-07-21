import 'package:flutter/material.dart';
import 'package:grouped_list/grouped_list.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/viewmodels/NotificationViewModel.dart';
import 'package:hostapp/src/widget/NotificationWidget.dart';
import 'package:provider_architecture/provider_architecture.dart';

class NotificationScreen extends StatefulWidget {
  @override
  _NotificationScreenState createState() => _NotificationScreenState();
}

class _NotificationScreenState extends State<NotificationScreen> {
  
List _elements = [
  {'name': 'Abdullah just checkin', 'timestamp': 'Recent'},
  {'name': 'Your reservation is now checkin by Toks', 'timestamp': 'Earlier'},
  {'name': 'You just create a new reservation', 'timestamp': 'Recent'},
   {'name': 'Your reservation is now checkin by Toks', 'timestamp': 'Recent'},
    {'name': 'Your reservation is now checkin by Toks', 'timestamp': 'Earlier'},
     {'name': 'Your reservation is now checkin by Toks', 'timestamp': 'Earlier'},
  {'name': 'Your reservation is now checkin by Toks', 'timestamp': 'Earlier'},
  {'name': 'Your reservation is now checkin by Mathew', 'timestamp': 'Recent'},
  {'name': 'Your reservation is now checkin by Ambimbola', 'timestamp': 'Recent'},
];
  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<NotificationViewModel>.withConsumer(
       viewModelBuilder: () => NotificationViewModel(),
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
        },),
                ],
              )
            ),
      
            // Expanded(
            //    child:
            //    ListView.builder(
            //   itemCount: (model.notifications == null ? 0 : model.notifications.length),
            //   shrinkWrap: true,
            //   scrollDirection: Axis.vertical,
            //   itemBuilder: (BuildContext context , int index){
            //     return  NotificationWidget(
            //         getNotificationModel: model.notifications[index],
            //         );},)
                          
            //     ),
            Expanded(
                          child: GroupedListView<dynamic, String>(
          elements: _elements,
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
                    contentPadding:
                        EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
                    leading: Icon(Icons.calendar_today),
                    title: Text(element['name']),
                    trailing: Icon(Icons.more_horiz),
                  ),
                ),
              );
          },
          order: GroupedListOrder.ASC,
        ),
            ),

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
    )
  
    );
  
  }
}