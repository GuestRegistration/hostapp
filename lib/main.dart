import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/managers/dialog_manager.dart';
import 'package:hostapp/src/route.dart';
import 'package:hostapp/src/screen/AddPropertyLoadingScreen.dart';
import 'package:hostapp/src/screen/Dashboard.dart';
import 'package:hostapp/src/screen/AddPropertyScreen.dart';
import 'package:hostapp/src/service/dialog_service.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:provider/provider.dart';
import 'src/app.dart';
import 'src/service/AppleSignInAvailable.dart';

void main()async{
  WidgetsFlutterBinding.ensureInitialized();
  setupLocator(); // Register all the models and services before the app starts
  SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
    DeviceOrientation.landscapeLeft,
    DeviceOrientation.landscapeRight,
  ]);
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
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
      home: AddPropertyView(), //244344
      onGenerateRoute: generateRoute,
    );
  }
}