import 'package:apple_sign_in/apple_sign_in.dart';
import 'package:device_info/device_info.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:hostapp/src/screen/checkUserScreen.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/service/queryMutation.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';
import 'welcome.dart';
import 'sign_in.dart';
import 'login_page.dart';
import 'dart:async';

class AuthScreen extends StatefulWidget {
  @override
  AuthScreenState createState() => AuthScreenState();
}

class AuthScreenState extends State<AuthScreen> {
    final CustomFuntion _customFuntion = locator<CustomFuntion>(); //instance of custom function
  FirebaseUser user;
  final FirebaseAuth _auth = FirebaseAuth.instance;
  var existingemail;
  bool signupcheck = false;
  bool isLoading = false;
  bool _load = false;
  bool _appledevice = false;
  TextEditingController textemail = new TextEditingController();
  GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();
  bool supportsAppleSignIn = false;
  QueryMutation addMutation = QueryMutation();
  Locale _myLocale;
  SharedPreferences sharedPreferences;
  String errorMessage = '';


    
  @override
  void didChangeDependencies() {
   _myLocale = Localizations.localeOf(context);
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
      setState(() {
        _appledevice = true;
      });
    } else {
      print("it is not an iOS device");
      setState(() {
        _appledevice = false;
      });
    }
  }
  //Function end to check device type

  /// Function start for handling apple signup

  

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
    if (Theme.of(context).platform == TargetPlatform.iOS) {
      setState(() {
        _appledevice = true;
      });
    } else {
      print("it is not an iOS device");
      setState(() {
        _appledevice = false;
      });
    }
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
        child: SingleChildScrollView(
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                Text((errorMessage == null ? '' : errorMessage),
                      style: TextStyle(
                          color: Colors.red,
                          fontWeight: FontWeight.normal,
                          fontSize: 18.0),
                    ),
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
                      startLoading(); //start show progress bar
                      sigInwithG();
                     
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
                            signInWithApple();
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
                      _customFuntion.getTermconditions();
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
      ),
    );
  }

  startLoading(){
    setState(() {
       _load = true;
      });
  }

  stopLoading(){
     setState(() {
       _load = false;
      });
  }

  showErrorMessage({String error}){
    setState(() {
      errorMessage = error;
    });
  }


sigInwithG()async{
  clearErrorMessage();
  startLoading();
  try{
    GoogleSignInAccount account = await googleSignIn.signIn();
  if(account == null){
      stopLoading();
      showErrorMessage(error: 'Account is Null');
    
  }else{
    GoogleSignInAuthentication googleSignInAuthentication = await account.authentication;
    final AuthCredential credential = GoogleAuthProvider.getCredential(
    accessToken: googleSignInAuthentication.accessToken,
    idToken: googleSignInAuthentication.idToken,
  );
    print(googleSignInAuthentication.accessToken);

  final AuthResult authResult = await _auth.signInWithCredential(credential);
  final FirebaseUser user = authResult.user;
     print('***************** AFTER SUCCESS');
     _customFuntion.saveEmailandID(email: user.email, uid: user.uid, idToken: googleSignInAuthentication.idToken);
     Navigator.pushReplacement(
           context,
          MaterialPageRoute(
              builder: (context) => CheckUserScreen(
                    userEmail: user.email,
                    userid: user.uid,
                  )));
    // print(googleSignInAuthentication.accessToken);
    // print(googleSignInAuthentication.idToken);
    // print(user.uid);
    showErrorMessage(error: 'Successful, ${user.displayName}!!');
     stopLoading(); 
  }

  }catch(e){
    stopLoading();
    print(e.toString());
     showErrorMessage(error: e.toString());
  }
}

 signInWithApple() async {
    startLoading();
    try {
      final AuthorizationResult result = await AppleSignIn.performRequests([
        AppleIdRequest(requestedScopes: [Scope.email, Scope.fullName])
      ]);

      if(result == null){
        stopLoading();
      showErrorMessage(error: 'Account is Null');

      }else{
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

            final AuthResult _res =  await FirebaseAuth.instance.signInWithCredential(credential);
            FirebaseAuth.instance.currentUser().then((val) async {
              UserUpdateInfo updateUser = UserUpdateInfo();
              updateUser.displayName = "${appleIdCredential.fullName.givenName} ${appleIdCredential.fullName.familyName}";
              updateUser.photoUrl = "define an url";
              await val.updateProfile(updateUser);
            });

             final FirebaseAuth auth = FirebaseAuth.instance;
              final FirebaseUser user1 = await auth.currentUser();
              user.getIdToken().then((tokenresult) {

                //print(tokenresult.token);
                // showErrorMessage(error: 'Debug Only \n${user1.email} \n ${user1.uid} \n ${tokenresult.token}');
                 _customFuntion.saveEmailandID(email: user1.email, uid: user1.uid, idToken: tokenresult.token);
                 Navigator.pushReplacement(
                context,
                MaterialPageRoute(
                    builder: (context) => CheckUserScreen(
                          userEmail: user1.email,
                          userid: user.uid,
                        )));
              });

          } catch (e) {
            print("error");
              stopLoading();
       showErrorMessage(error: e.toString());
          }

          break;
        case AuthorizationStatus.error:
        stopLoading();
       showErrorMessage(error: 'Authorization Status Error Occur');
          // do something
          break;

        case AuthorizationStatus.cancelled:
          stopLoading();
       showErrorMessage(error: 'Authorization Status Cancel');
          break;
      }

      }

      
    } catch (error) {
      stopLoading();
      print("error with apple sign in");
     showErrorMessage(error: error.toString());
    }
  }


clearErrorMessage(){
  setState(() {
       errorMessage = null;
      });
}

}