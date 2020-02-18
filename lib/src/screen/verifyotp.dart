import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:device_info/device_info.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/signupcomplete.dart';

class Verifyotp extends StatefulWidget {
  final String email;
  final String phoneNumber,lastname,name;

  // List list;
  Verifyotp({this.email,this.phoneNumber,this.lastname,this.name});
  @override
  _VerifyotpState createState() => new _VerifyotpState();
}

class _VerifyotpState extends State<Verifyotp> {
  var email;
    String phoneNo;
  String smsOTP;
  String verificationId;
  String errorMessage = '';
  FirebaseAuth _auth = FirebaseAuth.instance;
   Future<void> verifyPhone() async {
     print("inside verify phone");
    final PhoneCodeSent smsOTPSent = (String verId, [int forceCodeResend]) {
      this.verificationId = verId;
     /* smsOTPDialog(context).then((value) {
        print('sign in');
      });*/
      //navigateotp();
      
    };
    try {
             print("phone number to send otp ");
          //   print("+"+"${phoneCode}"+"${phone.text}");
      await _auth.verifyPhoneNumber(
            //phoneNumber: "+""${phoneCode}"+"${phone.text}", 
             phoneNumber: widget.phoneNumber, 
               codeAutoRetrievalTimeout: (String verId) {
            //Starts the phone number verification process for the given phone number.
            //Either sends an SMS with a 6 digit code to the phone number specified, or sign's the user in and [verificationCompleted] is called.
            this.verificationId = verId;
          },
          codeSent:
              smsOTPSent, // WHEN CODE SENT THEN WE OPEN DIALOG TO ENTER OTP.
          timeout: const Duration(seconds: 20),
          verificationCompleted: (AuthCredential phoneAuthCredential) {
            print("phoneAuthCredential"+phoneAuthCredential.toString());
            addUser();
          },
          verificationFailed: (AuthException exceptio) {
            print('exceptio.message+ ${exceptio.message}');
          });
    } catch (e) {
      handleError(e);
    }
  }
      //handleError(PlatformException error) {
              handleError( error) {
    print("error inside handle error function"+error.toString());
    switch (error.code) {
      case 'ERROR_INVALID_VERIFICATION_CODE':
        FocusScope.of(context).requestFocus(new FocusNode());
        setState(() {
          errorMessage = 'Invalid Code';
        });
        Navigator.of(context).pop();
        /*smsOTPDialog(context).then((value) {
          print('sign in');
        });*/
        break;
      default:
        setState(() {
          errorMessage = error.message;
        });

        break;
    }
  }
   void addUser() async {
    print("inside add user");
    final FirebaseAuth auth = FirebaseAuth.instance;
    final FirebaseUser user1 = await auth.currentUser();
    final email1 = user1.email;
    final uid = user1.uid;
    print("uidddddddddddddd" + uid);
    var emailid = "${widget.email}";

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
                  'name': widget.name,
                  'lastname': widget.lastname,
                  'email': email1.toLowerCase(),
                   'phone': widget.phoneNumber,                                
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
   addDevicedetails() async {
    DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();

    var emailid = "${widget.email}";

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
    navigate() {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) {
          return Signupcomplete(
            email: "${widget.email}",
          );
        },
      ),
    );
  }
    Future<bool> smsOTPDialog(BuildContext context) {
    return showDialog(
        context: context,
        barrierDismissible: false,
        builder: (BuildContext context) {
          return new AlertDialog(
            title: Text('Enter SMS Code'),
            content: Container(
              height: 85,
              child: Column(children: [
                TextField(
                  onChanged: (value) {
                    this.smsOTP = value;
                  },
                ),
                (errorMessage != ''
                    ? Text(
                        errorMessage,
                        style: TextStyle(color: Colors.red),
                      )
                    : Container())
              ]),
            ),
            contentPadding: EdgeInsets.all(10),
            actions: <Widget>[
              FlatButton(
                child: Text('Done'),
                onPressed: () {
                  _auth.currentUser().then((user) {
                    if (user != null) {
                     // Navigator.of(context).pop();
                   //   Navigator.of(context).pushReplacementNamed('/homepage');
                   print("inside if");
                    } else {
                      signIn();
                    }
                  });
                },
              )
            ],
          );
        });
  }
   signIn() async {
    try {
      final AuthCredential credential = PhoneAuthProvider.getCredential(
        verificationId: verificationId,
        smsCode: smsOTP,
      );
            // final FirebaseUser user = (await _auth.signInWithCredential(credential)) as FirebaseUser;
          final AuthResult user = await _auth.signInWithCredential(credential);
      final FirebaseUser currentUser = await _auth.currentUser();
      //assert(user.uid == currentUser.uid);
//addUser();
     //Navigator.of(context).pop();
      //Navigator.of(context).pushReplacementNamed('/homepage');
     // .whenComplete(() => addDevicedetails());
     addUser();
     
    }
    catch (e) {
      handleError(e);
    }
  }
  void initState() {
    super.initState();
    //_getId();
    verifyPhone();
 print("phone number"+widget.phoneNumber);
  print("Email"+widget.email);
  }

  void dispose() {
    super.dispose();
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
              "Almost there!!!",
              style:
                  TextStyle(color: Colors.black, fontWeight: FontWeight.bold,fontSize: 30.0),
            ),
          ),
          Text("We sent a code to your mobile number. Enter the 6 digit code below"),
         SizedBox(
                   
                  height: 30.0,),

                 
                  Align(
                    alignment: Alignment(-.100, 0),
                    child: Container(
                      alignment: Alignment.center,
                      // height: 60.0,
                      //width: MediaQuery.of(context).size.width - 10,
                      width: 250.0,
                      decoration: new BoxDecoration(
                          color: Colors.black12,
                          borderRadius: new BorderRadius.circular(12.0)),
                      child: new TextFormField(
    keyboardType: TextInputType.phone,
                        onChanged: (value) {
                    this.smsOTP = value;
                  },
                        
                          decoration: InputDecoration(
                           hintText: "XXX-XXX",
                            contentPadding: EdgeInsets.all(20),
                          )),
                    ),
                  ),
                       (errorMessage != ''
                    ? Text(
                        errorMessage,
                        style: TextStyle(color: Colors.red),
                      )
                    : Container()),
                      SizedBox(
                  height: 20.0,),
             SizedBox(
                  width: 150.0,
                  height: 60.0,
                  child: Container(
                    color: Colors.cyan,
                    child: RaisedButton(
                      onPressed: () {
                          signIn();
                      
                      },
                      child: const Text(
                        'Continue',
                        style: TextStyle(
                            color: Colors.white, fontWeight: FontWeight.bold),
                      ),
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.all(Radius.circular(2))),
                      color: Colors.white12,
                    ),
                  ),
                ),
              
                   SizedBox(
                  width: 0.0,
                  height: 60.0,
                  child: Container(
                    //color: Colors.black,
                    child: RaisedButton(
                      onPressed: () {
                      
                      },
                      child: const Text(
                        'Wrong number ? Click here to re-enter number',
                        style: TextStyle(
                            color: Colors.cyanAccent, fontWeight: FontWeight.bold),
                      ),
                     
                      color: Colors.white12,
                    ),
                  ),
                ), 
         ],
      ))),
    );
  }
}
