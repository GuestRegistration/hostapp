import 'package:firebase_crashlytics/firebase_crashlytics.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:hostapp/src/app.dart';
import 'package:hostapp/src/localNotification.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/managers/dialog_manager.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/route.dart';
import 'package:hostapp/src/screen/NotificationScreen.dart';
import 'package:hostapp/src/service/dialog_service.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'dart:async';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'dart:async';
import 'dart:io';
import 'dart:typed_data';
import 'dart:ui';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:http/http.dart' as http;
import 'package:path_provider/path_provider.dart';
import 'package:rxdart/subjects.dart';


void main()async{  
  WidgetsFlutterBinding.ensureInitialized();
setupLocator(); // Register all the models and services before the app starts

SystemChrome.setPreferredOrientations([
  DeviceOrientation.portraitUp,
  DeviceOrientation.portraitDown,
  DeviceOrientation.landscapeLeft,
  DeviceOrientation.landscapeRight,
]);

Crashlytics.instance.enableInDevMode = true;
Crashlytics.instance.setUserEmail('horlaz229@gmail.com');
Crashlytics.instance.setUserName('Harbdollar');
Crashlytics.instance.setUserIdentifier('Harbdollar USER IDENTIFIER');

// Pass all uncaught errors from the framework to Crashlytics.
FlutterError.onError = Crashlytics.instance.recordFlutterError;

// runApp(MyApp(),);
runZoned(() {
  runApp(MyApp());
}, onError: Crashlytics.instance.recordError);
}

class MyApp extends StatelessWidget {
  var _graphQlConfiq = locator<GraphQLConfiguration>();
  @override
  Widget build(BuildContext context) {
      return GraphQLProvider(
       client: _graphQlConfiq.initilize(),
      child:  MaterialApp(
      title: 'HostApp',
      debugShowCheckedModeBanner: false,
      builder: (context, child) => Navigator(
        key: locator<DialogService>().dialogNavigationKey,
        onGenerateRoute: (settings) => MaterialPageRoute(
            builder: (context) => DialogManager(child: child)),
      ),
      navigatorKey: locator<NavigationService>().navigationKey,
      theme: ThemeData(
        primaryColor: Color.fromARGB(255, 9, 202, 172),
        backgroundColor:Color.fromARGB(255, 26, 27, 30),
        textTheme: Theme.of(context).textTheme.apply(
          fontFamily: 'Open Sans',
        ),
      ),
      home: PasswordlessApp(),//PasswordlessApp(), //
      onGenerateRoute: generateRoute,
    ),
    );
  }
}

// Future<void> main() async {
//   // needed if you intend to initialize in the `main` function
//   WidgetsFlutterBinding.ensureInitialized();

//   notificationAppLaunchDetails =
//       await flutterLocalNotificationsPlugin.getNotificationAppLaunchDetails();

//   var initializationSettingsAndroid = AndroidInitializationSettings('app_icon');
//   // Note: permissions aren't requested here just to demonstrate that can be done later using the `requestPermissions()` method
//   // of the `IOSFlutterLocalNotificationsPlugin` class
//   var initializationSettingsIOS = IOSInitializationSettings(
//       requestAlertPermission: false,
//       requestBadgePermission: false,
//       requestSoundPermission: false,
//       onDidReceiveLocalNotification:
//           (int id, String title, String body, String payload) async {
//         didReceiveLocalNotificationSubject.add(ReceivedNotification(
//             id: id, title: title, body: body, payload: payload));
//       });
//   var initializationSettings = InitializationSettings(
//       initializationSettingsAndroid, initializationSettingsIOS);
//   await flutterLocalNotificationsPlugin.initialize(initializationSettings,
//       onSelectNotification: (String payload) async {
//     if (payload != null) {
//       debugPrint('notification payload: ' + payload);
//     }
//     selectNotificationSubject.add(payload);
//   });
//   runApp(
//     MaterialApp(
//       home: HomePage(),
//     ),
//   );
// }
