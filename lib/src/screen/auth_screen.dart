import 'package:apple_sign_in/apple_sign_in.dart';
//import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:device_info/device_info.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/screen/terms&conditions.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/service/auth_bloc.dart';
import 'package:hostapp/src/service/auth_bloc_provider.dart';
import 'package:hostapp/src/service/queryMutation.dart';
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
  GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();
  // QueryMutation addMutation = QueryMutation();
  bool supportsAppleSignIn = false;
  QueryMutation addMutation = QueryMutation();
  // confirmUser(email: $email)
  //    mutation($email: String!){
  /*String selectdata = r"""
       mutation($email: String!){       
       confirmUser(email: $email)
}
          """;
         
          */

  String selectdata = r"""
              query($email: String!) {       
              getUserByEmail(email: $email){
              email
              }
            }
              """;

  /*String selectdata = r"""
              query  {       
              getUserByEmail(email: "featherdev01@gmail.com"){
              email
              }
            }
              """;*/

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
      _bloc.signInWIthEmailLink(
          await _bloc.getUserEmailFromStorage(), deepLink.toString());
      //.whenComplete(() => _authCompleted());
    }
  }

/*Future<bool> loginAction() async {
    //replace the below line of code with your login request
    await new Future.delayed(const Duration(seconds: 3));
    //Navigator.pop();

    return false;    
    
  }*/
  /*void _authCompleted() async {
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
  }*/

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
  /*void _authCompletedgoogle() async {
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
  }*/

  void _authCompletedgoogleGraphQl() async {
    print("email" + email);
    var email1 = email;
    print("emailllllll1111111" + email1);
  }

  /*void _authCompleteapple() async {
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
  }*/

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
    /*final HttpLink httpLink = HttpLink(
        uri:
            'https://us-central1-guestregistration-4140a.cloudfunctions.net/api');
    final ValueNotifier<GraphQLClient> client =
        ValueNotifier<GraphQLClient>(GraphQLClient(
            link: httpLink,
            cache: OptimisticCache(
              dataIdFromObject: typenameDataIdFromObject,
            )));*/
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

    /*return GraphQLProvider(
      client: client,*/
      return Scaffold(
        // body: Center(
        //     child: SingleChildScrollView(
        //child: new Container(
        /*body: Query(
            options: QueryOptions(
              //documentNode: gql(selectdata),
              documentNode: gql(selectdata),
            ),
            //builder: (runMutation, result) {
            builder: (
              QueryResult result, {
              VoidCallback refetch,
              FetchMore fetchMore,
            }) {*/
        /*if (result.data == null) {
                print("divya");
                return Center(child: Text('Data is Null'));
              }*/
        //print(result.data['countries'][0]['name']);

        /*return ListView.builder(
                itemBuilder: (BuildContext context, int index) {
                  //print("result.data['email']" + result.data['email']);
                  print(result.data["getUserByEmail"][0]["email"]);

                  return ListTile(
                    title: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text(result.data["getUserByEmail"][0]["email"]), //[index]['name']
                    ),
                  );
                },
                //  itemCount: result.data['email'].length,
                itemCount: 1,
              );*/

        body: Center(
          // print(result.data['email']),
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
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
                //Text(result.data['email']),
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
                      //  signInWithGoogle().then((value) => CircularProgressIndicator()).whenComplete(() async {
                      // showAlertDialog(context);
                      //Navigator.pop(context);

                      signInWithGoogle().whenComplete(() async {
                        final FirebaseAuth auth = FirebaseAuth.instance;
                        final FirebaseUser user1 = await auth.currentUser();
                        final email1 = user1.email;
                        print("email1"+email1);
                        final uid = user1.uid;
                        print("hai123");
                        GraphQLClient _client =
                            graphQLConfiguration.clientToQuery();
                        QueryResult result = await _client.mutate(
                          MutationOptions(
                            document: selectdata,
                            //variables: "email": _
                            variables: {
                              
                             'email':email1,
                            },
                          ),
                        );
                        //if (result.data == null) {
                          if(result.data["getUserByEmail"] == null){
                          print("inside if");
                          //print("result.data if "+result.data["getUserByEmail"][0]["email"]);
                          //return LoginPage();
                          Navigator.pushReplacement(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) => LoginPage(
                                                existingemail: email1.toString(),
                                              )));
                                               
                                              
                        } else {
                          print("inside else");
                        
                          //print("result.data else"+result.data["getUserByEmail"][0]["email"]);
                          Navigator.pushReplacement(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) => WelcomeScreen(
                                                email: email1.toString(),
                                              )));                          //return WelcomeScreen();
                        }
                        /*new Query(
            options: QueryOptions(
              //documentNode: gql(selectdata),
              documentNode: gql(selectdata),
            ),
            //builder: (runMutation, result) {
            builder: (
              QueryResult result, {
              VoidCallback refetch,
              FetchMore fetchMore,
            }) {

              print("hai");
             if(result.data == null){
               //result.data["getUserByEmail"][0]["email"]
                                  //print(result.data["getUserByEmail"][0]["email"]);
                                  print("email1"+email1);
                                  print("inside if");
                                  
                                      
                                                       return Text("newuser");
                                //return Text("email not avil");
                                } else {
                                  print("inside else");
                                     //print("result.data['email']"+result.data["getUserByEmail"][0]["email"]);
                                                   //return WelcomeScreen(email: email.toString());
                                                   return Text("Existing user");
                                                       
                                              
                                 //    return Text("email not present");         
                                }
            });*/
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
                      // _signInWithApple(context);
                      signInWithApple().whenComplete(() {
                        //   _authCompleteapple();
                        print(
                            "authcomplete for apple is //_authCompleteapple(); ");
                      });
                      //function call for apple sign up
                    },

                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(12))),
                    // color: Colors.white12,
                  ),
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
                ),
              ]),
        ),
        //}),
    //  ),
    );
  }
}
