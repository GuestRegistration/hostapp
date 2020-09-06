import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:hostapp/src/localNotification.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'dart:io';
import 'package:hostapp/src/util/constants.dart';
import 'package:shared_preferences/shared_preferences.dart';

class PushNotification{
  final FirebaseMessaging _fcm = FirebaseMessaging();
  final NavigationService _navigationService = locator<NavigationService>();

  getToken()async{
    print('FCM TOKEN>>>>>>>>>>>>>>>>>>>>>>>>');
    SharedPreferences prefs = await SharedPreferences.getInstance();
   await _fcm.getToken().then((value){
      prefs.setString(Constants.notificationToken, value);
      String data  = prefs.getString(Constants.notificationToken);
      print('Stored Data >>>>>>>>>');
            original(data);

             print('Token Data >>>>>>>>>');
            original(value);
   });
  }

  Future initialise()async{
  //  getToken();
    if(Platform.isIOS){
      _fcm.requestNotificationPermissions(IosNotificationSettings());
    }

    _fcm.configure(
      onMessage: (Map<String, dynamic> message)async{
        print('OnMessage: $message');
          serialNavigation(message: message);
      },
      onLaunch: (Map<String, dynamic> message)async{
        print('********onLaunch: $message');
        serialNavigation(message: message);
      },
      onResume: (Map<String, dynamic> message)async{
         print('********onResume: $message');
        serialNavigation(message: message);
      }
    );
  }

  void serialNavigation({Map<String, dynamic> message}){
    var data = message['data']; //For notification details like, click navigation, priority, link etc
   var view = data['view'];

    var notification = message['notification']; //For Notificaton Data like body, title etc
     var title =  notification['title'];
    var body = notification['body'];

   
    // print('Notification View >>>>> $view');
    // print('Notification ActionData >>>>>> $data');
    // print('Notification Title >>>>>> $title');
    //  print('Notification Body >>>>>> $body');
      showLocalNotification(
        channelDes: 'HostApp for Mobile Channel',
        channelID: '001',
        channelName: 'HostApp',
        notificationTitle: '$title',
        notificationBody: '$body',
        payload: '');

      if(view != null){
         _navigationService.navigateTo(dashboardRoute, arguments: 2);

      }else{
          _navigationService.navigateTo(dashboardRoute, arguments: 2);
      }

  }
  
   original(String token){
while (token.length > 0) {
  int initLength = (token.length >= 500 ? 500 : token.length);
  print(token.substring(0, initLength));
  int endLength = token.length;
  token = token.substring(initLength, endLength);
}
}


  Future<void> showLocalNotification({String channelID, String channelName, String channelDes, String notificationTitle, String notificationBody, String payload}) async {
    var androidPlatformChannelSpecifics = AndroidNotificationDetails(
        channelID, channelName, channelDes,
        importance: Importance.Max, priority: Priority.High, ticker: 'ticker');
    var iOSPlatformChannelSpecifics = IOSNotificationDetails();
    var platformChannelSpecifics = NotificationDetails(
        androidPlatformChannelSpecifics, iOSPlatformChannelSpecifics);
    await flutterLocalNotificationsPlugin.show(
        0, notificationTitle, notificationBody, platformChannelSpecifics,
        payload: payload);
  }
}