
// import 'package:cloud_firestore/cloud_firestore.dart';
// import 'package:flutter/material.dart';
// import 'package:hostapp/locator.dart';
// import 'package:hostapp/service/FirestoreService.dart';
// import 'package:hostapp/widget/ExpansionInfo.dart';
// import 'package:getflutter/components/button/gf_button.dart';

// class ProfileScreen extends StatefulWidget {
//   @override
//   _ProfileScreenState createState() => _ProfileScreenState();
// }

// class _ProfileScreenState extends State<ProfileScreen> {
// FirestoreService firestoreService = new FirestoreService();

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(appBar: AppBar(actions: <Widget>[],),
//     body: StreamBuilder<DocumentSnapshot>(
//             stream: firestoreService.addHostData(),
//             builder: (BuildContext context, AsyncSnapshot<DocumentSnapshot> snapshot) {
//               if (snapshot.hasError)
//                 return Center(child: CircularProgressIndicator());
//               return snapshot.hasData
//                   ?   FetchDataWidget(snapshot: snapshot.data,):
//              Center(child: CircularProgressIndicator());
//             }
//       ),
//     );
//   }
// }

// class FetchDataWidget extends StatefulWidget {
//  final DocumentSnapshot snapshot;
//   const FetchDataWidget({this.snapshot});

//   @override
//   _FetchDataWidgetState createState() => _FetchDataWidgetState();
// }

// class _FetchDataWidgetState extends State<FetchDataWidget> {

//   @override
//   Widget build(BuildContext context) {
//     return Padding(
//       padding: const EdgeInsets.all(8.0),
//       child: Container(
//           child: Column(children: <Widget>[
//             ExpansionInfo(
//                 title:'My Profile',
//                 children: <Widget>[
//                  Text('Country: ${widget.snapshot.data['country']}'),
//                  SizedBox(height: 10,),
//                   Text('Email: ${widget.snapshot.data['email']}'),
//                   SizedBox(height: 10,),
//                    Text('phoneNumber: ${widget.snapshot.data['phone_number']}'),
//                    SizedBox(height: 10,),

//                     Text('Name:', style: TextStyle(fontSize: 19.0),),
//                     Text('FirstName: ${widget.snapshot.data['Name']['FirstName']}'),
//                      Text('LastName: ${widget.snapshot.data['Name']['LastName']}'),
//                     SizedBox(height: 10,),

//                     Text('Payment details:', style: TextStyle(fontSize: 19.0),),
//                      Text('Token: ${widget.snapshot.data['payment details']['token']}'), 
//                       Text('Digit: ${widget.snapshot.data['payment details']['last_four']}'),
//                           Text('Type: ${widget.snapshot.data['payment details']['last_four']}'),
//                      SizedBox(height: 10,),

//                       Text('Address:', style: TextStyle(fontSize: 19.0),),
//                       Text('country: ${widget.snapshot.data['user_address']['country']}'),
//                       Text('city: ${widget.snapshot.data['user_address']['city']}'),
//                       Text('postalcode: ${widget.snapshot.data['user_address']['postalcode']}'),
//                       Text('state: ${widget.snapshot.data['user_address']['state']}'),
//                       Text('street_name: ${widget.snapshot.data['user_address']['street_name']}'), 
//                           SizedBox(height: 10,),
//                       GFButton(
//                   onPressed: (){
//                       encrypt(widget.snapshot.data);
//                   },
//                   text:"Encryp"
// ),                
//                 ],
//                 expand: true),
          
          
//           ],),
//       ),
//     );
//   }

// encrypt(Map<String, dynamic> data){
//   String text = data['payment details']['token'];
//   print('Befrore Encryp: $text');

//   MyInjection().customlogic.util();
//   MyInjection().customlogic.encryptUserData(plainText: text);

// //  String decrypt =  MyInjection().customlogic.deecryptUserData();

// //  print(decrypt);


// }

// }