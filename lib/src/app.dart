import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/login_page.dart';
import 'package:hostapp/src/screen/onboardScreen.dart';
import 'package:hostapp/src/screen/signupcomplete.dart';
import 'package:hostapp/src/screen/welcome.dart';
import 'package:hostapp/src/service/auth_bloc_provider.dart';
import 'package:firebase_auth/firebase_auth.dart';

class PasswordlessApp extends StatelessWidget {
  checkuser(email) {
    print("user email" + email);
    // var email;
    // = user.email;
    Firestore.instance
        .collection("users")
        .where("email", isEqualTo: email)
        .getDocuments()
        .then((string) async {
      print('Firestore response111: , ${string.documents.length}');
      string.documents.forEach(
        (doc) => print("data available"),
      );
      if (string.documents.length == 0) {
        /*Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => LoginPage(
                      existingemail: email.toString().toLowerCase(),
                    )));*/
        return OnboardScreen();
      } else {
        print("user already exists");
        return WelcomeScreen();
        //break
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return AuthBlocProvider(
      child: MaterialApp(
        theme: new ThemeData(scaffoldBackgroundColor: Colors.white),
        home: Scaffold(
          body: Center(
            child: StreamBuilder<FirebaseUser>(
              stream: FirebaseAuth.instance.onAuthStateChanged,
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.active) {
                  FirebaseUser user = snapshot.data;
                  // print("user uid"+user.uid);
                  ///  print("user email"+user.email);
                  /*var email = user.email;
                   Firestore.instance
                        .collection("users")
                        .where("email", isEqualTo: email)
                        .getDocuments()
                        .then((string) async {
                      print(
                          'Firestore response111: , ${string.documents.length}');
                      string.documents.forEach(
                        (doc) => print("data available"),
                      );*/
                  if (user == null) {
                    return OnboardScreen(); //Start from the beginning
                  } else {
                    return WelcomeScreen();
                  }
                } else {
                  // return Signupcomplete(); //Start in dashboard
                  print("inside ConnectionState else ");
                  return OnboardScreen();
                }
              },
            ),
          ),
        ),
      ),
    );
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
