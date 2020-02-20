import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:device_info/device_info.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/signupcomplete.dart';

class Verifyotp extends StatefulWidget {
  final String email;
  final String phoneNumber, lastname, name, authuid;

  // List list;
  Verifyotp(
      {this.email, this.phoneNumber, this.lastname, this.name, this.authuid});
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
            print("phoneAuthCredential" + phoneAuthCredential.toString());
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
  handleError(error) {
    print("error inside handle error function" + error.toString());
    switch (error.code) {
      case 'ERROR_INVALID_VERIFICATION_CODE':
        FocusScope.of(context).requestFocus(new FocusNode());
        setState(() {
          errorMessage = 'Invalid Code';
        });
        //Navigator.of(context).pop();
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
    final uid = widget.authuid;
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
              Firestore.instance
                  .collection('users')
                  .document(widget.authuid)
                  .setData(
                {
                  'name': widget.name,
                  'lastname': widget.lastname,
                  'email': emailid,
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
            'email': emailid,
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
      //final AuthResult user = await _auth.signInWithCredential(credential);
      final FirebaseUser currentUser = await _auth.currentUser();
      //assert(user.uid == currentUser.uid);
//addUser();
      //Navigator.of(context).pop();
      //Navigator.of(context).pushReplacementNamed('/homepage');
      // .whenComplete(() => addDevicedetails());
      addUser();
    } catch (e) {
      handleError(e);
    }
  }

  void initState() {
    super.initState();
    //_getId();
    verifyPhone();
    print("phone number" + widget.phoneNumber);
    print("Email" + widget.email);
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
          child: new Container(
              child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          SizedBox(
            height: 50.0,
          ),
          Center(
            child: Text(
              "Check your mobile",
              style: TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                  fontSize: 30.0),
            ),
          ),
          SizedBox(
            height: 50.0,
          ),
          Align(
                      child: Column(
              children: <Widget>[
                Center(
                  child: Text(
                      "We sent a one time validation code to your",style: TextStyle(
                          color: Colors.black38,
                          fontWeight: FontWeight.bold,
                          fontSize: 11.0,
                           )),
                ),
                Center(
                  child:Text("mobile number ${widget.phoneNumber}. Enter the 6 digit",style: TextStyle(
                          color: Colors.black38,
                          fontSize: 11.0,
                          fontWeight: FontWeight.bold,
                           )),

                ),
                 Center(
                  child:Text("code below",style: TextStyle(
                          color: Colors.black38,fontSize: 11.0,
                          fontWeight: FontWeight.bold,
                           )),

                ),
              ],
            ),
          ),
          SizedBox(
            height: 50.0,
          ),
          Align(
            alignment: Alignment(-.100, 0),
            child: Container(
              alignment: Alignment.center,
              // height: 60.0,
              //width: MediaQuery.of(context).size.width - 10,
              width: 300.0,
              decoration: new BoxDecoration(
                  color: Colors.white,
                  border: Border.all(color: Colors.cyanAccent),
                  borderRadius: new BorderRadius.circular(12.0)),
              child: new TextFormField(
                  keyboardType: TextInputType.phone,
                  onChanged: (value) {
                    this.smsOTP = value;
                  },
                  decoration: InputDecoration(
                    
                    hintText: "XXX-XXX",
                              hintStyle:  TextStyle(fontSize: 15.0, color: Colors.black38),
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
            height: 50.0,
          ),
          SizedBox(
            width: 300.0,
            height: 60.0,
            child: Container(
              //color: Colors.cyan,
              child: RaisedButton(
                color: Colors.cyan,
                onPressed: () {
                  signIn();
                },
                child: const Text(
                  'Continue',
                  style: TextStyle(
                      color: Colors.white, fontWeight: FontWeight.bold),
                ),
                        shape: new RoundedRectangleBorder(
                          
      borderRadius: new BorderRadius.circular(30.0),
    ),
               // color: Colors.white12,
              ),
            ),
          ),
            SizedBox(
            height: 50.0,
          ),
          Center(child: Text("Resend code", style: TextStyle(
                      color: Colors.cyan[200], fontWeight: FontWeight.bold,fontSize: 14.0),)),
          SizedBox(
             width: 30.0,),
          SizedBox(
             width: 300.0,
            child: Container(
              //color: Colors.white,
              child: RaisedButton(
                onPressed: () {
                  
                },
                child: const Text(
                  'Wrong number ? Click here to re-enter number',
                  style: TextStyle(
                      color: Colors.red, fontWeight: FontWeight.bold,fontSize: 11.0),
                ),
                color: Colors.white,
              ),
            ),
          ),
        ],
      ))),
    );
  }
}
