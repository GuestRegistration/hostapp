import 'package:flutter/material.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/model/GetNotificationModel.dart';
import 'package:hostapp/src/screen/EditPropertyScreen.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:hostapp/src/screen/SingleReservationDetailsScreen.dart';
import 'package:hostapp/src/viewmodels/NotificationViewModel.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:popup_menu/popup_menu.dart';
import 'package:intl/intl.dart';

class NotificationWidget extends StatelessWidget {
  final GetNotificationModel getNotificationModel;
   final Function onDeleteItem;
   final NotificationViewModel model;
   final int index;

      NotificationWidget({
    Key key,
    this.getNotificationModel,
    this.onDeleteItem,
    this.model,
    this.index
  }) : super(key: key);

  final CustomFuntion _developerFunction = locator<CustomFuntion>();

  @override
  Widget build(BuildContext context) {
    PopupMenu.context = context;
     return model.loadingOthers ? Center(
       child: CircularProgressIndicator(
                            strokeWidth: 4,
                            valueColor: AlwaysStoppedAnimation(
                                AppColor.primary,
                            ),
                          ),
     ) :
     GestureDetector(
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
                            ),child: Card(
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
                                    dense: true,
                                   title: Padding(
                                     padding: const EdgeInsets.only(bottom: 10.0, top: 10.0),
                                     child: Text(getNotificationModel.getText(), style: AppTextStyle.title(context),),
                                   ),
                                   subtitle: Row(
                                     children: <Widget>[
                                       Expanded(
                                         child: Padding(
                                     padding: const EdgeInsets.only(bottom: 8.0),
                                     child: Text('${getNotificationModel.getTime().toString()} ${_developerFunction.calculateTimeStamp(int.parse(getNotificationModel.getTimeStamp()))}', //
                                     style: AppTextStyle.subtitle(context),),
                                   ),
                                       )
                                     
                                   ],),
                                   leading: Icon(Icons.calendar_today,),
                                   trailing: Column(children: <Widget>[
                                     PopupMenuButton<String>(
                                           padding: EdgeInsets.zero,
                                           itemBuilder: (context) =>dropemenu(),
                                           onSelected: (value){
                                            //1 - Approve Reservation
                                            //2 - View Property
                                            //3 - None
                                            if(value == '1'){
                                              approveReservation(context, getNotificationModel.getPayLoad().getReservationID());

                                            }else if(value == '2'){
                                              viewProperty(context);
                                              
                                         }else if(value == '3'){
                                          //Remove Notification
                                             deleteNotification(
                                               context: context, 
                                               notifyID: getNotificationModel.getID(),
                                               propertyID: getNotificationModel.getPropertyData().getId(), 
                                              );
                                          }},),     
                                   ],)
                                                                             ),
                                                                              ),
                                                                           ),
                                                                         ),
                                 onTap: (){
                                                                  
    }, );
  
  
  }
                                                dropemenu(){
                                                return <PopupMenuEntry<String>>[
                                                                                  PopupMenuItem<String>(
                                                                                              value: '1',
                                                                                              child: ListTile(
                                                                                                leading: const Icon(Icons.done_all),
                                                                                                title: Text(
                                                                                                  'View Reservation',
                                                                                                ),
                                                                                              ),
                                                                                            ),
                                                                                            PopupMenuItem<String>(
                                                                                              value: '2',
                                                                                              child: ListTile(
                                                                                                leading: const Icon(Icons.visibility),
                                                                                                title: Text(
                                                                                                  'View Property',
                                                                                                ),
                                                                                              ),
                                                                                            ),
                                              
                                                                                            PopupMenuItem<String>(
                                                                                              value: '3',
                                                                                              child: ListTile(
                                                                                                leading: const Icon(Icons.delete_forever),
                                                                                                title: Text(
                                                                                                  'Remove Notification',
                                                                                                ),
                                                                                              ),
                                                                                            )
                                                                                         ];
                                              
                                              }
  
    approveReservation(BuildContext context, String reservationID){
  Navigator.push( context,
                      MaterialPageRoute(builder: (context) =>
                        SingleReservationDetailsScreen(reservationID: reservationID,
                      )));

                                              }
                                              
                                                void viewProperty(BuildContext context) {
                                                  Navigator.push( context,
                                                MaterialPageRoute(builder: (context) => EditPropertyScreen(
                                                  country: getNotificationModel.getProperties.address.country,
                                                  pAddress: getNotificationModel.getProperties.address.street,
                                                  pEmail: getNotificationModel.getProperties.email,
                                                  prules: getNotificationModel.getProperties.rulesText,
                                                  pName:getNotificationModel.getProperties.name,
                                                  pNumber: getNotificationModel.getProperties.propertyPhone.phoneNumber,
                                                  doclink: getNotificationModel.getProperties.terms,
                                                  propertyID: getNotificationModel.getProperties.id,
                                                  phoneIcode: getNotificationModel.getProperties.propertyPhone.countryCode,
                                                )));
                                                }

                     void deleteNotification({BuildContext context, String propertyID, String notifyID}) {
                        // print('Property iD =>>> ${propertyID}');
                        // print('Notification ID =>>>> ${notifyID}');
                      
                     model.deleteNotification(notificationID: notifyID, propertyId: propertyID);
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
                      model.deleteNotification(notificationID:  getNotificationModel.getID(), 
                      propertyId: getNotificationModel.getPropertyData().getPropertyID());
                    },
                          ),
                ],
              ),
    );
  }
  
}