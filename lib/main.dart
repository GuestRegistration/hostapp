import 'package:flutter/material.dart';
 
import 'package:provider/provider.dart';
import 'src/app.dart';
import 'src/service/AppleSignInAvailable.dart';
 
/*void main() {
  runApp(new MaterialApp(
  //theme: new ThemeData(scaffoldBackgroundColor: const Color(0xff151232)),
  theme: new ThemeData(scaffoldBackgroundColor: Colors.white),
  debugShowCheckedModeBanner: false, 
  home: new PasswordlessApp(), 
   ));
}*/
void main() async {
  // Fix for: Unhandled Exception: ServicesBinding.defaultBinaryMessenger was accessed before the binding was initialized.
  WidgetsFlutterBinding.ensureInitialized();
  final appleSignInAvailable = await AppleSignInAvailable.check();
  runApp(Provider<AppleSignInAvailable>.value(
    value: appleSignInAvailable,
    child:PasswordlessApp(),
  ));
}