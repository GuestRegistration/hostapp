import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/screen/auth_screen.dart';
import 'package:hostapp/src/screen/login_page.dart';
import 'package:hostapp/src/screen/CheckUserScreen.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'dart:async';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppImage.dart';
import 'package:hostapp/src/style/AppColor.dart';

class PasswordlessApp extends StatefulWidget {
  @override
  _PasswordlessAppState createState() => _PasswordlessAppState();
}

class _PasswordlessAppState extends State<PasswordlessApp> {
  GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();
  String email1;

  checkuser() async {
    //print("inside checkuser");

    // final FirebaseAuth auth = FirebaseAuth.instance;
    // final FirebaseUser user1 = await auth.currentUser();
    // email1 = user1.email;

    // GraphQLClient _client = await graphQLConfiguration.clientToQuery();
    // result = await _client.mutate(
    //   MutationOptions(
    //     documentNode: gql(selectdata),
    //     //document: selectdata,
    //     variables: {
    //       'email': email1,
    //       //'email': "diya.feb28@gmail.com"
    //     },
    //   ),
    // );

    // if (result.data["getUserByEmail"] == null) {
    //   print("inside if new user");
    //   /*Navigator.of(context).push(MaterialPageRoute(
    //     builder: (context) => LoginPage(existingemail: email1.toString()),
    //   ));*/
    //   return false;
    // } else {
    //   print("inside else existing user");
    //   /*Navigator.of(context).push(MaterialPageRoute(
    //     builder: (context) => WelcomeScreen(email: email1.toString()),
    //   ));*/
    //   return true;
    // }
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
      body:  StreamBuilder<FirebaseUser>(
             stream: FirebaseAuth.instance.onAuthStateChanged,
             builder: (context, snapshot) {

               if (snapshot.connectionState == ConnectionState.active) {
                 FirebaseUser user = snapshot.data;
                 if (user == null) {
                   //Not yet register
                   return AuthScreen();
                 }else{
                   //This User already Login.
                   return CheckUserScreen(userEmail: user.email,);
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