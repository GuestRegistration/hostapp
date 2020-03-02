import 'package:apple_sign_in/apple_sign_in.dart';
import 'package:device_info/device_info.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/service/queryMutation.dart';
import 'welcome.dart';
import 'sign_in.dart';
import 'login_page.dart';
import 'dart:async';

class AuthScreen extends StatefulWidget {
  @override
  AuthScreenState createState() => AuthScreenState();
}

class AuthScreenState extends State<AuthScreen> {
  FirebaseUser user;
  var existingemail;
  bool signupcheck = false;
  bool isLoading = false;
  bool _load = false;
  bool _appledevice =false;
  TextEditingController textemail = new TextEditingController();
  GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();
  bool supportsAppleSignIn = false;
  QueryMutation addMutation = QueryMutation();
  String selectdata = r"""
              query($email: String!) {       
              getUserByEmail(email: $email){
              email
              }
            }
              """;

  @override
    void didChangeDependencies() {
    super.didChangeDependencies();
 
  }

  void initState() {
    getdeviceinfo();
    super.initState();
  }
 
 //Function start to check device type
  getdeviceinfo() async {
    if (Theme.of(context).platform == TargetPlatform.iOS) {
       var iosInfo = await DeviceInfoPlugin().iosInfo;
      var version = iosInfo.systemVersion;
      if (version.contains('13') == true) {
        supportsAppleSignIn = true;
      }
    } else {
      print("it is not an iOS device");
      setState(() {
        _appledevice = true;
      });
    }
  }
 //Function end to check device type

  /// Function start for handling apple signup

  Future signInWithApple() async {
    try {
      final AuthorizationResult result = await AppleSignIn.performRequests([
        AppleIdRequest(requestedScopes: [Scope.email, Scope.fullName])
      ]);

      switch (result.status) {
        case AuthorizationStatus.authorized:
          try {
            print("successfull sign in");
            final AppleIdCredential appleIdCredential = result.credential;

            OAuthProvider oAuthProvider =
                new OAuthProvider(providerId: "apple.com");
            final AuthCredential credential = oAuthProvider.getCredential(
              idToken: String.fromCharCodes(appleIdCredential.identityToken),
              accessToken:
                  String.fromCharCodes(appleIdCredential.authorizationCode),
            );

            final AuthResult _res =
                await FirebaseAuth.instance.signInWithCredential(credential);

            FirebaseAuth.instance.currentUser().then((val) async {
              UserUpdateInfo updateUser = UserUpdateInfo();
              updateUser.displayName =
                  "${appleIdCredential.fullName.givenName} ${appleIdCredential.fullName.familyName}";
              updateUser.photoUrl = "define an url";
              await val.updateProfile(updateUser);
            });
          } catch (e) {
            print("error");
          }
          break;
        case AuthorizationStatus.error:
          // do something
          break;

        case AuthorizationStatus.cancelled:
          print('User cancelled');
          break;
      }
    } catch (error) {
      print("error with apple sign in");
    }
  }

