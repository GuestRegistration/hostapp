import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/screen/AddPropertyScreen.dart';
import 'package:hostapp/src/screen/Dashboard.dart';
import 'package:hostapp/src/screen/PasswordlessScreen.dart';
import 'package:hostapp/src/screen/login_view.dart';
import 'package:hostapp/src/screen/onboardScreen.dart';
import 'package:hostapp/src/service/authentication.dart';

var authService = locator<AuthService>();
class WrapperScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //This would change if User Logs in or no user found in real time(Real time)    
  return MaterialApp(
       home: Scaffold(
         body: Center(
           child: StreamBuilder<FirebaseUser>(
             stream: FirebaseAuth.instance.onAuthStateChanged,
             builder: (context, snapshot) {
               if (snapshot.connectionState == ConnectionState.active) {
                 FirebaseUser user = snapshot.data;
                 if (user == null) {
                   return OnboardScreen();
                 }else{
                //  print('User ID ${user.uid}, User Email ${user.email}');
                //    MyInjection().customlogic.saveUserID(userId: user.toString());
                   return Dashboard();
                 }
               } else {
                 return Text('');  //Connection Inactive, show error dialog
               }
             },
           ),
         ),
       ),
     );
  }
}