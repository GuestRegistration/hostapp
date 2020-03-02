import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/auth_screen.dart';
import 'package:hostapp/src/screen/welcome.dart';
import 'package:firebase_auth/firebase_auth.dart';

class PasswordlessApp extends StatelessWidget {
 

  @override
  Widget build(BuildContext context) {
    //return AuthBlocProvider(
      //    return AuthBlocProvider(

  return MaterialApp(
        theme: new ThemeData(scaffoldBackgroundColor: Colors.white),
        home: Scaffold(
          body: Center(
            child: StreamBuilder<FirebaseUser>(
              stream: FirebaseAuth.instance.onAuthStateChanged,
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.active) {
                  FirebaseUser user = snapshot.data;
              
                  if (user == null) {
                   /// return OnboardScreen(); //Start from the beginning
                    return AuthScreen();
                  } else {
                    return WelcomeScreen();
                  }
                } else {
                  // return Signupcomplete(); //Start in dashboard
                  print("inside ConnectionState else ");
                  //return OnboardScreen();
                  return AuthScreen();
                }
              },
            ),
          ),
        ),
      );
   // );
  }
}
/*
import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/onboardScreen.dart';
import 'package:hostapp/src/service/auth_bloc_provider.dart';
import 'package:firebase_auth/firebase_auth.dart';
class PasswordlessApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return AuthBlocProvider(
      child: MaterialApp(
       //   theme: new ThemeData(scaffoldBackgroundColor: const Color(0xff151232)),
        theme: new ThemeData(scaffoldBackgroundColor: Colors.white),
        home: Scaffold(
          body: OnboardScreen(),
        ),
      ),
    );
  }
}
 */
