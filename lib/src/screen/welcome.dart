// import 'package:flutter/material.dart';
// import 'package:hostapp/src/screen/setting.dart';
// import 'package:hostapp/src/service/GraphQLConfiguration.dart';


// class WelcomeScreen extends StatefulWidget {
//   final String email;

//   // List list;
//   WelcomeScreen({this.email});
//   @override
//   _WelcomeScreenState createState() => new _WelcomeScreenState();
// }

// class _WelcomeScreenState extends State<WelcomeScreen> {
//   GraphQLConfiguration graph = GraphQLConfiguration();
//   var email;

//   int _selectedIndex;
//   void initState() {

//     super.initState();
//   }

//   void dispose() {
//     super.dispose();
//   }

//   void _onItemTapped(int index) {
//     setState(() {
//       _selectedIndex = index;
//     });
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       backgroundColor: Colors.white,
//       resizeToAvoidBottomPadding: false,
//       body: switchBody(),
//       //_children[_currentIndex],
//       /*new Container(
    
//           child: new Center(
            
//               child: Column(
//         mainAxisAlignment: MainAxisAlignment.center,
//         crossAxisAlignment: CrossAxisAlignment.center,
//         children: <Widget>[
//            //switchBody(),
//           Center(
//             child: Text(
//               "Sign In Complete!",
//               style:
//                   TextStyle(color: Colors.black, fontWeight: FontWeight.bold,fontSize: 30.0),
//             ),
//           ),
//          SizedBox(
                   
//                   height: 30.0,),
//              SizedBox(
//                   width: 150.0,
//                   height: 60.0,
//                   child: Container(
//                     color: Colors.black,
//                     child: RaisedButton(
//                       onPressed: () {
//                       update();
//                       },
//                       child: const Text(
//                         'Log out',
//                         style: TextStyle(
//                             color: Colors.white, fontWeight: FontWeight.bold),
//                       ),
//                       shape: RoundedRectangleBorder(
//                           borderRadius: BorderRadius.all(Radius.circular(2))),
//                       color: Colors.white12,
//                     ),
//                   ),
//                 ),
//                 SizedBox(
                   
//                   height: 30.0,),
          
                
           
//          ],
//      )
//      )
//      ),*/

//       bottomNavigationBar: BottomNavigationBar(
//         onTap: (index) => _onItemTapped(index),
//         items: [
//           BottomNavigationBarItem(
//               //icon: Icon(Icons.calendar_today,color: Color(0xff808080),),
//                           icon:  SizedBox(width:20.0,height:22.0,child: new Tab(icon: Icon(Icons.calendar_today,color: Color(0xff80000000)))),

//               title: Text('RESERVATION',style: TextStyle(color:Color(0xff80000000),fontSize: 13.0)),
            
//                  ),
//           BottomNavigationBarItem(
//               //icon: Icon(Icons.mms,color: Color(0xff808080),),
//               icon:  SizedBox(width:20.0,height:22.0,child: new Tab(icon: new Image.asset("assets/images/Vector.png"),)),
//               title: Text('PROPERTIES',style: TextStyle(color:Color(0xff80000000),fontSize: 13.0)),
//               //backgroundColor: Color(0xff808080)Vector.png
//                ),

//           BottomNavigationBarItem(
//             icon: SizedBox(width:20.0, height:22.0,child: new Tab(icon: Icon(Icons.settings,color: Color(0xff45A1C9)))),
//              // icon: Icon(Icons.settings,color: Color(0xff45A1C9),),
//               title: Text('SETTINGS',style: TextStyle(
//                 color:Color(0xff45A1C9),fontSize: 13.0),),
//               //backgroundColor: Color(0xff45A1C9)
//                )
//         ],
//       ),
//     );
//   }

//   switchBody(){
//     if (_selectedIndex == 0) {

//       print("navigate to Reservation");
      
//       return Text('');
//     } else if (_selectedIndex == 1) {
//       print("navigate to Property");

//       return Text('');
//     } else if (_selectedIndex == 2) {
//       print("navigate to settings");

//       return SettingScreen();
//     }
//   }
// }
