import 'package:firebase_crashlytics/firebase_crashlytics.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:hostapp/src/GraphQLDemo/CrasylisticsTester.dart';
import 'package:hostapp/src/app.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/managers/dialog_manager.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/route.dart';
import 'package:hostapp/src/screen/AddPropertyLoadingScreen.dart';
import 'package:hostapp/src/screen/MainReservationScreen.dart';
import 'package:hostapp/src/screen/EditReservationScreen.dart';
import 'package:hostapp/src/screen/Dashboard.dart';
import 'package:hostapp/src/screen/SettingsScreen.dart';
import 'package:hostapp/src/screen/auth_screen.dart';
import 'package:hostapp/src/screen/PersonalDetailsScreen.dart';
import 'package:hostapp/src/screen/tester.dart';
import 'package:hostapp/src/GraphQLDemo/FirebasePerformance.dart';
import 'package:hostapp/src/screen/AddPropertyScreen.dart';
import 'package:hostapp/src/screen/login_page.dart';
import 'package:hostapp/src/service/dialog_service.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'dart:async';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';

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
        backgroundColor: Color.fromARGB(255, 26, 27, 30),
        textTheme: Theme.of(context).textTheme.apply(
          fontFamily: 'Open Sans',
        ),
      ),
      home: PasswordlessApp(),//PersonalDetailsScreen(),//PasswordlessApp(),//Dashboard(showIndex: 0,),//PasswordlessApp(),// Dashboard(showIndex: 0,),////PasswordlessApp(),//PersonalDetailsScreen(),//,//PersonalDetailsScreen(),//Dashboard(showIndex: 0,),//
      onGenerateRoute: generateRoute,
    ),
    );
  }
}

// CreateProfileScreen(),
//       // home: LoginPage(
//       //   email: 'jordandaze969@gmail.com',
//       //   // existingemail: 'jordandaze969@gmail.com',
//       //   // lastname: 'MyLastName',
//       //   // name: 'myName',
        
//       // ), //
