import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:device_info/device_info.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'welcome.dart';
import 'sign_in.dart';
import 'login_page.dart';

class CreateaccountScreen extends StatefulWidget {
  @override
  _CreateaccountScreenState createState() => new _CreateaccountScreenState();
}
//class _WelcomeScreenState extends State<WelcomeScreen> {}

class _CreateaccountScreenState extends State<CreateaccountScreen> {
  //final _repository = Repository();
  // AuthBloc _bloc;

  FirebaseUser user;
  var existingemail;
  bool signupcheck = false;
  TextEditingController email = new TextEditingController();
  //@override
  Future<void> checksignup() async {
    // var email = await _bloc.getUserEmailFromStorage();
    print("email");
    var did;
    DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
    if (Theme.of(context).platform == TargetPlatform.iOS) {
      IosDeviceInfo iosDeviceInfo = await deviceInfo.iosInfo;
      //return iosDeviceInfo.identifierForVendor; // unique ID on iOS
      did = iosDeviceInfo.identifierForVendor;
    } else {
      AndroidDeviceInfo androidDeviceInfo = await deviceInfo.androidInfo;
      did = androidDeviceInfo.androidId;
      print("did" + did);
      print(androidDeviceInfo.androidId);
      // return androidDeviceInfo.androidId; // unique ID on Android
    }
    Firestore.instance
        .collection("device")
        //.where("deviceid", isEqualTo: did).where("email", isEqualTo: email)
        .where("deviceid", isEqualTo: did)
        .where("email", isEqualTo: 'nishadhini11@gmail.com')
//.where("deviceid", isEqualTo: did)
        .getDocuments()
        .then((string) {
      print('Firestore response111: , ${string.documents.length}');
      string.documents.forEach(
        (doc) => print("data available"),
      );
      if (string.documents.length == 0) {
        print("DeviceId not avilable");
//allow signup
      } else {
        print("DeviceId  alreadyexists");
        //dont allow to signup
        setState(() {
          signupcheck = true;
        });
      }
    });
  }

  void _authCompletedgoogle() async {
    var email = user.email;
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
        Navigator.pushReplacement(
            context,
            MaterialPageRoute(
                builder: (context) => LoginPage(
                      existingemail: email.toString(),
                    )));
      } else {
        print("email  alreadyexists");
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
    //_bloc.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: Colors.white,
        padding: EdgeInsets.all(32),
        child: SingleChildScrollView(
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                Text(
                  "Let's get started",
                  textAlign: TextAlign.start,
                  style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 30.0),
                ),
                SizedBox(height: 32),
                Text(
                  "First create your account.",
                  style: TextStyle(color: Colors.black, fontSize: 15.0),
                ),
                SizedBox(height: 32),
                Align(
                  alignment: Alignment(-.85, 0),
                  //     widthFactor: left+
                  child: Container(
                    // color: Color(0xffD6C9F5),
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
                  //onChanged: _bloc.changeEmail,
                   controller: email,
                  keyboardType: TextInputType.emailAddress,
                  autofocus: false,

                  decoration: InputDecoration(
                    hintText: 'Email',
                   // errorText: error,
                    //prefixIcon: Icon(Icons.mail),
                    contentPadding: EdgeInsets.all(20),

                  ),
                ),
              ),
            ),
                SizedBox(
                  height: 32.0,
                ),
                SizedBox(
                  width: 300.0,
                  height: 60.0,
                  child: RaisedButton(
                    onPressed: () async {
                          Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (context) {
                              return LoginPage(
                                email: email.text,
                              );
                            },
                          ),
                        );
                    },
                    child: const Text(
                      'Create your account',
                      style: TextStyle(
                          color: Colors.black, fontWeight: FontWeight.bold),
                    ),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(12))),
                    //  color: Color(0xff6839ed),
                    color: Colors.white12,
                  ),
                ),
                Center(
                  child: Text(
                    'OR',
                    style: TextStyle(
                        color: Colors.black,
                        fontWeight: FontWeight.bold,
                        fontSize: 20.0),
                  ),
                ),
                SizedBox(
                  width: 300.0,
                  height: 60.0,
                  child: RaisedButton(
                    onPressed: () {
                      signInWithGoogle().whenComplete(() {
                        /*Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (context) {
                    return FirstScreen();
                  },
                ),
              );*/
                        _authCompletedgoogle();
                      });
                    },
                    child: const Text(
                      'With Google',
                      style: TextStyle(
                          color: Colors.black, fontWeight: FontWeight.bold),
                    ),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(12))),
                    color: Colors.white12,
                  ),
                ),
                SizedBox(
                  height: 32.0,
                ),
                SizedBox(
                  width: 300.0,
                  height: 60.0,
                  child: RaisedButton(
                    onPressed: () {
                      signInWithGoogle().whenComplete(() {
                        _authCompletedgoogle();
                      });
                    },
                    child: const Text(
                      'with apple',
                      style: TextStyle(
                          color: Colors.black, fontWeight: FontWeight.bold),
                    ),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(12))),
                    color: Colors.white12,
                  ),
                ),
                SizedBox(
                  height: 32.0,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
