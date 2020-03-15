import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/screen/auth_screen.dart';
import 'package:hostapp/src/screen/login_page.dart';
import 'package:hostapp/src/screen/welcome.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'dart:async';
import 'dart:io';

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
    //print("inside checkuser");

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
              if (snapshot.connectionState == ConnectionState.active) {
                FirebaseUser user = snapshot.data;

                if (user == null) {
                  print('User is null');
                  return AuthScreen();
                } else {
                  return FutureBuilder(
                      future: checkuser(),
                      builder: (BuildContext context,
                          AsyncSnapshot<dynamic> snapshot1) {
                        if (snapshot1.data == false) {
                          print('User table is null');
                          return LoginPage();
                        }
                        else{
                          print('Existing user ');
                          return WelcomeScreen();
                        }
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