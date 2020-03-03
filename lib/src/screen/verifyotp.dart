import 'dart:async';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:country_code_picker/country_code_picker.dart';
import 'package:device_info/device_info.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/screen/signupcomplete.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';

class Verifyotp extends StatefulWidget {
  final String email;
  final String phoneNumber, lastname, name, authuid,phoneNumber1;
  Verifyotp(
      {this.email, this.phoneNumber, this.lastname, this.name, this.authuid,this.phoneNumber1});
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
  TextEditingController phone = new TextEditingController();
  TextEditingController otp = new TextEditingController();
  var phoneCode, mobile;
  var newphonenumbersplit;
  bool phoneerror = false;
  bool _load = false;

  Timer _timer;
  var buttoncolor;
  int _start = 120;
  bool resendcode = false;
  bool isButtonEnabled = true;
  var phonenumbersplit;
  bool enablebutton = false;
  GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();
  String insertData = r"""
        mutation users(        
        $id: String!       
         $phone: String!
         $email : String!
         $name: String!
         $lastname: String!){
           createUser( 
             id:$id,
             email: $email,
          phone: $phone , first_name:$name,last_name:$lastname
        ){ 
          id
          email
          phone  
          name{
            first_name
          last_name
          }       
                }
        }
          """;
  void startTimer() {
    const oneSec = const Duration(seconds: 1);
    _timer = new Timer.periodic(
      oneSec,
      (Timer timer) => setState(
        () {
          if (_start < 1) {
            timer.cancel();
            //disable the timer
            setState(() {
              enablebutton = true;
            });
          } else {
            _start = _start - 1;
          }
        },
      ),
    );
  }

  isEmpty() {
    if (otp.text == "") {
      setState(() {
        print(" isButtonEnabled = true;");
        isButtonEnabled = true;
      });
    } else {
      print(" isButtonEnabled = false;");

      setState(() {
        isButtonEnabled = false;
      });
    }
  }

  Future<void> verifyPhone() async {
    print("inside verify phone");
    final PhoneCodeSent smsOTPSent = (String verId, [int forceCodeResend]) {
      this.verificationId = verId;
    };
    try {
      print("phone number to send otp ");
      await _auth.verifyPhoneNumber(
          phoneNumber: widget.phoneNumber,
          codeAutoRetrievalTimeout: (String verId) {
            //Starts the phone number verification process for the given phone number.
            //Either sends an SMS with a 6 digit code to the phone number specified, or sign's the user in and [verificationCompleted] is called.
            this.verificationId = verId;
          },
          codeSent:
              smsOTPSent, // WHEN CODE SENT THEN WE OPEN DIALOG TO ENTER OTP.
          timeout: const Duration(seconds: 120),
          //timeout: const Duration(minutes: 10),
          verificationCompleted: (AuthCredential phoneAuthCredential) async {
            print("phoneAuthCredential" + phoneAuthCredential.toString());
          },
          verificationFailed: (AuthException exceptio) {
            print('exceptio.message+ ${exceptio.message}');
          });
    } catch (e) {
      handleError(e);
    }
  }

  Future<void> resendverifyPhone() async {
    print("inside resendverifyPhone phone");
    final PhoneCodeSent smsOTPSent = (String verId, [int forceCodeResend]) {
      this.verificationId = verId;
    };
    try {
      print("phone number to send otp ");

      print("$phoneCode" + "${phone.text}");
      await _auth.verifyPhoneNumber(
          //phoneNumber: "+""${phoneCode}"+"${phone.text}",
          phoneNumber: "$phoneCode" + "${phone.text}",
          codeAutoRetrievalTimeout: (String verId) {
            //Starts the phone number verification process for the given phone number.
            //Either sends an SMS with a 6 digit code to the phone number specified, or sign's the user in and [verificationCompleted] is called.
            this.verificationId = verId;
          },
          codeSent:
              smsOTPSent, // WHEN CODE SENT THEN WE OPEN DIALOG TO ENTER OTP.
          timeout: const Duration(seconds: 120),
          //timeout: const Duration(minutes: 10),
          verificationCompleted: (AuthCredential phoneAuthCredential) {
            print("phoneAuthCredential" + phoneAuthCredential.toString());
          },
          verificationFailed: (AuthException exceptio) {
            print('exceptio.message+ ${exceptio.message}');
          });
    } catch (e) {
      handleError(e);
    }
  }

