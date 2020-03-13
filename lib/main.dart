import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/auth_screen.dart';
import 'package:hostapp/src/screen/login_page.dart';
 
import 'src/app.dart';
 
void main() {
  runApp(new MaterialApp(
  //theme: new ThemeData(scaffoldBackgroundColor: const Color(0xff151232)),
  theme: new ThemeData(scaffoldBackgroundColor: Colors.white),
  debugShowCheckedModeBanner: false, 
  home: PasswordlessApp(),//new PasswordlessApp(),
   ));
}
