import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:device_info/device_info.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/auth_screen.dart';
import 'package:hostapp/src/screen/sign_in.dart';

class Signupcomplete extends StatefulWidget {
  final String email;

  // List list;
  Signupcomplete({this.email});
  @override
  _SignupcompleteState createState() => new _SignupcompleteState();
}

class _SignupcompleteState extends State<Signupcomplete> {
  var email;

  void initState() {
    super.initState();
   }

  void dispose() {
    super.dispose();
  }
 
  void deleteuser() {
    print("inside deleteuser function");
    var email = widget.email;
    print("email inside delete user"+email);
    Firestore.instance
        .collection("users")
        .where("email", isEqualTo: email)
        .getDocuments()
        .then((string) {
      print('Firestore response: , ${string.documents.length}');
      string.documents.forEach(
        (doc) => Firestore.instance
            .collection("users")
            .document("${doc.documentID.toString()}")
            .delete()
            .whenComplete(() {                                                   
            
          print('Deleted successfully');
        }),
      );
    });
  }
  void signOut() async {
    //.... code for signOut
    
          final FirebaseAuth auth = FirebaseAuth.instance;
        final FirebaseUser user1 = await auth.currentUser(); 
         await FirebaseAuth.instance.signOut().whenComplete(() => navigate());
     await googleSignIn.signOut().whenComplete(() => navigate());
  }
  void update() async {
var did;

    DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
    if (Theme.of(context).platform == TargetPlatform.iOS) {
      IosDeviceInfo iosDeviceInfo = await deviceInfo.iosInfo;
      did = iosDeviceInfo.identifierForVendor;
    } else {
      AndroidDeviceInfo androidDeviceInfo = await deviceInfo.androidInfo;
      did = androidDeviceInfo.androidId;
      print("DeviceId for android " + did);
           }
    //after signout remove the DeviceId value to null
    print("widget.email"+"${widget.email}");
    var email= "${widget.email}".toLowerCase();
      print("email"+email);
    Firestore.instance.collection('device').document(did).setData(
      {
       'email':email.toString(),
        'DeviceId': "",
      },
    ).whenComplete(() => signOut());
  }

  navigate() {
    print("inside navigate");
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) {
          //Navigate to Let's get started screen
          return AuthScreen();
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
       
      backgroundColor: Colors.white,
      resizeToAvoidBottomPadding: false,
      body: new Container(
    
          child: new Center(
            
              child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Center(
            child: Text(
              "Sign Up Complete!",
              style:
                  TextStyle(color: Colors.black, fontWeight: FontWeight.bold,fontSize: 30.0),
            ),
          ),
         SizedBox(
                   
                  height: 30.0,),
             SizedBox(
                  width: 150.0,
                  height: 60.0,
                  child: Container(
                    color: Colors.black,
                    child: RaisedButton(
                      onPressed: () {
                      update();
                      },
                      child: const Text(
                        'Log out',
                        style: TextStyle(
                            color: Colors.white, fontWeight: FontWeight.bold),
                      ),
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.all(Radius.circular(2))),
                      color: Colors.white12,
                    ),
                  ),
                ),  SizedBox(
                   
                  height: 30.0,),
             SizedBox(
                  width: 150.0,
                  height: 60.0,
                  child: Container(
                    color: Colors.black,
                    child: RaisedButton(
                      onPressed: () {
                      deleteuser();
                      },
                      child: const Text(
                        'Delete user',
                        style: TextStyle(
                            color: Colors.white, fontWeight: FontWeight.bold),
                      ),
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.all(Radius.circular(2))),
                      color: Colors.white12,
                    ),
                  ),
                )

         ],
      ))),
    );
  }
}
