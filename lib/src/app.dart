import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/screen/OnboardScreen.dart';
import 'package:hostapp/src/screen/auth_screen.dart';
import 'package:hostapp/src/screen/CheckUserScreen.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/service/push_Notification.dart';
import 'dart:async';
import 'dart:io';
import 'package:hostapp/src/style/AppImage.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/util/customFunctions.dart';

class PasswordlessApp extends StatefulWidget {
  @override
  _PasswordlessAppState createState() => _PasswordlessAppState();
}

class _PasswordlessAppState extends State<PasswordlessApp> {
  GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();
  String email1;
   final CustomFuntion _customFuntion = locator<CustomFuntion>();
   final PushNotification _pushNotification = locator<PushNotification>();

  
  void _showDialog() {
    showDialog(
      context: this.context,
      builder: (context) => AlertDialog(
        title: Text("No Internet Found!"),
        content: Text("Switch on Mobile Data or Wi-Fi!"),
        actions: <Widget>[FlatButton(child: Text("Ok"), onPressed: () {
          Navigator.pop(context);
        })],
      ),
    );
  }
 
 
  void initState() {
     _customFuntion.getID();
     _pushNotification.getToken();
   // data();
    Timer.run(() {
      try {
        InternetAddress.lookup('google.com').then((result) {
          if (result.isNotEmpty && result[0].rawAddress.isNotEmpty) {
            print('connected');
          } else {
            _showDialog(); // show dialog
          }
        }).catchError((error) {
          _showDialog(); // show dialog
        });
      } on SocketException catch (_) {
        _showDialog();
        print('not connected'); // show dialog
      }

    });
    super.initState();
  }

  Widget build(BuildContext context) {
    return Scaffold(
      body:  StreamBuilder<User>(
             stream: FirebaseAuth.instance.authStateChanges(),
             builder: (context, snapshot) {

               if (snapshot.connectionState == ConnectionState.active) {
                 User user = snapshot.data;
                 if (user == null) {
                   //Not yet register
                   return OnboardScreen();
                 }else{
                   //This User already Login.
                   return CheckUserScreen(userEmail: user.email, userid: user.uid,);
                 }

                  //loading......
               }else if(snapshot.connectionState == ConnectionState.waiting){
                return Center(
                    child: Column(
                      mainAxisSize:  MainAxisSize.min,
                      children: <Widget>[
                        SizedBox(width: 300, height: 100,
                        child: Image.asset(AppImage.appLogo),
                        ),
                        SizedBox(height: 30,),
                        CircularProgressIndicator(
                          strokeWidth: 4,
                          valueColor: AlwaysStoppedAnimation(
                              AppColor.primary,
                          ),
                        )
                    ],),);
               }
             },
           )
    );
    // );
  }

  // data()async{
  //    await graphQLConfiguration.getFromServerClientToken();
  // await graphQLConfiguration.getNeccessartyToken();
  // }
  
}