  handleError(error) {
    print("error inside handle error function" + error.toString());
    switch (error.code) {
      case 'ERROR_INVALID_VERIFICATION_CODE':
        FocusScope.of(context).requestFocus(new FocusNode());
        setState(() {
          errorMessage = 'Invalid Code';
        });

        break;
      default:
        setState(() {
          errorMessage = error.message;
        });

        break;
    }
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

  void _onCountryChange(countryCode) {
    //Todo : manipulate the selected country code here
    phoneCode = countryCode.toString();
    print("New Country selected: " + countryCode.toString());
  }

  Future<bool> resendOTPDialog(BuildContext context) {
    return showDialog(
        context: context,
        barrierDismissible: false,
        builder: (BuildContext context) {
          return Container(
            child: new AlertDialog(
              // title: Text('Enter SMS Code'),

              content: Container(
                decoration: new BoxDecoration(
                    //    color: Colors.white,
                    //   border: Border.all(color: Color(0xffC6DEE9)),
                    borderRadius: new BorderRadius.circular(15.0)),
                height: 153.0,
                width: 350.0,
                child: Align(
                  //  alignment: Alignment(-.100, 0),
                  child: Center(
                    child: Container(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: <Widget>[
                          Container(
                            height: 50.0,
                            width: 320.0,
                            decoration: new BoxDecoration(
                                color: Colors.white,
                                border: Border.all(color: Color(0xffC6DEE9)),
                                borderRadius: new BorderRadius.circular(10.0)),
                            child: Row(
                              children: <Widget>[
                                Container(
                                  height: 50.0,
                                  width: 68.0,
                                  decoration: new BoxDecoration(
                                      color: Colors.white,
                                      border:
                                          Border.all(color: Color(0xffC6DEE9)),
                                      borderRadius:
                                          new BorderRadius.circular(10.0)),
                                  child: new CountryCodePicker(
                                    //onChanged: print,
                                    onChanged: _onCountryChange,
                                    initialSelection: 'US',
                                    favorite: ['+1', 'US'],
                                    showCountryOnly: false,
                                    showOnlyCountryWhenClosed: false,
                                    alignLeft: false,
                                  ),
                                ),
                                Container(
                                  alignment: Alignment.center,
                                  width: 150.0,
                                  height: 50.0,
                                  child: new TextFormField(
                                      controller: phone,
                                      keyboardType: TextInputType.phone,
                                      //maxLength: 12,
                                      autofocus: false,
                                      validator: validateMobile,
                                      onSaved: (String val) {
                                        mobile = val;
                                      },
                                      decoration: InputDecoration(
                                        hintText: "(123) 456-7890",
                                        fillColor: Color(0xffC8C3D4),
                                        hintStyle: TextStyle(
                                            wordSpacing: 0.0,
                                            color: Color(
                                              0xff63A5C0,
                                            )),
                                        contentPadding: EdgeInsets.fromLTRB(
                                            20.0, 10.0, 20.0, 10.0),
                                        border: InputBorder.none,
                                      )),
                                ),
                              ],
                            ),
                          ),
                          Center(
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: <Widget>[
                                SizedBox(
                                  height: 20.0,
                                ),
                                FlatButton(
                                  child: Center(
                                      child: Text(
                                    "Resend Code",
                                    textAlign: TextAlign.center,
                                    style: TextStyle(
                                        color: Color(0xff63A5C0),
                                        fontWeight: FontWeight.bold,
                                        decoration: TextDecoration.underline,
                                        fontSize: 16.0),
                                  )),
                                  onPressed: () {
                                    resendverifyPhone();
                                    setState(() {
                                      resendcode = true;
                                    });
                                    Navigator.of(context).pop();
                                  },
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        });
  }

  signIn() async {
    try {
      final AuthCredential credential = PhoneAuthProvider.getCredential(
        verificationId: verificationId,
        smsCode: smsOTP,
      );
      final FirebaseUser currentUser = await _auth.currentUser();
      if (resendcode == true) {
        //resendaddUser();
        print("resendcode is true");
      } else {
        //addUser();
        print("resendcode is false");
      }
    } catch (e) {
      handleError(e);
    }
  }

  void initState() {
    super.initState();

    verifyPhone(); //send otp

    phonenumbersplit = widget.phoneNumber;
    newphonenumbersplit =
        phonenumbersplit.substring(phonenumbersplit.length - 4);
    print("new phone number split" + newphonenumbersplit);
    startTimer();
    print("phone number" + widget.phoneNumber);
    print("Email" + widget.email);
  }

  void dispose() {
    super.dispose();
    _timer.cancel();
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
    print(isButtonEnabled);

    if (isButtonEnabled == false) {
      buttoncolor = Color(0xff45A1C9);
    } else {
      buttoncolor = Color(0xffC7E3EF);
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
    return GraphQLProvider(
        client: client,
        child: Scaffold(
          backgroundColor: Colors.white,
          resizeToAvoidBottomPadding: false,
          body: new Container(
              child: Mutation(
                  options: MutationOptions(
                    documentNode: gql(insertData),
                    onCompleted: (data) {
                      print(data.toString());
                    },
                    onError: (error) {
                      print('Error Occur: ${error.toString()}');
                    },
                  ),
                  builder: (runMutation, result) {
                    return Container(
                        child: SingleChildScrollView(
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
                          (errorMessage != ''
                              ? Text(
                                  errorMessage,
                                  style: TextStyle(color: Colors.red),
                                )
                              : Container()),
                          Align(
                            child: Column(
                              children: <Widget>[
                                Center(
                                  child: Text(
                                      "We sent a one time validation code to your",
                                      style: TextStyle(
                                        color: Color(0xff8F8F8F),
                                        fontWeight: FontWeight.w600,
                                        fontSize: 14.0,
                                      )),
                                ),
                                Center(
                                  child: Text(
                                      "mobile number xxx-xxx-$newphonenumbersplit. Enter the 6 digit",
                                      style: TextStyle(
                                        color: Color(0xff8F8F8F),
                                        fontWeight: FontWeight.w600,
                                        fontSize: 14.0,
                                      )),
                                ),
                                Center(
                                  child: Text(
                                      "code below before it expires in 2 minutes",
                                      style: TextStyle(
                                        color: Color(0xff8F8F8F),
                                        fontWeight: FontWeight.w600,
                                        fontSize: 14.0,
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
                              height: 50.0,
                              width: 320.0,
                              decoration: new BoxDecoration(
                                  color: Colors.white,
                                  border: Border.all(color: Color(0xffC6DEE9)),
                                  borderRadius:
                                      new BorderRadius.circular(10.0)),
                              child: new TextFormField(
                                  textAlign: TextAlign.center,
                                  keyboardType: TextInputType.phone,
                                  onChanged: (value) {
                                    isEmpty();
                                    this.smsOTP = value;
                                  },
                                  controller: otp,
                                  decoration: InputDecoration(
                                    hintText: "XXX-XXX",
                                    hintStyle: TextStyle(
                                        fontSize: 15.0,
                                        color: Color(0xff63A5C0)),
                                    contentPadding: EdgeInsets.fromLTRB(
                                        20.0, 10.0, 30.0, 10.0),
                                    border: InputBorder.none,
                                  )),
                            ),
                          ),
                          SizedBox(
                            height: 50.0,
                          ),
                          SizedBox(
                            width: 320.0,
                            height: 47.0,
                            child: Container(
                              child: AbsorbPointer(
                                absorbing: isButtonEnabled,
                                child: new RaisedButton(
                                  color: buttoncolor,
                                  onPressed: () async {
                                    setState(() {
                                      _load = true;
                                    });
                                    try {
                                      final AuthCredential credential =
                                          PhoneAuthProvider.getCredential(
                                        verificationId: verificationId,
                                        smsCode: smsOTP,
                                      );

                                      final FirebaseUser currentUser =
                                          await _auth.currentUser();
                                      if (resendcode == true) {
                                        runMutation(<String, dynamic>{
                                          "id":"${widget.authuid}",
                                          "phone":"$phoneCode" +"-"+ "${phone.text}",
                                          "email": "${widget.email}",
                                          "name": "${widget.name}",
                                          "lastname": "${widget.lastname}"
                                        });
                                        navigate();
                                        print("resendcode is true");
                                      } else {
                                        //addUser();
                                        runMutation(<String, dynamic>{
                                          "id":"${widget.authuid}",
                                              "phone": "${widget.phoneNumber1}",
                                          "email": "${widget.email}",
                                          "name": "${widget.name}",
                                          "lastname": "${widget.lastname}"
                                        });
                                        navigate();
                                        print("resendcode is false");
                                      }
                                    } catch (e) {
                                      handleError(e);
                                    }
                                  },
                                  child: const Text(
                                    'Continue',
                                    style: TextStyle(
                                        color: Colors.white,
                                        fontWeight: FontWeight.bold),
                                  ),
                                  shape: new RoundedRectangleBorder(
                                    borderRadius:
                                        new BorderRadius.circular(13.0),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          SizedBox(
                            height: 50.0,
                          ),
                          AbsorbPointer(
                            absorbing: enablebutton,
                            //absorbing: false,
                            child: FlatButton(
                                onPressed: () {
                                  verifyPhone();
                                  print(
                                      "enablebutton" + enablebutton.toString());
                                },
                                child: Center(
                                  child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    crossAxisAlignment:
                                        CrossAxisAlignment.center,
                                    children: <Widget>[
                                      Text(
                                        "Resend Code",
                                        style: TextStyle(
                                            color: Color(0xffB1D2DF),
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16.0),
                                      ),
                                      Text(
                                        " in ($_start)",
                                        style: TextStyle(
                                            color: Color(0xff63A5C0),
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16.0),
                                      ),
                                    ],
                                  ),
                                )),
                          ),
                          SizedBox(
                            width: 30.0,
                          ),
                          SizedBox(
                            width: 300.0,
                            child: Container(
                              child: FlatButton(
                                onPressed: () {
                                  resendOTPDialog(context).then((value) {
                                    print('resenotp');
                                  });
                                },
                                child: const Text(
                                  'Wrong number ? Click here to re-enter number',
                                  style: TextStyle(
                                      color: Colors.red,
                                      fontWeight: FontWeight.bold,
                                      fontSize: 11.0),
                                ),
                                color: Colors.white,
                              ),
                            ),
                          ),
                          new Align(
                            child: loadingIndicator,
                            alignment: FractionalOffset.center,
                          ),
                        ],
                      ),
                    ));
                  })),
        ));
  }
}

String validateMobile(String value) {
  String patttern = r'(^[0-9]*$)';
  RegExp regExp = new RegExp(patttern);
  if (value.length == 0) {
    return "Mobile is Required";
  } else if (value.length >= 15) {
    return "Mobile number can't be more than 15 digits";
  } else if (!regExp.hasMatch(value)) {
    return "Mobile Number must be digits";
  }
  return null;
}
