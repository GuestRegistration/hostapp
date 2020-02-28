import 'package:apple_sign_in/apple_sign_in.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:device_info/device_info.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/screen/terms&conditions.dart';
import 'package:hostapp/src/service/auth_bloc.dart';
import 'package:hostapp/src/service/auth_bloc_provider.dart';
import 'package:hostapp/src/service/repository.dart';
import 'package:hostapp/src/style/AppColor.dart';

/// start import for handling apple signup

import 'welcome.dart';
import 'package:firebase_dynamic_links/firebase_dynamic_links.dart';
import 'sign_in.dart';
import 'login_page.dart';

import 'dart:async';

import 'package:firebase_auth_oauth/firebase_auth_oauth.dart';
import 'package:flutter/services.dart';

class AuthScreen extends StatefulWidget {
  @override
  AuthScreenState createState() => AuthScreenState();
}

class AuthScreenState extends State<AuthScreen> {
  final _repository = Repository();
  AuthBloc _bloc;
  Locale _myLocale;
  FirebaseUser user;
  var existingemail;
  bool signupcheck = false;
  bool isLoading = false;
  bool _load = false;
  TextEditingController textemail = new TextEditingController();
  bool supportsAppleSignIn = false;
  // confirmUser(email: $email)
  //    mutation($email: String!){ 
  String selectdata = r"""
        mutation{       
       confirmUser(email: "diya.feb28@gmail.com")
}
          """;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _bloc = AuthBlocProvider.of(context);
    this.initDynamicLinks();
    _myLocale = Localizations.localeOf(context);
  }

  void initState() {
    getdeviceinfo();
    super.initState();
  }

  Future<void> performSignIn() async {
    print("inside perform signin");
    try {
      /*FirebaseUser user = await FirebaseAuthOAuth()
          .openSignInFlow("apple.com", ["email"], {"locale": "en"});*/
      //print("email"+user.email);
      await FirebaseAuthOAuth()
          .openSignInFlow("apple.com", ["email"], {"locale": "en"});
    } on PlatformException {
      debugPrint("error logging in");
    }
  }

  getdeviceinfo() async {
    if (Theme.of(context).platform == TargetPlatform.iOS) {
      //var iosInfo = await DeviceInfoPlugin().iosInfo;
      var iosInfo = await DeviceInfoPlugin().iosInfo;
      var version = iosInfo.systemVersion;

      if (version.contains('13') == true) {
        supportsAppleSignIn = true;
      }
    } else {
      print("it is not an iOS device");
    }
  }

  void initDynamicLinks() async {
    final PendingDynamicLinkData data =
        await FirebaseDynamicLinks.instance.getInitialLink();
    final Uri deepLink = data?.link;

    if (deepLink != null) {
      /// Change status to a loading state, so user would not get confused even for a second.
      _bloc.changeAuthStatus(AuthStatus.isLoading);
      _bloc
          .signInWIthEmailLink(
              await _bloc.getUserEmailFromStorage(), deepLink.toString())
          .whenComplete(() => _authCompleted());
    }
  }

/*Future<bool> loginAction() async {
    //replace the below line of code with your login request
    await new Future.delayed(const Duration(seconds: 3));
    //Navigator.pop();

    return false;    
    
  }*/
  void _authCompleted() async {
    // _authCompleted function is used to
    var email = await _bloc.getUserEmailFromStorage();

    print("email" + email.toLowerCase());
    Firestore.instance
        .collection("users")
        .where("email", isEqualTo: email.toLowerCase())
        .getDocuments()
        .then((string) {
      print('Firestore response111: , ${string.documents.length}');
      string.documents.forEach(
        (doc) => print("data available"),
      );
      if (string.documents.length == 0) {
        print("email not avilable new user");
        //email not avilable new user
        Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => LoginPage(
                      existingemail: email.toString().toLowerCase(),
                    )));
      } else {
        print("email  already exists");
//Existing user  already exists
        Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => WelcomeScreen(
                      email: email.toString().toLowerCase(),
                    )));
      }
    });
  }

/*getsavedata() async {

  SharedPreferences sharedPreferences;
    print("inside getCredential function");

    sharedPreferences = await SharedPreferences.getInstance();
    setState(() {
    var name = sharedPreferences.getString("name");
    var lastname  = sharedPreferences.getString("lastname");
    var phone = sharedPreferences.getString("phone");
     var  email= sharedPreferences.getString("email").toLowerCase();
      
    print("name" + name);
    print("lastname" + lastname);
    print("phone" + phone);
    print("email" + email);
//          sharedPreferences.clear();
    });
  }*/
  showAlertDialog(BuildContext context) {
    AlertDialog alert = AlertDialog(
      content: new Row(
        children: [
          CircularProgressIndicator(),
          Container(margin: EdgeInsets.only(left: 5), child: Text("Loading")),
        ],
      ),
    );
    showDialog(
      barrierDismissible: false,
      context: context,
      builder: (BuildContext context) {
        return alert;
      },
    );
  }

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

