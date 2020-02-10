// import 'dart:async';

// import 'package:firebase_dynamic_links/firebase_dynamic_links.dart';
// import 'package:flutter/material.dart';
// import 'package:hostapp/locator.dart';
// import 'package:hostapp/screen/Dashboard.dart';
// import 'package:hostapp/screen/VerifyScreen.dart';
// import 'package:hostapp/util/constants.dart';


// class PasswordLessScreen extends StatefulWidget {
//   @override
//   _PasswordLessScreenState createState() => _PasswordLessScreenState();
// }

// class _PasswordLessScreenState extends State<PasswordLessScreen> with WidgetsBindingObserver{
//     TextEditingController emailController = TextEditingController();
//     final _scaffoldKey = GlobalKey<ScaffoldState>();
// String _link;
//    static String tag = "PasswordLess page";
//    bool processing = false;
//    Timer _timerLink;

//   @override
//   void initState() {
//     super.initState();
//     print('Am firstly Here');
//   // _retrieveDynamicLink();
//   // WidgetsBinding.instance.addObserver(this);
//   }
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       key: _scaffoldKey,
//       appBar: AppBar(
//         title: Text('Guest Registeration'),
//       ),
//     body: Column(
//       children: <Widget>[
//         Padding(
//           padding: const EdgeInsets.only(top: 40.0, left: 10.0, right: 10.0),
//           child: TextField(
//             keyboardType: TextInputType.emailAddress,
//             controller: emailController,
//             decoration: new InputDecoration(
//                 border: new OutlineInputBorder(
//                     borderSide: new BorderSide(color: Colors.teal)),
//                 hintText: 'Enter your email',
//                 helperText: 'Email must be valid',
//                 labelText: 'Email',
              
//                 prefixIcon: const Icon(
//                   Icons.person,
//                   color: Colors.green,
//                 ),
//                 suffixStyle: const TextStyle(color: Colors.green)),
//           ),
//         ),
//         Padding(
//           padding: const EdgeInsets.only(top: 16.0),
//           child: (processing ? CircularProgressIndicator() : MaterialButton(
//             color: Colors.green,
//             child: Text('Proceed'),
//             onPressed: (){
//               startLoading();
//                    MyInjection().authService.loginWithEmailLink(mail: emailController.text).then((v){
//                       if(v){
//                         stopLoading();
//                         dialog(context: context, 
//                         message: 'Link sent to your mail, Please check your mail',
//                          title: 'Sucess');
//                       }else{
//                         stopLoading();
//                         MyInjection().customlogic.dialog(context: context, 
//                         message: 'Oops! Unable to send Link,Please try again ', title: 'Error');
//                       }
//                    });
//             },
//           ))
//         )
//       ],
//     )
//     );
//   }

//   @override
//   void didChangeAppLifecycleState(AppLifecycleState state) {
//     if (state == AppLifecycleState.resumed) {
//          _timerLink = new Timer(const Duration(milliseconds: 850), () { //Delay the timer coz of ios
//       print('Have now resumed');
//       _retrieveDynamicLink();
//        });
//   }
//   }
//     @override
//     void didChangeDependencies() {
//       super.didChangeDependencies();
//       this._retrieveDynamicLink();
//     }

//   startLoading(){
//   setState(() {
//     processing = true;
//   });
// }

// stopLoading(){
//   setState(() {
//     processing = false;
//   });
// }

//   Future<void> _retrieveDynamicLink() async {
//     final PendingDynamicLinkData data =
//         await FirebaseDynamicLinks.instance.getInitialLink();

//     final Uri deepLink = data?.link;

//     if (deepLink.toString() != null) {
//       _link = deepLink.toString();
//       print('About to Proceed My Dynamic Link \n ${deepLink.toString()}');
//       MyInjection().authService.signInWithEmailAndLink(context: context, 
//       link: _link, email: emailController.text);

//     }
//      if(deepLink == null){
//        print('Am Null');
//      }

//     FirebaseDynamicLinks.instance.onLink(
//       onSuccess: (PendingDynamicLinkData dynamicLink) async {
//         final Uri deepLink = dynamicLink?.link;
//         _link = deepLink.toString();

//         if (deepLink != null) {
          
//           MyInjection().authService.signInWithEmailAndLink(context: context, 
//       link: _link, email: emailController.text);
// //
// //       Navigator.pushReplacement( context,
// //    MaterialPageRoute(builder: (context) => Dashboard()));
         
//         }
//       },
//       onError: (OnLinkErrorException e) async {
//         print('onLinkError');
//         print(e.message);
//       }
//     );
//     //return deepLink.toString();
//   }

//    dialog({BuildContext context, String message, title}) {
//    return showDialog(
//       context: context,
//       builder: (BuildContext context) {
//         return AlertDialog(
//           title: new Text(title),
//           content: new Text(message.toString()),
//           actions: <Widget>[
//             new FlatButton(
//               child: new Text("Close"),
//               onPressed: () {
//                 Navigator.of(context).pop();

//               },
//             ),
// new FlatButton(
//               child: new Text("Proceed"),
//               onPressed: () {
            
//                  Navigator.pushReplacement( context,
//              MaterialPageRoute(builder: (context) => VerifyScreen()));
//               },
//             ),
//           ],
//         );
//       },
//     );
//   }
// }
