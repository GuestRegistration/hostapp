import 'package:country_code_picker/country_code_picker.dart'; //for country code
import 'package:device_info/device_info.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
//import 'package:firebase_database/firebase_database.dart';
//import 'Address_screen.dart';
//import 'package:guestapptest/Model/umodel.dart';
import 'dart:async' show Future;
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:hostapp/src/screen/verifyotp.dart';
import 'signupcomplete.dart';

class LoginPage extends StatefulWidget {
  final String email, existingemail;
  LoginPage({this.email, this.existingemail});
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> with WidgetsBindingObserver {
  String mobile;
  DatabaseReference userRef;
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
  String email1;
  final scaffoldkey = GlobalKey<ScaffoldState>();
  bool _validate = false;
  TextEditingController name = new TextEditingController();
  TextEditingController lastname = new TextEditingController();
  TextEditingController email = new TextEditingController();
  TextEditingController phone = new TextEditingController();
  TextEditingController propertiesname = new TextEditingController();
  TextEditingController role = new TextEditingController();
  var phoneCode;
  //bool _btnEnabled = false;
  var hostProperty, hostrole;
  List host1;
  bool isButtonEnabled = true;
  bool errorflag = false;
  var buttoncolor;
  String phoneNo;
  String smsOTP;
  String verificationId;
  String errorMessage = '';
  FirebaseAuth _auth = FirebaseAuth.instance;
  void initState() {
    super.initState();

    // getdata();
    // _getId();
    //hosts = List();
    email1 = "${widget.existingemail}";

    WidgetsBinding.instance.addObserver(this);
  }

  isEmpty() {
    /*if ((name.text == "") &&
        (lastname.text == "") &&
        (phone.text == "")) {
          print(" isButtonEnabled = true;");
        setState(() {
             isButtonEnabled = true;
        });
           
    } */
    if (name.text != "" && lastname.text != "" && phone.text != "") {
      setState(() {
        print(" isButtonEnabled = false;");
        isButtonEnabled = false;
      });
    } else {
      print(" isButtonEnabled = false;");

      setState(() {
        isButtonEnabled = true;
      });
    }
  }

  getData() async {
    return Firestore.instance.collection('users').snapshots();
  }

  void addUser() async {
    print("inside add uer");
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
                  'phone': "${phoneCode}" + "-" + "${phone.text}",
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
          return Signupcomplete(
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

  Future<void> navigateotp() async {
      //  print("New Country selected: " + countryCode.toString());
     
    print("inside navigate otp");
        print(print);

    final FirebaseAuth auth = FirebaseAuth.instance;
    final FirebaseUser user1 = await auth.currentUser();
    final email1 = user1.email;
    final uid = user1.uid;
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) {
          return Verifyotp(
            phoneNumber: "${phoneCode}" + "${phone.text}",
            name: name.text,
            lastname: lastname.text,
            email: email1.toLowerCase(),
            authuid: uid,
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
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
     print(isButtonEnabled);

    if (isButtonEnabled == false) {
      buttoncolor = Colors.cyan[200];
    } else {
      buttoncolor = Colors.cyan[50];
    }
    return Scaffold(
      //backgroundColor: Color(0xff151232),

      backgroundColor: Colors.white,
      key: scaffoldkey,
      body: Container(
        //  color: Colors.white,
        child: Center(
          child: SingleChildScrollView(
            child: new Form(
              autovalidate: _validate,
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
                  Visibility(
                    child: Text(
                      "one or more fields are incomplete",
                      style: TextStyle(
                          color: Colors.black,
                          fontWeight: FontWeight.bold,
                          fontSize: 30.0),
                    ),
                    visible: errorflag,
                  ),
                  Text(
                    "Create your profile",
                    style: TextStyle(
                        color: Colors.black,
                        fontWeight: FontWeight.bold,
                        fontSize: 30.0),
                  ),
                  SizedBox(height: 10.0,),
                  Text(
                    "Secure your activity and validate your account",
                    //  style: TextStyle(color: Color(0xffD6C9F5), fontSize: 15.0),
                    style: TextStyle(color: Colors.black38, fontSize: 12.0,fontWeight: FontWeight.bold),
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
                        "First Name*",
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
                      width: MediaQuery.of(context).size.width - 50,
                      //width: 300.0,
                      
                      decoration: new BoxDecoration(
                          color: Colors.white,
                          borderRadius: new BorderRadius.circular(12.0,),
                              border: Border.all(color: Colors.cyanAccent)
                          ),
                      child: new TextFormField(
                          controller: name,
                          onChanged: (val) {
                            isEmpty();
                          },
                          validator: (value) {
                            if (value.isEmpty) {
                              return "Please Enter First Name";
                            }
                            return null;
                          },
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
                        "Last Name*",
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
                      width: MediaQuery.of(context).size.width - 50,
                      //width: 300.0,
                      decoration: new BoxDecoration(
                          color: Colors.white,
                               border: Border.all(color: Colors.cyanAccent),
                          borderRadius: new BorderRadius.circular(12.0)
                          ),
                      child: new TextFormField(
                          controller: lastname,
                          onChanged: (val) {
                            isEmpty();
                          },
                          validator: (value) {
                            if (value.isEmpty) {
                              return "Please Enter Last Name";
                            } else {}
                            return null;
                          },
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
                        "Mobile Phone*",
                        style: TextStyle(color: Colors.black, fontSize: 15.0),
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 10.0,
                  ),

                  Align(
                    alignment: Alignment(-.100, 0),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                           new CountryCodePicker(
         //onChanged: print,
         onChanged: _onCountryChange,
         // Initial selection and favorite can be one of code ('IT') OR dial_code('+39')
         initialSelection: 'US',
         favorite: ['+1','US'],
         // optional. Shows only country name and flag
         showCountryOnly: false,
         // optional. Shows only country name and flag when popup is closed.
         showOnlyCountryWhenClosed: false,
         // optional. aligns the flag and the Text left
         alignLeft: false,
         //itemBuilder: _buildDropdownItem,
       ),
                       /* CountryPickerDropdown(
                          //initialValue: 'us',
                          initialValue: 'in',
                          itemBuilder: _buildDropdownItem,
                          onValuePicked: (country) {
                            print("name ${country.name}");

                            phoneCode = "${country.phoneCode}";
                          },
                        ),*/
                        Container(
                          alignment: Alignment.center,
                          width: 200.0,
                          //width: MediaQuery.of(context).size.width - 50,
                          decoration: new BoxDecoration(
                              color: Colors.white,
                                   border: Border.all(color: Colors.cyanAccent),
                              borderRadius: new BorderRadius.circular(12.0)),
                          child: new TextFormField(
                              // initialValue: "",
                              onChanged: (val) {
                                isEmpty();
                              },
                              controller: phone,
                              //keyboardType: TextInputType.emailAddress,
                              keyboardType: TextInputType.phone,
                              //maxLength: 12,
                              autofocus: false,
                              validator: validateMobile,
                              onSaved: (String val) {
                                mobile = val;
                              },
                              decoration: InputDecoration(
                                hintText: "123 456 7890",
                                fillColor: Color(0xffC8C3D4),
                                contentPadding: EdgeInsets.all(20),
                              )),
                        ),
                      ],
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
                      child: Column(
                        children: <Widget>[
                          Container(
                            child: Row(
                              children: <Widget>[
                                Text(
                                  "By creating an account, you agree to our",
                                  style: TextStyle(
                                      color: Colors.black38, fontSize: 11.0,fontWeight: FontWeight.bold),
                                ),
                                Text(
                                  "Terms of ",
                                  style: TextStyle(
                                      color: Colors.black38, fontSize: 11.0, decoration: TextDecoration.underline,fontWeight: FontWeight.bold),
                                ),
                                //Text("Terms of service",style: TextStyle(fontWeight: FontWeight.bold,color: Colors.black, fontSize: 12.0),),
                                //Text("and",style: TextStyle(color: Colors.black, fontSize: 12.0),),
                                //  Text("privacy Policy ",style: TextStyle(fontWeight: FontWeight.bold,color: Colors.black, fontSize: 12.0),)
                              ],
                            ),
                          ),
                          Center(
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: <Widget>[
                                //  crossAxisAlignment: CrossAxisAlignment.center,

                                //    Text("Terms of  ",style: TextStyle(fontWeight: FontWeight.bold,color: Colors.black, fontSize: 12.0),),
                                //    Text("and ",style: TextStyle(color: Colors.black, fontSize: 12.0),),
                                
                                    Text(
                                  "Service",
                                  style: TextStyle(
                                      color: Colors.black38,
                                      fontSize: 11.0,
                                      decoration: TextDecoration.underline,fontWeight: FontWeight.bold),
                                ),
                                   Text(
                                  " and",
                                  style: TextStyle(
                                      color: Colors.black38,
                                      fontSize: 11.0,fontWeight: FontWeight.bold
                                    ),
                                ),
                                   Text(
                                  " Privacy Policy ",
                                  style: TextStyle(
                                      color: Colors.black38,
                                      fontSize: 11.0,fontWeight: FontWeight.bold,
                                      decoration: TextDecoration.underline),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 10.0,
                  ),

                  new SizedBox(
                    width: 300.0,
                    height: 60.0,
                    child: AbsorbPointer(
                      absorbing: isButtonEnabled,
                      //fase
                      //  print("isButtonEnabled"),
                      // absorbing: true,
                      child: new RaisedButton(
                          child: const Text(
                            'Continue',
                            style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.bold),
                          ),
                          
                          //color: Color(0xff6839ed),
                          //color: Colors.black12,
                          color: buttoncolor,
                           shape: new RoundedRectangleBorder(
      borderRadius: new BorderRadius.circular(20.0),
    ),
                          onPressed: () {
                            // _btnEnabled == true ? print("hai") : null;

                            if (formKey.currentState.validate()) {
                              if (name.text == "" &&
                                  phone.text == "" &&
                                  lastname.text == "") {
                                setState(() {
                                  errorflag = true;
                                });
                              } else {
                                setState(() {
                                  errorflag = false;
                                });
                              }
                              setState(() {
                                //  addUser();
                                //  verifyPhone();
                                navigateotp();
                              });
                              formKey.currentState.save();
                              scaffoldkey.currentState.showSnackBar(SnackBar(
                                content: Text("Start adding user details"),
                              ));
                            } else {
                              // validation error
                              scaffoldkey.currentState.showSnackBar(SnackBar(
                                content: Text("Failed to Add user details"),
                              ));
                            }
                          }
                          //_btnEnabled:true
                          ),
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

String validateMobile(String value) {
  String patttern = r'(^[0-9]*$)';
  RegExp regExp = new RegExp(patttern);
  if (value.length == 0) {
    return "Mobile is Required";
  } else if (value.length >=15) {
    return "Mobile number can't be more than 15 digits";
  } else if (!regExp.hasMatch(value)) {
    return "Mobile Number must be digits";
  }
  return null;
}
