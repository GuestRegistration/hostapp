import 'package:device_info/device_info.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'dart:async' show Future;
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:hostapp/src/screen/welcome.dart';
import 'package:hostapp/src/service/auth_bloc.dart';
import 'package:shared_preferences/shared_preferences.dart';



class NewLoginPage extends StatefulWidget {
  final String email, existingemail;
  NewLoginPage({this.email, this.existingemail});
  @override
  _NewLoginPageState createState() => _NewLoginPageState();
}

class _NewLoginPageState extends State<NewLoginPage>
    with WidgetsBindingObserver {
 AuthBloc _bloc;
  DatabaseReference userRef;
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
  String email1;
  TextEditingController name = new TextEditingController();
  TextEditingController lastname = new TextEditingController();
  TextEditingController email = new TextEditingController();
  TextEditingController phone = new TextEditingController();
  TextEditingController propertiesname = new TextEditingController();
  TextEditingController role = new TextEditingController();

  var hostProperty, hostrole;
  List host1;

  void initState() {
    super.initState();

    // getdata();
    // _getId();
    //hosts = List();
    email1 = "${widget.existingemail}";
    print(email1);
    WidgetsBinding.instance.addObserver(this);
  }
 void _authenticateUserWithEmail() {
    _bloc.sendSignInWithEmailLink().whenComplete(() => _bloc
        .storeUserEmail()
        .whenComplete(() => _bloc.changeAuthStatus(AuthStatus.emailLinkSent)));
  }
  SharedPreferences sharedPreferences;
  savedata() async {
    print("inside   save data function");
    sharedPreferences = await SharedPreferences.getInstance();
    setState(() {
      sharedPreferences.setString("name", name.text);
      sharedPreferences.setString("lastname", lastname.text);
      sharedPreferences.setString("phone", phone.text);
      sharedPreferences.setString("email", widget.email.toLowerCase());
      sharedPreferences.commit();
    //  getsavedata();
     _authenticateUserWithEmail();
    });
  }

  /*getsavedata() async {
    print("inside getCredential function");
    print("name" + name.text);
    print("lastname" + lastname.text);
    print("phone" + phone.text);
    print("email" + widget.email.toLowerCase());
    sharedPreferences = await SharedPreferences.getInstance();
    setState(() {
      name.text = sharedPreferences.getString("name");
      lastname.text = sharedPreferences.getString("lastname");
      phone.text = sharedPreferences.getString("phone");
      widget.email= sharedPreferences.getString("email");
//          sharedPreferences.clear();
    });
  }*/

  getData() async {
    return Firestore.instance.collection('users').snapshots();
  }

  void addUser() async {
    final FirebaseAuth auth = FirebaseAuth.instance;
    final FirebaseUser user1 = await auth.currentUser();
    final email1 = user1.email;
    final uid = user1.uid;
    print("uidddddddddddddd" + uid);
    var emailid = "${widget.existingemail}";

    print("email" + emailid);
    Firestore.instance
        .collection("users")
        .where("email", isEqualTo: emailid)
        .getDocuments()
        .then((string) async {
      print('Firestore response111: , ${string.documents.length}');
      string.documents.forEach(
        (doc) => print("data available"),
      );
      if (string.documents.length == 0) {
        try {
          Firestore.instance.runTransaction(
            (Transaction transaction) async {
              Firestore.instance.collection('users').document(uid).setData(
                {
                  'name': name.text,
                  'lastname': lastname.text,
                  'email': email1.toLowerCase(),
                  'phone': phone.text,
                  'host': [],
                },
              );
            },
          ).whenComplete(() => addDevicedetails());
        } catch (e) {
          print(e.toString());
        }
      } else {
        print("data alreadyexists");
      }
    });
  }

  navigate() {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) {
          return WelcomeScreen(
            email: "${widget.existingemail}",
          );
        },
      ),
    );
  }

  addDevicedetails() async {
    DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();

    var emailid = "${widget.existingemail}";

    print("email" + emailid);
    var did;
    if (Theme.of(context).platform == TargetPlatform.iOS) {
      IosDeviceInfo iosDeviceInfo = await deviceInfo.iosInfo;
      did = iosDeviceInfo.identifierForVendor;
      // return iosDeviceInfo.identifierForVendor; // unique ID on iOS
    } else {
      AndroidDeviceInfo androidDeviceInfo = await deviceInfo.androidInfo;
      did = androidDeviceInfo.androidId;
      print("did" + did);
      print(androidDeviceInfo.androidId);
      //return androidDeviceInfo.androidId; // unique ID on Android
    }
    Firestore.instance.runTransaction(
      (Transaction transaction) async {
        Firestore.instance.collection('device').document(did).setData(
          {
            'email': emailid.toLowerCase(),
            'DeviceId': did,
          },
        );
      },
    ).whenComplete(() => navigate());
  }

  Future getdata() async {
    var firestore = Firestore.instance;
    QuerySnapshot qn = await firestore.collection("users").getDocuments();
    print(qn.documents.toList());
    return qn.documents;
  }

  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      //backgroundColor: Color(0xff151232),
      backgroundColor: Colors.white,

      body: Container(
        //  color: Colors.white,
        child: Center(
          child: SingleChildScrollView(
            child: Form(
              key: formKey,
              // ),
              child: Column(
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                //  crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  // const Text("You are not currently signed in."),
                  new SizedBox(
                    height: 1.0,
                  ),
                  Text(
                    "Create your profile",
                    style: TextStyle(
                        color: Colors.black,
                        fontWeight: FontWeight.bold,
                        fontSize: 30.0),
                  ),
                  Text(
                    "Secure your activity and validate your account",
                    //  style: TextStyle(color: Color(0xffD6C9F5), fontSize: 15.0),
                    style: TextStyle(color: Colors.black, fontSize: 12.0),
                  ),
                  SizedBox(
                    height: 32.0,
                  ),
                  Align(
                    alignment: Alignment(-.85, 0),
                    //     widthFactor: left
                    child: Container(
                      // color: Color(0xffD6C9F5),
                      child: Text(
                        "First Name",
                        style: TextStyle(color: Colors.black, fontSize: 15.0),
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 10.0,
                  ),

                  Align(
                    alignment: Alignment(-.100, 0),
                    child: Container(
                      alignment: Alignment.center,
                      // height: 60.0,
                      width: MediaQuery.of(context).size.width - 100,
                      //width: 300.0,
                      decoration: new BoxDecoration(
                          color: Colors.black12,
                          borderRadius: new BorderRadius.circular(12.0)),
                      child: new TextFormField(
                          controller: name,
                          // onSaved: (val) => user.name = val,
                          //validator: (val) => val == "" ? val : null,
                          decoration: InputDecoration(
                            hintText: "Joe ",
                            contentPadding: EdgeInsets.all(20),
                          )),
                    ),
                  ),
                  SizedBox(
                    height: 32.0,
                  ),
                  Align(
                    alignment: Alignment(-.85, 0),
                    //     widthFactor: left
                    child: Container(
                      // color: Color(0xffD6C9F5),
                      child: Text(
                        "Last Name",
                        style: TextStyle(color: Colors.black, fontSize: 15.0),
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 10.0,
                  ),
                  Align(
                    alignment: Alignment(-.100, 0),
                    child: Container(
                      alignment: Alignment.center,
                      // height: 60.0,
                      width: MediaQuery.of(context).size.width - 100,
                      //width: 300.0,
                      decoration: new BoxDecoration(
                          color: Colors.black12,
                          borderRadius: new BorderRadius.circular(12.0)),
                      child: new TextFormField(
                          controller: lastname,
                          // onSaved: (val) => user.name = val,
                          //validator: (val) => val == "" ? val : null,
                          decoration: InputDecoration(
                            hintText: " Bloggs",
                            contentPadding: EdgeInsets.all(20),
                          )),
                    ),
                  ),

                  SizedBox(
                    height: 32.0,
                  ),
                  Align(
                    alignment: Alignment(-.85, 0),
                    //     widthFactor: left
                    child: Container(
                      // color: Color(0xffD6C9F5),
                      child: Text(
                        "Phone No",
                        style: TextStyle(color: Colors.black, fontSize: 15.0),
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 10.0,
                  ),

                  Align(
                    alignment: Alignment(-.100, 0),
                    child: Container(
                      alignment: Alignment.center,
                      // width: 60.0,
                      width: MediaQuery.of(context).size.width - 100,
                      decoration: new BoxDecoration(
                          color: Colors.black12,
                          borderRadius: new BorderRadius.circular(12.0)),
                      child: new TextFormField(
                          // initialValue: "",
                          controller: phone,
                          //keyboardType: TextInputType.emailAddress,
                          keyboardType: TextInputType.phone,
                          maxLength: 12,
                          autofocus: false,
                          // initialValue: "",
                          //onSaved: (val) => user.phone = val,
                          //validator: (val) => val == "" ? val : null,
                          decoration: InputDecoration(
                            hintText: "e.g. +44 7911 123456",
                            fillColor: Color(0xffC8C3D4),
                            contentPadding: EdgeInsets.all(20),
                          )),
                    ),
                  ),

                  SizedBox(
                    height: 10.0,
                  ),
                  SizedBox(
                    width: 300.0,
                    child: Align(
                      //alignment: Alignment.topLeft,
                      //     widthFactor: left
                      child: Container(
                        child: Text(
                          "By creating an account, you agree to our Terms and privacy Policy ",
                          style: TextStyle(color: Colors.black, fontSize: 12.0),
                        ),
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 10.0,
                  ),
                  new SizedBox(
                    width: 300.0,
                    height: 60.0,
                    child: new RaisedButton(
                      child: const Text(
                        'Next',
                        style: TextStyle(
                            color: Colors.white, fontWeight: FontWeight.bold),
                      ),
                      //color: Color(0xff6839ed),
                      color: Colors.black26,
                      onPressed: () {
                        // addUser();
                        savedata();
                      },
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
