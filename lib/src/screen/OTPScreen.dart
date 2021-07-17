// import 'dart:async';
// import 'package:country_code_picker/country_code_picker.dart';
// import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

// import 'package:hostapp/src/style/AppColor.dart';
// import 'package:graphql_flutter/graphql_flutter.dart';
// import 'package:hostapp/src/screen/welcome.dart';
// import 'package:hostapp/src/service/GraphQLConfiguration.dart';
// import 'package:flutter_secure_storage/flutter_secure_storage.dart';
// import 'package:shared_preferences/shared_preferences.dart';
// import 'package:hostapp/src/screen/Dashboard.dart';
// import 'package:hostapp/src/locator.dart';
// import 'package:hostapp/src/util/customFunctions.dart';
// import 'package:hostapp/src/widget/ResendOTPDialog.dart';
// import 'package:hostapp/src/service/graphQlQuery.dart';
// import 'package:hostapp/src/model/CreateUserModel.dart';

class OTPScreen extends StatefulWidget {
  final String email;
  final String phoneNumber, lastname, name, authuid;
  OTPScreen(
      {this.email,
      this.phoneNumber,
      this.lastname,
      this.name,
      this.authuid,});
  @override
  _OTPScreenState createState() => _OTPScreenState();
}

class _OTPScreenState extends State<OTPScreen> {
//   var email;
//   String phoneNo;
//   String verificationId;
//   String errorMessage = '';
//   FirebaseAuth _auth = FirebaseAuth.instance;
//   TextEditingController phone = new TextEditingController();
//   TextEditingController otp = new TextEditingController();
//    final CustomFuntion _customFuntion = locator<CustomFuntion>();
//     final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
//   var phoneCode, mobile;
//   var newphonenumbersplit;
//   bool phoneerror = false;
//   bool _load = false;
//   Timer _timer;
//   var buttoncolor;
//   int _start = 120;
//   bool resendcode = false;
//   bool isButtonEnabled = true, resentotp = true;
//   var phonenumbersplit;
//   bool enablebutton = false;
//   final storage = new FlutterSecureStorage();
 

//  @override
//   void initState() {
//     // TODO: implement initState
//     super.initState();
//     sentOTP();
//     listener(otp);
//   }

//   listener(TextEditingController controller){
//    controller.addListener(() {
//       if(otp.text.isNotEmpty){
//          buttonStatus(status: false);
       
//       }else{
//           buttonStatus(status: true);
//           //print('Not Entered');
//       }
      
//     });
// }

// //Enable => fa;se // Diable Button=> true
// buttonStatus({bool status}){
//   setState(() {
//         isButtonEnabled = status;
//       });
// }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
//         backgroundColor: Colors.white,
//         resizeToAvoidBottomPadding: false,
//         body: new Container(
//             child: Container(
//                 child: SingleChildScrollView(
//           child: Column(
//             mainAxisAlignment: MainAxisAlignment.start,
//             crossAxisAlignment: CrossAxisAlignment.center,
//             children: <Widget>[
//               SizedBox(
//                 height: 50.0,
//               ),
//               Center(
//                 child: Text(
//                   "verify your number",
//                   style: TextStyle(
//                       color: Colors.black,
//                       fontWeight: FontWeight.bold,
//                       fontSize: 30.0),
//                 ),
//               ),
//               SizedBox(
//                 height: 50.0,
//               ),
              
//               Align(
//                 child: Column(
//                   children: <Widget>[
//                     Center(
//                       child: Text("We sent a one time validation code to your",
//                           style: TextStyle(
//                             color: AppColor.headerInputColor,
//                             fontWeight: FontWeight.w600,
//                             fontSize: 14.0,
//                           )),
//                     ),
//                     Center(
//                       child: Text(
//                           "mobile number xxx-xxx-$newphonenumbersplit. Enter the 6 digit",
//                           style: TextStyle(
//                             color: Color(0xff8F8F8F),
//                             fontWeight: FontWeight.w600,
//                             fontSize: 14.0,
//                           )),
//                     ),
//                     Center(
//                       child: Text("code below before it expires in 2 minutes",
//                           style: TextStyle(
//                             color: Color(0xff8F8F8F),
//                             fontWeight: FontWeight.w600,
//                             fontSize: 14.0,
//                           )),
//                     ),
//                   ],
//                 ),
//               ),
//               (errorMessage != ''
//                   ? Center(
//                     child: Padding(
//                       padding: const EdgeInsets.only(left: 8.0, right: 8.0, top: 8.0),
//                       child: Text(
//                           errorMessage,
//                           textAlign: TextAlign.center,
//                           style: TextStyle(color: Colors.red),
//                         ),
//                     ),
//                   )
//                   : Container()),
//               SizedBox(
//                 height: 50.0,
//               ),
//               Align(
//                 alignment: Alignment(-.100, 0),
//                 child: Container(
//                   alignment: Alignment.center,
//                   height: 50.0,
//                   width: 320.0,
//                   decoration: new BoxDecoration(
//                       color: Colors.white,
//                       border: Border.all(color: Color(0xffC6DEE9)),
//                       borderRadius: new BorderRadius.circular(10.0)),
//                   child: new TextFormField(
//                       textAlign: TextAlign.center,
//                       keyboardType: TextInputType.phone,
                      
//                       onChanged: (value) {
                      
//                       },
//                       controller: otp,
//                       decoration: InputDecoration(
//                         hintText: "XXX - XXX",
//                         hintStyle:
//                             TextStyle(fontSize: 15.0, color: Color(0xff63A5C0)),
//                         contentPadding:
//                             EdgeInsets.fromLTRB(20.0, 10.0, 30.0, 10.0),
//                         border: InputBorder.none,
//                       )),
//                 ),
//               ),
//               SizedBox(
//                 height: 50.0,
//               ),
//               SizedBox(
//                 width: 320.0,
//                 height: 47.0,
//                 child: (_load ? _customFuntion.loadingIndicator() : Container(
//                   child: AbsorbPointer(
//                     absorbing: isButtonEnabled,
//                     child: new RaisedButton(
//                       color: (isButtonEnabled ? buttoncolor : Color(0xff45A1C9)),
//                       onPressed: () async {
//                         // startLoading();
//                        verifyOTP();
//                       },
//                       child: const Text(
//                         'Continue',
//                         style: TextStyle(
//                             color: Colors.white, fontWeight: FontWeight.bold),
//                       ),
//                       shape: new RoundedRectangleBorder(
//                         borderRadius: new BorderRadius.circular(13.0),
//                       ),
//                     ),
//                   ),
//                 ))
//               ),
//               SizedBox(
//                 height: 50.0,
//               ),
//               AbsorbPointer(
//                 absorbing: enablebutton,
//                 //absorbing: false,
//                 child: FlatButton(
//                     onPressed: () {
                     
//                     },
//                     child: Center(
//                       child: Row(
//                         mainAxisAlignment: MainAxisAlignment.center,
//                         crossAxisAlignment: CrossAxisAlignment.center,
//                         children: <Widget>[
//                           Text(
//                             "Resend Code",
//                             style: TextStyle(
//                                 color: Color(0xffB1D2DF),
//                                 fontWeight: FontWeight.bold,
//                                 fontSize: 16.0),
//                           ),
//                           Text(
//                             " in ($_start secs)",
//                             style: TextStyle(
//                                 color: Color(0xff63A5C0),
//                                 fontWeight: FontWeight.bold,
//                                 fontSize: 16.0),
//                           ),
//                         ],
//                       ),
//                     )),
//               ),
//               SizedBox(
//                 width: 30.0,
//               ),
//               SizedBox(
//                 width: 300.0,
//                 child: Container(
//                   child: AbsorbPointer(
//                      absorbing: resentotp,
//                      child: FlatButton(
//                       onPressed: () {
//                        resendOTPDialog();
//                       },
//                       child: const Text(
//                         'Wrong number ? Click here to re-enter number',
//                         style: TextStyle(
//                             color: Colors.red,
//                             fontWeight: FontWeight.bold,
//                             fontSize: 11.0),
//                       ),
//                       color: Colors.white,
//                     ),
//                   ),
//                 ),
//               ),
//             ],
//           ),
//         ))));
    
    
//   }
//   @override
//   void dispose() {
//     super.dispose();
//   }

//   stopTimer(){
//     //subscription.cancel();
//     _timer.cancel();

//     setState(() {
//       resentotp = false; //Enable resent otp
//     });
//   }

//   //Start timer.
// void startTimer() {
//     const oneSec = const Duration(seconds: 1);
//     _timer = new Timer.periodic(
//       oneSec,
//       (timer) => setState(
//         () {
//           if (_start < 1) {
//             timer.cancel();
//             //disable the timer
//             setState(() {
//               enablebutton = true;
//                resentotp = false; //Enable resent otp
//             });
//           } else {
//             _start = _start - 1;
//             print(_start);
//           }
//         },
//       ),
//     );
    
//   }

// resendOTPDialog() {
//    return showDialog(
//             context: context,
//             builder: (BuildContext context) {
//               return ResendOTPDialog(
//                 authuid: widget.authuid,
//                 email: widget.email,
//                 lastname: widget.lastname,
//                 name: widget.name,
//               );});
//   }

//   //****************** FUNCTIONS ****************/

// void _onCountryChange(countryCode) {
//     //Todo : manipulate the selected country code here
//     phoneCode = countryCode.toString();
//     print("New Country selected: " + countryCode.toString());
//   }

//   Future<void> sentOTP() async {
//     startTimer();
//     final PhoneCodeSent smsOTPSent = (String verId, [int forceCodeResend]) {
//       this.verificationId = verId;
//     };
    

//     try {
//       //print("phone number to send otp ");
//       await _auth.verifyPhoneNumber(
//           phoneNumber: widget.phoneNumber,

//           codeAutoRetrievalTimeout: (String verId) {
//             this.verificationId = verId;
//             print('codeAutoRetrievalTimeout Proceed');

//           },
//           codeSent:  smsOTPSent, // WHEN CODE SENT THEN WE OPEN DIALOG TO ENTER OTP.
//           timeout: const Duration(seconds: 5),
//           verificationCompleted: (AuthCredential phoneAuthCredential) async {
//              stopTimer();
//             print('verificationCompleted NOW....AUTO RETRIEVED......................');
//             setErrorMessage(error: 'Automatic retrieving otp....');
//              createUserP();
//           },

//           verificationFailed: (AuthException exeption) {
//             print('exceptio.message+ ${exeption.message}');
//             setErrorMessage(error: exeption.message.toString());
//              if (exeption.message.contains('not authorized')) {
//                 setErrorMessage(error: 'Something has gone wrong, please try later');
     
//               }else if (exeption.message.contains('Network')) {

//                   setErrorMessage(error: 'Please check your internet connection and try again');
//               } else {
                
//                 setErrorMessage(error: 'Something went wrong, please try again later');
//               }
//           });

//     } catch (e) {
//       setErrorMessage(error: e.toString());
//       stopTimer();
//     }
    
//   }

//    verifyOTP()async{
//      try {
//              final AuthCredential credential = 
//               PhoneAuthProvider.getCredential(
//                             verificationId: verificationId, smsCode: 'smsOTP',
//                           );

//                         } catch (e) {
//                           setErrorMessage(error: e.toString());
//                            print('Last Error ${e.toString()}');
//                         }
//    }
  
  
//   //************** LOADER */
//   startLoading(){
//     setState(() {
//       errorMessage = ''; //Clear error message
//       _load = true;
//     });
//   }

//   stopLoading(){
//     setState(() {
//       _load = false;
//     });
//   }

//   setErrorMessage({String error}){
//     setState(() {
//       errorMessage = error;
//     });
//   }

// createUserP()async{
//       startLoading();

//        print('****SEND TO SERVER.............');
//       print(" CreateProfile Email: ${widget.email}");
//        print(" CreateProfile Name: ${widget.name}");
//        print(" CreateProfile ID: ${widget.authuid}");
//        print('*************');


//     await _graphQlConfiq.getNeccessartyToken(); //MuST CALL THIS BEFRE API 
//      GraphQLClient _client = _graphQlConfiq.clientToQuery();
//     QueryResult result = await _client.mutate(
//       MutationOptions(
//           document: gql(insertData),
//         variables: {
//           "id": "${widget.authuid}",
//           "phone": "$phoneCode" + "-" + "${phone.text}",
//           "email": "${widget.email}",
//           "name": "${widget.name}",
//           "lastname": "${widget.lastname}",
//         },
//       )
//     ).catchError((e){
//       stopLoading();
//       print('Error Occur, ${e.toString()}');
//       setErrorMessage(error: e.toString());

//         }).timeout(Duration(seconds: 5,), onTimeout: (){
//           stopLoading();
//           setErrorMessage(error: 'Server Timeout, Please retry');
//         },);

//      if (result.data == null) {
//         stopLoading();
//              print('Result is Null and Error Occur');
//               setErrorMessage(error: 'Server Error Occur, Please try again');

//          }else if (result.data['createUser'] == null) {
//            print('*************Return Data is Null => No Existing Phone Number**************');
//            stopLoading();

//          }else{
//            String v = 'createUser';
//              CreateUserModel createUserModel = new CreateUserModel(
//                email: result.data[v]['email'],
//                id: result.data[v]['id'],
//                name: Name(fName: result.data[v]['name']['first_name'],
//                 lName: result.data[v]['name']['last_name'],),
//                phoneN: result.data[v]['phone'],
//              );

//              //Save details to Secure Storage
//              _customFuntion.saveUserData(
//                email: createUserModel.email,
//                fname: createUserModel.name.fName,
//                lname: createUserModel.name.lName,
//                phoneN: createUserModel.phoneN,
//              );
//              stopLoading();  
//              Navigator.of(context).pushReplacement(
//               MaterialPageRoute(
//                 builder: (context) {
//                   return Dashboard(showIndex: 0);
//                 },
//               ),
    );
              
//          }
 }
}