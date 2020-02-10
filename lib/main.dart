import 'package:flutter/material.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/managers/dialog_manager.dart';
import 'package:hostapp/src/route.dart';
import 'package:hostapp/src/screen/Dashboard.dart';
import 'package:hostapp/src/screen/WrapperScreen.dart';
import 'package:hostapp/src/service/dialog_service.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:provider/provider.dart';
import 'src/app.dart';
import 'src/service/AppleSignInAvailable.dart';

void main()async{
  WidgetsFlutterBinding.ensureInitialized();
  setupLocator(); //MUST ADD THIS, So that it can be register when the App launched.
  runApp(MyApp());
}

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Guest Registration',
      builder: (context, child) => Navigator(
        key: locator<DialogService>().dialogNavigationKey,
        onGenerateRoute: (settings) => MaterialPageRoute(
            builder: (context) => DialogManager(child: child)),
      ),
      navigatorKey: locator<NavigationService>().navigationKey,
      theme: ThemeData(
        primaryColor: Color(0xff19c7c1),
        textTheme: Theme.of(context).textTheme.apply(
          fontFamily: 'Open Sans',
        ),
      ),
      home: WrapperScreen(), //Dashboard(),//
      onGenerateRoute: generateRoute,
    );
  }
}