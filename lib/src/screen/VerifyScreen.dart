// import 'package:firebase_auth/firebase_auth.dart';
// import 'package:flutter/material.dart';
// import 'package:hostapp/locator.dart';
// import 'package:hostapp/screen/Dashboard.dart';
// import 'package:hostapp/screen/PasswordlessScreen.dart';
// import 'package:google_fonts/google_fonts.dart';

// class VerifyScreen extends StatefulWidget {
//   @override
//   _VerifyScreenState createState() => _VerifyScreenState();
// }

// class _VerifyScreenState extends State<VerifyScreen> {
//   @override
//   Widget build(BuildContext context) {
//     return StreamBuilder<FirebaseUser>(
//              stream: FirebaseAuth.instance.onAuthStateChanged,
//              builder: (context, snapshot) {
//                if (snapshot.connectionState == ConnectionState.active) {
//                  FirebaseUser user = snapshot.data;
//                  if (user == null) {
//                    return EmailInfo();
//                  }else{
//                  print('User ID ${user.uid}, User Email ${user.email}');
//                    MyInjection().customlogic.saveUserID(userId: user.toString());
//                    return Dashboard();
//                  }
//                } else {
//                  return Text('');  //Connection Inactive, show error dialog
//                }
//              },
//            );
//   }

// }

// class EmailInfo extends StatefulWidget {
//   @override
//   _EmailInfoState createState() => _EmailInfoState();
// }

// class _EmailInfoState extends State<EmailInfo> {

//   @override
//   Widget build(BuildContext context) {
//       return Scaffold(
//       appBar: AppBar(
//         title: Text('Email Verification'),
//       ),
//       body: Center(
//         child: Padding(
//           padding: const EdgeInsets.all(8.0),
//           child: Column(
//             mainAxisAlignment: MainAxisAlignment.center,
//             children: <Widget>[
//               Text('A link is sent to you mail, Click on the link to verify your Account',
//               style: GoogleFonts.abel(
//                 textStyle: TextStyle(
//                   fontWeight: FontWeight.bold,
//                   fontSize: 15.0, color: Colors.green
//                 )
//               ),),
//               SizedBox(height: 40,),
//               Text('You have entered invalid Email? \n Go back to reenter your mail', 
//               style: GoogleFonts.abel(
//                 textStyle: TextStyle(
//                   fontWeight: FontWeight.bold,
//                   fontSize: 16.0, color: Colors.red
//                 )
//               ),),
//            Padding(
//              padding: const EdgeInsets.only(top: 30.0),
//              child: MaterialButton(
//               color: Colors.green,
//               child: Text('Go Back'),
//               onPressed: (){
//                    Navigator.pushReplacement( context,
//           MaterialPageRoute(builder: (context) => PasswordLessScreen()));
//               },
//           ),
//            )
           
//             ],
//           )
//         ),
//       ),
//     );
   
//   }
// }