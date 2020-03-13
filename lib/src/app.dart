import 'dart:async';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/screen/auth_screen.dart';
import 'package:hostapp/src/screen/login_page.dart';
import 'package:hostapp/src/screen/welcome.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';

class PasswordlessApp extends StatefulWidget {
  @override
  _PasswordlessAppState createState() => _PasswordlessAppState();
}

class _PasswordlessAppState extends State<PasswordlessApp> {
  GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();

  String selectdata = r"""
              query($email: String!) {       
              getUserByEmail(email: $email){
              email
              }
            }
              """;
  QueryResult result;
  String email1;
  checkuser() async {
    print("inside checkuser");

    final FirebaseAuth auth = FirebaseAuth.instance;
    final FirebaseUser user1 = await auth.currentUser();
    email1 = user1.email;

    GraphQLClient _client = await graphQLConfiguration.clientToQuery();
    result = await _client.mutate(
      MutationOptions(
        documentNode: gql(selectdata),
        //document: selectdata,
        variables: {
          'email': email1,
          //'email': "diya.feb28@gmail.com"
        },
      ),
    );

    if (result.data["getUserByEmail"] == null) {
      print("inside if new user");
      /*Navigator.of(context).push(MaterialPageRoute(
        builder: (context) => LoginPage(existingemail: email1.toString()),
      ));*/
      return false;
    } else {
      print("inside else existing user");
      /*Navigator.of(context).push(MaterialPageRoute(
        builder: (context) => WelcomeScreen(email: email1.toString()),
      ));*/
      return true;
    }
  }
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
    return MaterialApp(
      theme: new ThemeData(scaffoldBackgroundColor: Colors.white),
      home: Scaffold(
        body: Center(
          child: StreamBuilder<FirebaseUser>(
            stream: FirebaseAuth.instance.onAuthStateChanged,
            builder: (context, snapshot) {
              // return FutureBuilder(
              //   future: checkuser(),
              //  builder:(BuildContext context, AsyncSnapshot<dynamic> snapshot1) {
              if (snapshot.connectionState == ConnectionState.active) {
                FirebaseUser user = snapshot.data;

<<<<<<< HEAD
                if (user == null) {
                  print('User is null');
=======
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
                   print('User is null');
                    return AuthScreen();
                  } else {
                    print('User is not Null');
                    return WelcomeScreen();
                   

                  }
                } else {
                  // return Signupcomplete(); //Start in dashboard
                  print("inside ConnectionState else ");
                  //return OnboardScreen();
>>>>>>> 34cf105f9fc08574e5974843e4e4462335f4d51f
                  return AuthScreen();
                }
                /*else if (snapshot1.data == false) {
                        print('User is not Null');

                        return LoginPage();
                      }  
                        return WelcomeScreen();*/
                else {
                  return FutureBuilder(
                      future: checkuser(),
                      builder: (BuildContext context,
                          AsyncSnapshot<dynamic> snapshot1) {
                            /*if (snapshot1.connectionState == ConnectionState.waiting) { 
                                       print("snapshot1.data" + snapshot1.data.toString());
                              return CircularProgressIndicator();
                            }*/
                   /*   if (snapshot1.connectionState ==
                            ConnectionState.active) {
                          print("snapshot1.data" + snapshot1.data.toString());*/

                          if (snapshot1.data == false) {
                            print('User  table is null');
                            return LoginPage();
                          }
                          else{
                              print('Existing user ');
                               return WelcomeScreen();
                          }
                          //return WelcomeScreen();
                       /* } else {
                          return AuthScreen();
                        }*/
                      });
                }
              } else {
                print("inside ConnectionState else ");
                return AuthScreen();
              }
              // });
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
    return MaterialApp(
       //   theme: new ThemeData(scaffoldBackgroundColor: const Color(0xff151232)),
        theme: new ThemeData(scaffoldBackgroundColor: Colors.white),
        home: Scaffold(
          body: AuthScreen(),
        ),
      );
   // );
  }
}*/
