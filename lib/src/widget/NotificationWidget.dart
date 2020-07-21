import 'package:flutter/material.dart';
import 'package:hostapp/src/model/GetNotificationModel.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';

class NotificationWidget extends StatelessWidget {
  final GetNotificationModel getNotificationModel;
   final Function onDeleteItem;

     const NotificationWidget({
    Key key,
    this.getNotificationModel,
    this.onDeleteItem,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
     return GestureDetector(
                         child: Container(
                            // height: 100,
                             decoration: new BoxDecoration(
                              gradient: new LinearGradient(
                                  colors: [
                                    Colors.grey[100],
                                    Colors.grey[100]
                                  ],
                                  begin: const FractionalOffset(0.0, 0.0),
                                  end: const FractionalOffset(1.0, 1.0),
                                  stops: [0.0, 1.0],),
                                // borderRadius: BorderRadius.circular(20),
                            ),
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
                                     child: Text(getNotificationModel.getTime(), style: AppTextStyle.title(context),),
                                   ),
                                   subtitle: Padding(
                                     padding: const EdgeInsets.only(bottom: 8.0),
                                     child: Text(getNotificationModel.getRead(), style: AppTextStyle.subtitle(context),),
                                   ),
                                  //  trailing: Column(
                                  //    children: <Widget>[
                                  //      SizedBox(height: 30,),
                                  //      Icon(Icons.more_vert),
                                  //    ],
                                  //  )
                               ),
                                ),
                             ),
                           ),
                    onTap: (){
                    
                    },
                  );
               

  }
}