// Function end for handling apple signup
  void _authCompletedgoogle() async {
    //_authCompletedgoogle function is used to navigate the user after google signup
    // var email = user.email;
    print("email" + email);
    var email1 = email;
    print("emailllllll1111111" + email1);
    Firestore.instance
        .collection("users")
        .where("email", isEqualTo: email)
        .getDocuments()
        .then((string) {
      print('Firestore response111: , ${string.documents.length}');
      string.documents.forEach(
        (doc) => print("data available"),
      );
      if (string.documents.length == 0) {
        print("email not avilable");
        //new user
        Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => LoginPage(
                      existingemail: email.toString(),
                    )));
      } else {
        print("email  alreadyexists");
        //existing user
        Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => WelcomeScreen(
                      email: email.toString(),
                    )));
      }
    });
  }

  void _authCompletedgoogleGraphQl() async {
    print("email" + email);
    var email1 = email;
    print("emailllllll1111111" + email1);
  }

  void _authCompleteapple() async {
    //_authCompletedgoogle function is used to navigate the user after google signup
    // var email = user.email;
    final FirebaseAuth auth = FirebaseAuth.instance;
    final FirebaseUser currentuserapple = await auth.currentUser();

    print("currentuserapple.email" + currentuserapple.email);

    var email = currentuserapple.email;
    Firestore.instance
        .collection("users")
        .where("email", isEqualTo: email)
        .getDocuments()
        .then((string) {
      print('Firestore response111: , ${string.documents.length}');
      string.documents.forEach(
        (doc) => print("data available"),
      );
      if (string.documents.length == 0) {
        print("email not avilable");
        //new user
        Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => LoginPage(
                      existingemail: email.toString(),
                    )));
      } else {
        print("email  alreadyexists");
        //existing user
        Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => WelcomeScreen(
                      email: email.toString(),
                    )));
      }
    });
  }

  void init() {
    existingemail = "";
    super.initState();
  }

  @override
  void dispose() {
    _bloc.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final HttpLink httpLink = HttpLink(
        uri:
            'https://us-central1-guestregistration-4140a.cloudfunctions.net/api');
    final ValueNotifier<GraphQLClient> client =
        ValueNotifier<GraphQLClient>(GraphQLClient(
            link: httpLink,
            cache: OptimisticCache(
              dataIdFromObject: typenameDataIdFromObject,
            )));
    Widget loadingIndicator = _load
        ? Center(
            child: Column(
              children: <Widget>[
                SizedBox(
                  height: 20.0,
                ),
                new Container(
                  //color: Colors.white,
                  width: 60.0,
                  height: 60.0,
                  child: new CircularProgressIndicator(
                    strokeWidth: 8,
                    valueColor: AlwaysStoppedAnimation<Color>(
                      AppColor.primary1,
                    ),
                    backgroundColor: AppColor.borderColor,
                  ),
                ),
              ],
            ),
          )
        : new Container();

    return GraphQLProvider(
      client: client,
      child: Scaffold(
          body: Center(
              child: SingleChildScrollView(
        child: new Container(
          child: Mutation(
              options: MutationOptions(
                documentNode: gql(selectdata),
                onCompleted: (data) {
                  print("selectdata" + selectdata.toString());
                  print("lazysample" + data.toString());
                },
                onError: (error) {
                  print('Error Occur: ${error.toString()}');
                },
              ),
              builder: (runMutation, result) {
                //print("data.confirmUser"+result.data['confirmUser'].toString());
                return Center(
                  child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        /*comment start for passwordless login*/
                        // _emailInputField(snapshot.error),
                        /*comment end for passwordless login*/
                        /*SizedBox(
                                  height: 150.0,
                                ),*/
                        SizedBox(
                          height: 50.0,
                        ),

                        Center(
                          child: Container(
                            //height: 59.0,
                            //width: 330.0,

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
                            //width: 1.0,
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
                        /*comment start for passwordless login*/
                        /*  SizedBox(
                                  width: 300.0,
                                  height: 60.0,
                                  child: RaisedButton(
                                    onPressed: () async {
                                      var did;
                                      //...Start code block to check connected device is android or iOS
                                      DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
                                      if (Theme.of(context).platform ==
                                          TargetPlatform.iOS) {
                                        IosDeviceInfo iosDeviceInfo =
                                            await deviceInfo.iosInfo;
                                        // unique ID on iOS
                                        did = iosDeviceInfo.identifierForVendor;
                                        print("DeviceId for ios" + did);
                                      } else {
                                        AndroidDeviceInfo androidDeviceInfo =
                                            await deviceInfo.androidInfo;
                                        did = androidDeviceInfo.androidId;
                                        // unique ID on android
                                        print("DeviceId for android" + did);
                                      }
                                      //...End code block to check connected device is android or iOS
                                      print("DeviceId" + did);
                                      print("textemail" + textemail.text.toLowerCase());
                                      //... code for check email id is already available in the device table
                                      Firestore.instance
                                          .collection("device")
                                          .where("email",
                                              isEqualTo: textemail.text.toLowerCase())
                                          .getDocuments()
                                          .then((email) {
                                        print(
                                            'Firestore length: , ${email.documents.length}');
                                        email.documents.forEach((doc) =>
                                            //... code for check DeviceId is already available in the device table
                                            Firestore.instance
                                                .collection("device")
                                                .where("DeviceId",
                                                    isEqualTo: doc.documentID)
                                                .getDocuments()
                                                .then((string) {
                                              string.documents.forEach(
                                                (doc) => print(string.documents.length),
                                              );
                                              if (did == doc.data['DeviceId']) {
                                                // DeviceId was same so sent mail
                                                print("same device send mail");
                                                if (snapshot.hasData) {
                                                  var currentemail = snapshot.data;
                                                  print(currentemail);
                                                  existingemail = snapshot2.data;
                                                  if (existingemail == null) {
                                                    print(
                                                        "Not an existingemail first time login");
                                                    _authenticateUserWithEmail();
                                                  } else {
                                                    print("existingemail");
                                                    Navigator.pushReplacement(
                                                        context,
                                                        MaterialPageRoute(
                                                            builder: (context) =>
                                                                WelcomeScreen(
                                                                  email: existingemail
                                                                      .email,
                                                                )));
                                                  }
                                                }
                                              } else if (doc.data['DeviceId'] == "") {
                                                //....user signout form the device
                                                print("user signout form the device");
                                                print("doc.data['DeviceId']" +
                                                    doc.data['DeviceId']);
                                                print(did);
                                                //....update the device id in device table
                                                Firestore.instance.runTransaction(
                                                  (Transaction transaction) async {
                                                    Firestore.instance
                                                        .collection('device')
                                                        .document(did)
                                                        .setData(
                                                      {
                                                        'email': textemail.text
                                                            .toLowerCase(),
                                                        'DeviceId': did,
                                                      },
                                                    );
                                                  },
                                                );
                                                if (snapshot.hasData) {
                                                  var currentemail = snapshot.data;
                                                  print(currentemail);
                                                  existingemail = snapshot2.data;
                                                  if (existingemail == null) {
                                                    print(
                                                        "Not an existingemail first time login");
                                                    _authenticateUserWithEmail();
                                                  } else {
                                                    print("existingemail");
                                                    Navigator.pushReplacement(
                                                        context,
                                                        MaterialPageRoute(
                                                            builder: (context) =>
                                                                WelcomeScreen(
                                                                  email: existingemail
                                                                      .email,
                                                                )));
                                                  }
                                                }
                                              } else {
                                                print("Email is already signIn");
                                                //Email is already signIn dont allow to signup
                                                setState(() {
                                                  signupcheck = true;
                                                  //set the signupcheck flag true to display the error message
                                                });
                                              }
                                            }));
                                        if (email.documents.length == 0) {
                                          //new user allow to sent an email
                                          print("new user allow to sent an email");
                                          if (snapshot.hasData) {
                                            var currentemail = snapshot.data;
                                            print(currentemail);
                                            existingemail = snapshot2.data;
                                            if (existingemail == null) {
                                              print(
                                                  "Not an existingemail first time login");
                                              _authenticateUserWithEmail();
                                            } else {
                                              print("existingemail");
                                              Navigator.pushReplacement(
                                                  context,
                                                  MaterialPageRoute(
                                                      builder: (context) =>
                                                          WelcomeScreen(
                                                            email: existingemail.email,
                                                          )));
                                            }
                                          }
                                        }
                                      });
                                    },
                                    child: const Text(
                                      'Email me a Login Link',
                                      style: TextStyle(
                                          color: Colors.black,
                                          fontWeight: FontWeight.bold),
                                    ),
                                    shape: RoundedRectangleBorder(
                                        borderRadius:
                                            BorderRadius.all(Radius.circular(12))),
                                    color: Colors.white12,
                                  ),
                                ),*/
                        /*Center(
                                  child: Text(
                                    'OR',
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontWeight: FontWeight.bold,
                                        fontSize: 25.0),
                                  ),
                                ),*/
                        /*comment end for passwordless login*/

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
                            /*child: SignInButton(
                                    Buttons.Google,
                                      
                                    text: "Continue with Google",*/
                            child: new Row(
                              mainAxisSize: MainAxisSize.min,
                              children: <Widget>[
                                new Image.asset(
                                  'assets/images/google.png',
                                  width: 27.0,
                                  height: 28.0,
                                ),
                                new Container(
                                    padding: EdgeInsets.only(
                                        left: 10.0, right: 10.0),
                                    child: new Text(
                                      "Continue with Google",
                                      style: TextStyle(
                                          color: Colors.black,
                                          fontWeight: FontWeight.w600,
                                          fontSize: 16.0),
                                    )),
                              ],
                            ),
                            /*onPressed: () async {
                                      setState(() {
                                        _load = true;
                                      });
                                      //  signInWithGoogle().then((value) => CircularProgressIndicator()).whenComplete(() async {
                                      // showAlertDialog(context);
                                      //Navigator.pop(context);

                                      signInWithGoogle().whenComplete(() async {
                                        //_authCompletedgoogle();
                                       
                                        var did;
                                        print("useremail");
                                        //...Start code block to check connected device is android or iOS
                                        DeviceInfoPlugin deviceInfo =
                                            DeviceInfoPlugin();
                                        if (Theme.of(context).platform ==
                                            TargetPlatform.iOS) {
                                          IosDeviceInfo iosDeviceInfo =
                                              await deviceInfo.iosInfo;
                                          // unique ID on iOS
                                          did = iosDeviceInfo.identifierForVendor;
                                          print("DeviceId for ios" + did);
                                        } else {
                                          AndroidDeviceInfo androidDeviceInfo =
                                              await deviceInfo.androidInfo;
                                          did = androidDeviceInfo.androidId;
                                          // unique ID on android
                                          print("DeviceId for android" + did);
                                        }
                                        //...End code block to check connected device is android or iOS
                                        print("DeviceId" + did);
                                        print("hai email " + email);
                                        //... code for check email id is already available in the device table
                                        Firestore.instance
                                            .collection("device")
                                            .where("email",
                                                isEqualTo: email.toLowerCase())
                                            .getDocuments()
                                            .then((email) {
                                          print(
                                              'Firestore length: , ${email.documents.length}');
                                          email.documents.forEach((doc) =>
                                              //... code for check DeviceId is already available in the device table
                                              Firestore.instance
                                                  .collection("device")
                                                  .where("DeviceId",
                                                      isEqualTo: doc.documentID)
                                                  .getDocuments()
                                                  .then((string) async {
                                                string.documents.forEach(
                                                  (doc) =>
                                                      print(string.documents.length),
                                                );
                                                if (did == doc.data['DeviceId']) {
                                                  // DeviceId was same so sent mail
                                                  print(
                                                      "same device so allow to log in");
                                                  print("email for login" +
                                                      email.toString());

                                                  _authCompletedgoogle();
                                                } else if (doc.data['DeviceId'] ==
                                                    "") {
                                                  //....user signout form the device
                                                  print(
                                                      "user signout form the device");
                                                  print("doc.data['DeviceId']" +
                                                      doc.data['DeviceId']);

                                                  //print();
                                                  //....update the device id in device table
                                                  final FirebaseAuth auth =
                                                      FirebaseAuth.instance;

                                                  final FirebaseUser user1 =
                                                      await auth.currentUser();

                                                  print("user1.email" + user1.email);
                                                  Firestore.instance.runTransaction(
                                                    (Transaction transaction) async {
                                                      Firestore.instance
                                                          .collection('device')
                                                          .document(did)
                                                          .setData(
                                                        {
                                                          'email': user1.email
                                                              .toLowerCase()
                                                              .toString(),
                                                          'DeviceId': did,
                                                        },
                                                      );
                                                    },
                                                  );
                                                  _authCompletedgoogle();
                                                } else {
                                                  print(
                                                      "Email is already signIn for google");
                                                  final FirebaseAuth auth =
                                                      FirebaseAuth.instance;
                                                  final FirebaseUser user1 =
                                                      await auth.currentUser();

                                                  print("uid for user1 " + user1.uid);
                                                  //Email is already signIn dont allow to signup

                                                  setState(() {
                                                    signupcheck = true;
                                                    //set the signupcheck flag true to display the error message
                                                  });
                                                  await googleSignIn.signOut();
                                                }
                                              }));
                                          if (email.documents.length == 0) {
                                            //new user allow to sent an email
                                            print("new user allow to login");
                                            signInWithGoogle().whenComplete(() {
                                              _authCompletedgoogle();
                                              // print("hai"+email);
                                            });
                                          }
                                        });
                                        //return CircularProgressIndicator(); //add for loading
                                      });
                                    },*/

                            shape: RoundedRectangleBorder(
                                borderRadius:
                                    BorderRadius.all(Radius.circular(12))),
                            onPressed: () async {
                              setState(() {
                                _load = true;
                              });
                              //  signInWithGoogle().then((value) => CircularProgressIndicator()).whenComplete(() async {
                              // showAlertDialog(context);
                              //Navigator.pop(context);

                              signInWithGoogle().whenComplete(() async {
                                final FirebaseAuth auth = FirebaseAuth.instance;
                                final FirebaseUser user1 =
                                    await auth.currentUser();
                                final email1 = user1.email;
                                final uid = user1.uid;
                                runMutation(<String, dynamic>{
                                  "email": email1,
                                });

                               // print("result.data.confirmUser." + result.data.confirmUser.toString());
                                //print("result"+result.toString());
                                //print("result.data[0].confirmUser" +   result.data[0]["confirmUser"]);
                                 //print("result.data[0].confirmUser1" +   result.data['confirmUser']);
                                //print("result.data[0].confirmUser1" +   result.data["confirmUser"].toString());
                                //print("result.data[0].confirmUser" +   result.toString());
                                  //print("result.data[0].confirmUser2" +   result.data[0]['confirmUser']);
                                if (result.data == null) {
                                  print("inside if");
                                   Navigator.pushReplacement(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) => LoginPage(
                                                existingemail: email.toString(),
                                              )));
                                  
                                } else {
                                  print("inside else");
                                 //print("data.confirmUser" + result.data[0].confirmUser.toString());

                                  print("email  already exists");
                                  //existing user
                                  Navigator.pushReplacement(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) => WelcomeScreen(
                                                email: email.toString(),
                                              )));
                                }
                              });
                            },
                            // color: Colors.white12,
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
                        /*    SizedBox(
                                  width: 318.0,
                                  height: 47.0,
                                  child: SignInButton(
                                    Buttons.AppleDark,
                                    text: "Continue with Apple",*/
                        Container(
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
                                    padding: EdgeInsets.only(
                                        left: 10.0, right: 10.0),
                                    child: new Text(
                                      "Continue with Apple",
                                      style: TextStyle(
                                          color: Colors.white,
                                          fontWeight: FontWeight.w600,
                                          fontSize: 16.0),
                                    )),
                              ],
                            ),
                            /*textstyle:TextStyle(
                                          color: Colors.black,
                                          fontWeight: FontWeight.bold),*/

                            onPressed: () {
                              //function call for apple sign up
                              // _signInWithApple(context);
                              signInWithApple().whenComplete(() {
                                _authCompleteapple();
                                // print("hai"+email);
                              });
                              //function call for apple sign up
                            },
                            /* child: const Text(
                                      'Apple',
                                      style: TextStyle(
                                          color: Colors.black,
                                          fontWeight: FontWeight.bold),
                                    ),*/
                            shape: RoundedRectangleBorder(
                                borderRadius:
                                    BorderRadius.all(Radius.circular(12))),
                            // color: Colors.white12,
                          ),
                        ),
                        //SizedBox(height:30.0),
                        /* Container(
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
                                            padding: EdgeInsets.only(
                                                left: 10.0, right: 10.0),
                                            child: new Text(
                                              "Continue with Apple",
                                              style: TextStyle(
                                                  color: Colors.white,
                                                  fontWeight: FontWeight.w600,
                                                  fontSize: 16.0),
                                            )),
                                      ],
                             

                                    onPressed: () async {
                                      
                                      await performSignIn();
                                      
                                      //function call for apple sign up
                                    },
                                   
                                    shape: RoundedRectangleBorder(
                                        borderRadius:
                                            BorderRadius.all(Radius.circular(12))),
                                    // color: Colors.white12,
                                  ),
                                ),*/
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
                              Navigator.of(context).push(
                                MaterialPageRoute(
                                  builder: (context) {
                                    return Termconditions();
                                  },
                                ),
                              );
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
                          /*comment start for create new account*/
                          /*SizedBox(
                                  width: 300.0,
                                  height: 60.0,
                                  child: RaisedButton(
                                    onPressed: () {
                                      Navigator.of(context).push(
                                        MaterialPageRoute(
                                          builder: (context) {
                                            return CreatenewaccountScreen();
                                          },
                                        ),
                                      );
                                    },
                                    child: const Text(
                                      'Create a new account',
                                      style: TextStyle(
                                          color: Colors.black,
                                          fontWeight: FontWeight.bold),
                                    ),
                                    color: Colors.white12,
                                  ),
                                ),*/
                          /*comment start for create new account*/
                        ),
                      ]),
                );
              }),
        ),
      )
              //padding: EdgeInsets.all(32),
              /* child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              StreamBuilder(
                //  stream: _bloc.authStatus,
                  builder: (context, snapshot) {
                    switch (snapshot.data) {
                      case (AuthStatus.emailAuth):
                        return _authForm(true);
                        break;
                      case (AuthStatus.phoneAuth):
                        return _authForm(false);
                        break;
                      case (AuthStatus.emailLinkSent):
                        return Center(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: <Widget>[
                              // Center(
 
                              SizedBox(
                                height: 200.0,
                              ),
                              SizedBox(
                                height: 100.0,
                                width: 100.0,
                                child: CircularProgressIndicator(
                                    //valueColor: AlwaysStoppedAnimation(Color(0xff6839ed)),
                                    valueColor:
                                        AlwaysStoppedAnimation(Colors.black),
                                    strokeWidth: 5.0),
                              ),
                              SizedBox(
                                height: 50.0,
                              ),

                              Center(
                                child: Text(
                                  "We have emailed a special link to ${textemail.text} click the link to confirm your address and get started.",
                                  style: TextStyle(
                                    color: Colors.black,
                                    fontSize: 13.0,
                                  ),
                                ),
                              ),
                              SizedBox(
                                height: 5.0,
                              ),
                              Text("Wrong email? Please re-enter your address."),
                            ],
                          ),
                        );
                        break;
                      case (AuthStatus.isLoading):
                        return Center(child: CircularProgressIndicator());
                        break;
                      default:
                        // By default we will show the email auth form
                        return _authForm(true);
                        break;
                    }
                  })
            ],
          ),
        ),*/

              )),
    );
  }

  Widget _authForm(bool isEmail) {
    /*
    CircularProgressIndicator( strokeWidth: 8, valueColor:
    AlwaysStoppedAnimation<Color>(AppColor.primary, ), backgroundColor: AppColor.borderColor, ), ),
    */
    Widget loadingIndicator = _load
        ? Center(
            child: Column(
              children: <Widget>[
                SizedBox(
                  height: 20.0,
                ),
                new Container(
                  //color: Colors.white,
                  width: 60.0,
                  height: 60.0,
                  child: new CircularProgressIndicator(
                    strokeWidth: 8,
                    valueColor: AlwaysStoppedAnimation<Color>(
                      AppColor.primary1,
                    ),
                    backgroundColor: AppColor.borderColor,
                  ),
                ),
              ],
            ),
          )
        : new Container();
    /*return StreamBuilder(
      //  stream: isEmail ? _bloc.email : _bloc.phone,
        builder: (context, snapshot) {
          return StreamBuilder<FirebaseUser>(
              stream: FirebaseAuth.instance.onAuthStateChanged,
              builder: (context, snapshot2) {
                if (snapshot2.connectionState == ConnectionState.active) {
                  user = snapshot2.data;
                   
                }*/

    return SingleChildScrollView(
      child: new Form(
        child: Mutation(
            options: MutationOptions(
              documentNode: gql(selectdata),
              onCompleted: (data) {
                print(data.toString());
              },
              onError: (error) {
                print('Error Occur: ${error.toString()}');
              },
            ),
            builder: (runMutation, result) {
              return Center(
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>[
                      /*comment start for passwordless login*/
                      // _emailInputField(snapshot.error),
                      /*comment end for passwordless login*/
                      /*SizedBox(
                                height: 150.0,
                              ),*/
                      SizedBox(
                        height: 50.0,
                      ),

                      Center(
                        child: Container(
                          //height: 59.0,
                          //width: 330.0,

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
                          //width: 1.0,
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
                      /*comment start for passwordless login*/
                      /*  SizedBox(
                                width: 300.0,
                                height: 60.0,
                                child: RaisedButton(
                                  onPressed: () async {
                                    var did;
                                    //...Start code block to check connected device is android or iOS
                                    DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
                                    if (Theme.of(context).platform ==
                                        TargetPlatform.iOS) {
                                      IosDeviceInfo iosDeviceInfo =
                                          await deviceInfo.iosInfo;
                                      // unique ID on iOS
                                      did = iosDeviceInfo.identifierForVendor;
                                      print("DeviceId for ios" + did);
                                    } else {
                                      AndroidDeviceInfo androidDeviceInfo =
                                          await deviceInfo.androidInfo;
                                      did = androidDeviceInfo.androidId;
                                      // unique ID on android
                                      print("DeviceId for android" + did);
                                    }
                                    //...End code block to check connected device is android or iOS
                                    print("DeviceId" + did);
                                    print("textemail" + textemail.text.toLowerCase());
                                    //... code for check email id is already available in the device table
                                    Firestore.instance
                                        .collection("device")
                                        .where("email",
                                            isEqualTo: textemail.text.toLowerCase())
                                        .getDocuments()
                                        .then((email) {
                                      print(
                                          'Firestore length: , ${email.documents.length}');
                                      email.documents.forEach((doc) =>
                                          //... code for check DeviceId is already available in the device table
                                          Firestore.instance
                                              .collection("device")
                                              .where("DeviceId",
                                                  isEqualTo: doc.documentID)
                                              .getDocuments()
                                              .then((string) {
                                            string.documents.forEach(
                                              (doc) => print(string.documents.length),
                                            );
                                            if (did == doc.data['DeviceId']) {
                                              // DeviceId was same so sent mail
                                              print("same device send mail");
                                              if (snapshot.hasData) {
                                                var currentemail = snapshot.data;
                                                print(currentemail);
                                                existingemail = snapshot2.data;
                                                if (existingemail == null) {
                                                  print(
                                                      "Not an existingemail first time login");
                                                  _authenticateUserWithEmail();
                                                } else {
                                                  print("existingemail");
                                                  Navigator.pushReplacement(
                                                      context,
                                                      MaterialPageRoute(
                                                          builder: (context) =>
                                                              WelcomeScreen(
                                                                email: existingemail
                                                                    .email,
                                                              )));
                                                }
                                              }
                                            } else if (doc.data['DeviceId'] == "") {
                                              //....user signout form the device
                                              print("user signout form the device");
                                              print("doc.data['DeviceId']" +
                                                  doc.data['DeviceId']);
                                              print(did);
                                              //....update the device id in device table
                                              Firestore.instance.runTransaction(
                                                (Transaction transaction) async {
                                                  Firestore.instance
                                                      .collection('device')
                                                      .document(did)
                                                      .setData(
                                                    {
                                                      'email': textemail.text
                                                          .toLowerCase(),
                                                      'DeviceId': did,
                                                    },
                                                  );
                                                },
                                              );
                                              if (snapshot.hasData) {
                                                var currentemail = snapshot.data;
                                                print(currentemail);
                                                existingemail = snapshot2.data;
                                                if (existingemail == null) {
                                                  print(
                                                      "Not an existingemail first time login");
                                                  _authenticateUserWithEmail();
                                                } else {
                                                  print("existingemail");
                                                  Navigator.pushReplacement(
                                                      context,
                                                      MaterialPageRoute(
                                                          builder: (context) =>
                                                              WelcomeScreen(
                                                                email: existingemail
                                                                    .email,
                                                              )));
                                                }
                                              }
                                            } else {
                                              print("Email is already signIn");
                                              //Email is already signIn dont allow to signup
                                              setState(() {
                                                signupcheck = true;
                                                //set the signupcheck flag true to display the error message
                                              });
                                            }
                                          }));
                                      if (email.documents.length == 0) {
                                        //new user allow to sent an email
                                        print("new user allow to sent an email");
                                        if (snapshot.hasData) {
                                          var currentemail = snapshot.data;
                                          print(currentemail);
                                          existingemail = snapshot2.data;
                                          if (existingemail == null) {
                                            print(
                                                "Not an existingemail first time login");
                                            _authenticateUserWithEmail();
                                          } else {
                                            print("existingemail");
                                            Navigator.pushReplacement(
                                                context,
                                                MaterialPageRoute(
                                                    builder: (context) =>
                                                        WelcomeScreen(
                                                          email: existingemail.email,
                                                        )));
                                          }
                                        }
                                      }
                                    });
                                  },
                                  child: const Text(
                                    'Email me a Login Link',
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontWeight: FontWeight.bold),
                                  ),
                                  shape: RoundedRectangleBorder(
                                      borderRadius:
                                          BorderRadius.all(Radius.circular(12))),
                                  color: Colors.white12,
                                ),
                              ),*/
                      /*Center(
                                child: Text(
                                  'OR',
                                  style: TextStyle(
                                      color: Colors.black,
                                      fontWeight: FontWeight.bold,
                                      fontSize: 25.0),
                                ),
                              ),*/
                      /*comment end for passwordless login*/

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
                          /*child: SignInButton(
                                  Buttons.Google,
                                    
                                  text: "Continue with Google",*/
                          child: new Row(
                            mainAxisSize: MainAxisSize.min,
                            children: <Widget>[
                              new Image.asset(
                                'assets/images/google.png',
                                width: 27.0,
                                height: 28.0,
                              ),
                              new Container(
                                  padding:
                                      EdgeInsets.only(left: 10.0, right: 10.0),
                                  child: new Text(
                                    "Continue with Google",
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontWeight: FontWeight.w600,
                                        fontSize: 16.0),
                                  )),
                            ],
                          ),
                          /*onPressed: () async {
                                    setState(() {
                                      _load = true;
                                    });
                                    //  signInWithGoogle().then((value) => CircularProgressIndicator()).whenComplete(() async {
                                    // showAlertDialog(context);
                                    //Navigator.pop(context);

                                    signInWithGoogle().whenComplete(() async {
                                      //_authCompletedgoogle();
                                     
                                      var did;
                                      print("useremail");
                                      //...Start code block to check connected device is android or iOS
                                      DeviceInfoPlugin deviceInfo =
                                          DeviceInfoPlugin();
                                      if (Theme.of(context).platform ==
                                          TargetPlatform.iOS) {
                                        IosDeviceInfo iosDeviceInfo =
                                            await deviceInfo.iosInfo;
                                        // unique ID on iOS
                                        did = iosDeviceInfo.identifierForVendor;
                                        print("DeviceId for ios" + did);
                                      } else {
                                        AndroidDeviceInfo androidDeviceInfo =
                                            await deviceInfo.androidInfo;
                                        did = androidDeviceInfo.androidId;
                                        // unique ID on android
                                        print("DeviceId for android" + did);
                                      }
                                      //...End code block to check connected device is android or iOS
                                      print("DeviceId" + did);
                                      print("hai email " + email);
                                      //... code for check email id is already available in the device table
                                      Firestore.instance
                                          .collection("device")
                                          .where("email",
                                              isEqualTo: email.toLowerCase())
                                          .getDocuments()
                                          .then((email) {
                                        print(
                                            'Firestore length: , ${email.documents.length}');
                                        email.documents.forEach((doc) =>
                                            //... code for check DeviceId is already available in the device table
                                            Firestore.instance
                                                .collection("device")
                                                .where("DeviceId",
                                                    isEqualTo: doc.documentID)
                                                .getDocuments()
                                                .then((string) async {
                                              string.documents.forEach(
                                                (doc) =>
                                                    print(string.documents.length),
                                              );
                                              if (did == doc.data['DeviceId']) {
                                                // DeviceId was same so sent mail
                                                print(
                                                    "same device so allow to log in");
                                                print("email for login" +
                                                    email.toString());

                                                _authCompletedgoogle();
                                              } else if (doc.data['DeviceId'] ==
                                                  "") {
                                                //....user signout form the device
                                                print(
                                                    "user signout form the device");
                                                print("doc.data['DeviceId']" +
                                                    doc.data['DeviceId']);

                                                //print();
                                                //....update the device id in device table
                                                final FirebaseAuth auth =
                                                    FirebaseAuth.instance;

                                                final FirebaseUser user1 =
                                                    await auth.currentUser();

                                                print("user1.email" + user1.email);
                                                Firestore.instance.runTransaction(
                                                  (Transaction transaction) async {
                                                    Firestore.instance
                                                        .collection('device')
                                                        .document(did)
                                                        .setData(
                                                      {
                                                        'email': user1.email
                                                            .toLowerCase()
                                                            .toString(),
                                                        'DeviceId': did,
                                                      },
                                                    );
                                                  },
                                                );
                                                _authCompletedgoogle();
                                              } else {
                                                print(
                                                    "Email is already signIn for google");
                                                final FirebaseAuth auth =
                                                    FirebaseAuth.instance;
                                                final FirebaseUser user1 =
                                                    await auth.currentUser();

                                                print("uid for user1 " + user1.uid);
                                                //Email is already signIn dont allow to signup

                                                setState(() {
                                                  signupcheck = true;
                                                  //set the signupcheck flag true to display the error message
                                                });
                                                await googleSignIn.signOut();
                                              }
                                            }));
                                        if (email.documents.length == 0) {
                                          //new user allow to sent an email
                                          print("new user allow to login");
                                          signInWithGoogle().whenComplete(() {
                                            _authCompletedgoogle();
                                            // print("hai"+email);
                                          });
                                        }
                                      });
                                      //return CircularProgressIndicator(); //add for loading
                                    });
                                  },*/

                          shape: RoundedRectangleBorder(
                              borderRadius:
                                  BorderRadius.all(Radius.circular(12))),
                          onPressed: () async {
                            setState(() {
                              _load = true;
                            });
                            //  signInWithGoogle().then((value) => CircularProgressIndicator()).whenComplete(() async {
                            // showAlertDialog(context);
                            //Navigator.pop(context);

                            signInWithGoogle().whenComplete(() async {
                              final FirebaseAuth auth = FirebaseAuth.instance;
                              final FirebaseUser user1 =
                                  await auth.currentUser();
                              final email1 = user1.email;
                              final uid = user1.uid;
                              runMutation(<String, dynamic>{
                                "email": email1,
                              });
                            });
                          },
                          // color: Colors.white12,
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
                      /*    SizedBox(
                                width: 318.0,
                                height: 47.0,
                                child: SignInButton(
                                  Buttons.AppleDark,
                                  text: "Continue with Apple",*/
                      Container(
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
                                  padding:
                                      EdgeInsets.only(left: 10.0, right: 10.0),
                                  child: new Text(
                                    "Continue with Apple",
                                    style: TextStyle(
                                        color: Colors.white,
                                        fontWeight: FontWeight.w600,
                                        fontSize: 16.0),
                                  )),
                            ],
                          ),
                          /*textstyle:TextStyle(
                                        color: Colors.black,
                                        fontWeight: FontWeight.bold),*/

                          onPressed: () {
                            //function call for apple sign up
                            // _signInWithApple(context);
                            signInWithApple().whenComplete(() {
                              _authCompleteapple();
                              // print("hai"+email);
                            });
                            //function call for apple sign up
                          },
                          /* child: const Text(
                                    'Apple',
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontWeight: FontWeight.bold),
                                  ),*/
                          shape: RoundedRectangleBorder(
                              borderRadius:
                                  BorderRadius.all(Radius.circular(12))),
                          // color: Colors.white12,
                        ),
                      ),
                      //SizedBox(height:30.0),
                      /* Container(
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
                                          padding: EdgeInsets.only(
                                              left: 10.0, right: 10.0),
                                          child: new Text(
                                            "Continue with Apple",
                                            style: TextStyle(
                                                color: Colors.white,
                                                fontWeight: FontWeight.w600,
                                                fontSize: 16.0),
                                          )),
                                    ],
                           

                                  onPressed: () async {
                                    
                                    await performSignIn();
                                    
                                    //function call for apple sign up
                                  },
                                 
                                  shape: RoundedRectangleBorder(
                                      borderRadius:
                                          BorderRadius.all(Radius.circular(12))),
                                  // color: Colors.white12,
                                ),
                              ),*/
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
                            Navigator.of(context).push(
                              MaterialPageRoute(
                                builder: (context) {
                                  return Termconditions();
                                },
                              ),
                            );
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
                        /*comment start for create new account*/
                        /*SizedBox(
                                width: 300.0,
                                height: 60.0,
                                child: RaisedButton(
                                  onPressed: () {
                                    Navigator.of(context).push(
                                      MaterialPageRoute(
                                        builder: (context) {
                                          return CreatenewaccountScreen();
                                        },
                                      ),
                                    );
                                  },
                                  child: const Text(
                                    'Create a new account',
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontWeight: FontWeight.bold),
                                  ),
                                  color: Colors.white12,
                                ),
                              ),*/
                        /*comment start for create new account*/
                      ),
                    ]),
              );
            }),
      ),
    );
    //);
    //});
    // });
  }

  /// The method takes in an [error] message from our validator.
  /*comment start for passwordless login*/
  /* Widget _emailInputField(String error) {
    return Container(
      child: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            //SizedBox(height: 32),
            Text(
              "Login to your account",
              textAlign: TextAlign.start,
              style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontSize: 30.0),
            ),
            SizedBox(height: 32),
            Text(
              "Give us your email so we can identify you.",
              style: TextStyle(color: Colors.black, fontSize: 15.0),
            ),
            SizedBox(height: 32),
            Align(
              alignment: Alignment(-.85, 0),
              child: Container(
                child: Text(
                  "What Email address?",
                  style: TextStyle(color: Colors.black, fontSize: 15.0),
                ),
              ),
            ),
            SizedBox(height: 32),
            Align(
              alignment: Alignment(-.100, 0),
              child: Container(
                alignment: Alignment.center,
                width: MediaQuery.of(context).size.width - 100,
                decoration: new BoxDecoration(
                    color: Colors.white,
                    borderRadius: new BorderRadius.circular(12.0)),
                child: TextField(
                  onChanged: _bloc.changeEmail,
                  controller: textemail,
                  keyboardType: TextInputType.emailAddress,
                  autofocus: false,
                  decoration: InputDecoration(
                    hintText: 'Email',
                    errorText: error,
                    contentPadding: EdgeInsets.all(20),
                  ),
                ),
              ),
            ),

            SizedBox(height: 10),
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
            SizedBox(
              height: 30.0,
            ),
            Align(
              alignment: Alignment.bottomRight,
              child: Container(
                child: Text(
                  "By continuing, you agree to our Terms of Services",
                  style: TextStyle(color: Colors.black, fontSize: 15.0),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }*/

  /*void _authenticateUserWithEmail() {
    _bloc.sendSignInWithEmailLink().whenComplete(() => _bloc
        .storeUserEmail()
        .whenComplete(() => _bloc.changeAuthStatus(AuthStatus.emailLinkSent)));
  }*/
  /*comment end for passwordless login*/

  _showSnackBar(String error) {
    final snackBar = SnackBar(content: Text(error));
    Scaffold.of(context).showSnackBar(snackBar);
  }
  //To create a new account after sending signin mail to the user

}