  void init() {
    existingemail = "";
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    Widget loadingIndicator = _load
        ? Center(
            child: Column(
              children: <Widget>[
                SizedBox(
                  height: 20.0,
                ),
                new Container(
                  width: 60.0,
                  height: 60.0,
                  child: new CircularProgressIndicator(
                    strokeWidth: 8,
                    valueColor: AlwaysStoppedAnimation<Color>(
                      Color(0xFF45A1C9),
                    ),
                    backgroundColor: Color(0xFFC6DEE9),
                  ),
                ),
              ],
            ),
          )
        : new Container();

    return Scaffold(
      body: Center(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              SizedBox(
                height: 50.0,
              ),
              Center(
                child: Container(
                  child: Text(
                    "Let's get started",
                    style: TextStyle(
                        color: Colors.black,
                        fontWeight: FontWeight.bold,
                        fontSize: 34.0),
                  ),
                ),
              ),
              SizedBox(
                height: 20.0,
              ),
              Center(
                child: SizedBox(
                  child: Text(
                    "Select a method to begin using",
                    style: TextStyle(
                      color: Color(0xff8F8F8F),
                      fontSize: 14.0,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
              SizedBox(
                child: Text(
                  "Guest Registration.",
                  style: TextStyle(
                    color: Color(0xff8F8F8F),
                    fontSize: 14.0,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
              SizedBox(
                height: 50.0,
              ),
              Container(
                width: 318.0,
                height: 47.0,
                decoration: new BoxDecoration(
                  borderRadius: new BorderRadius.circular(
                    13.0,
                  ),
                ),
                child: RaisedButton(
                  color: const Color(0xffF1F1F1),
                  child: new Row(
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      new Image.asset(
                        'assets/images/google.png',
                        width: 27.0,
                        height: 28.0,
                      ),
                      new Container(
                          padding: EdgeInsets.only(left: 10.0, right: 10.0),
                          child: new Text(
                            "Continue with Google",
                            style: TextStyle(
                                color: Colors.black,
                                fontWeight: FontWeight.w600,
                                fontSize: 16.0),
                          )),
                    ],
                  ),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(Radius.circular(12))),
                  onPressed: () async {
                    setState(() {
                      _load = true;
                    });

                    signInWithGoogle().whenComplete(() async {
                      //After completion of signInWithGoogle its add the entry in cloud firestore database
                      final FirebaseAuth auth = FirebaseAuth.instance;
                      final FirebaseUser user1 = await auth.currentUser();
                      final email1 = user1.email;
                      print("email1" + email1);
                      GraphQLClient _client =
                          graphQLConfiguration.clientToQuery();
                      QueryResult result = await _client.mutate(
                        MutationOptions(
                          document: selectdata,
                         
                          variables: {
                            'email': email1,
                          },
                        ),
                      );

                      if (result.data["getUserByEmail"] == null) {
                        print("inside if");
                        Navigator.pushReplacement(
                            context,
                            MaterialPageRoute(
                                builder: (context) => LoginPage(
                                      existingemail: email1.toString(),
                                    )));
                      } else {
                        print("inside else");

                                    return WelcomeScreen(email: email1.toString());
                      }
                    });
                  },
                ),
              ),
              SizedBox(
                height: 32.0,
              ),
              Visibility(
                child: Text(
                  "You are already logged in. Please sign out of your other device first",
                  style: TextStyle(
                      color: Colors.red,
                      fontWeight: FontWeight.bold,
                      fontSize: 12.0),
                ),
                visible: signupcheck,
              ),
              Visibility(
                              child: Container(
                  width: 318.0,
                  height: 47.0,
                  decoration: new BoxDecoration(
                    borderRadius: new BorderRadius.circular(
                      13.0,
                    ),
                  ),
                  child: RaisedButton(
                    color: Colors.black,
                    child: new Row(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        new Image.asset(
                          'assets/images/applelogo.png',
                          width: 30.0,
                          height: 30.0,
                        ),
                        new Container(
                            padding: EdgeInsets.only(left: 10.0, right: 10.0),
                            child: new Text(
                              "Continue with Apple",
                              style: TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.w600,
                                  fontSize: 16.0),
                            )),
                      ],
                    ),
                    onPressed: () {
                      //function call for apple sign up

                      signInWithApple().whenComplete(() async {
                        setState(() {
                          _load = true;
                        });
                        final FirebaseAuth auth = FirebaseAuth.instance;
                        final FirebaseUser user1 = await auth.currentUser();
                        final email1 = user1.email;
                        print("email1" + email1);
                        GraphQLClient _client =
                            graphQLConfiguration.clientToQuery();
                        QueryResult result = await _client.mutate(
                          MutationOptions(
                            document: selectdata,
                            //documentNode: gql(selectdata),
                            variables: {
                              'email': email1,
                            },
                          ),
                        );

                        if (result.data["getUserByEmail"] == null) {
                          print("inside if");

                          Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => LoginPage(
                                        existingemail: email1.toString(),
                                      )));
                        } else {
                          print("inside else");

                          Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => WelcomeScreen(
                                        email: email1.toString(),
                                      ))); 
                        }
                      });
                      //function call for apple sign up
                    },
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(12))),
                  ),
                ),
                 visible: _appledevice,
              ),
              new Align(
                child: loadingIndicator,
                alignment: FractionalOffset.center,
              ),
              SizedBox(
                height: 150.0,
              ),
              SizedBox(
                width: 300.0,
                height: 60.0,
                child: FlatButton(
                  onPressed: () {
                  },
                  child: const Text(
                    'Terms & Conditions',
                    style: TextStyle(
                      color: Color(0xff8F8F8F),
                      fontSize: 12.0,
                      fontWeight: FontWeight.w600,
                      decoration: TextDecoration.underline,
                    ),
                  ),
                ),
              ),
            ]),
      ),
    );
  }
}
