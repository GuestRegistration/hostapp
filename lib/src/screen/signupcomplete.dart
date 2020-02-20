import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:device_info/device_info.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/onboardScreen.dart';
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
    //_getId();
provider();

  }

  void dispose() {
    super.dispose();
  }
Future<void> provider() async {
    final FirebaseAuth auth = FirebaseAuth.instance;
        final FirebaseUser user1 = await auth.currentUser();
        print("providerData");
      //  print(user1.providerData.length);
         print(user1.providerId);
}
  void deleteuser() {
    print("inside deleteuser function");
    //print("uid" + widget.uid);
    //var propertyid1 = int.parse(propertyid);
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
                                     /*   Navigator.pushReplacement(context, MaterialPageRoute(
                        builder: (contex)=> PropertyListdbScreen(
                          email: "${widget.email}",
                        )
                      ));*/
                          
            
          print('Deleted successfully');
        }),
      );
    });
  }
  void signOut() async {
    //.... code for signOut
    
    //print();
    //await FirebaseAuth.instance.signOut().whenComplete(() => update());
      final FirebaseAuth auth = FirebaseAuth.instance;
        final FirebaseUser user1 = await auth.currentUser();
     
        // await FirebaseAuth.instance.signOut().whenComplete(() => update());
     //await googleSignIn.signOut().whenComplete(() => update());
      await FirebaseAuth.instance.signOut().whenComplete(() => navigate());
     await googleSignIn.signOut().whenComplete(() => navigate());
  }
  void update() async {
var did;

    DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
    if (Theme.of(context).platform == TargetPlatform.iOS) {
      IosDeviceInfo iosDeviceInfo = await deviceInfo.iosInfo;
      //return iosDeviceInfo.identifierForVendor; // unique ID on iOS
      //print("DeviceId for iOS " + did);
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
       // 'email': "${widget.email}".toLowerCase(),
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
          //Navigate to onboard screen
          return OnboardScreen();
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      /*appBar: new AppBar(
        elevation: 0.1,
        backgroundColor: Colors.white,
        actions: <Widget>[
          Stack(
            children: <Widget>[
              Padding(
                padding: EdgeInsets.all(10.0),
                child: InkResponse(
                  child: Icon(
                    Icons.power_settings_new,
                    color: Colors.black,
                    size: 36.0,
                  ),
                  onTap: () {
                    signOut();
                  },
                ),
              ),
            ],
          )
        ],
      ),*/
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
