import 'package:bottom_navy_bar/bottom_navy_bar.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:hostapp/src/screen/ListOfProperty.dart';
import 'package:hostapp/src/screen/FetchProperties.dart';
import 'package:hostapp/src/screen/Profile.dart';
import 'package:hostapp/src/screen/secureStorageTester.dart';

class Dashboard extends StatefulWidget {
  @override
  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard>{
  FirebaseAuth user = FirebaseAuth.instance;
  int _selectedIndex = 0;


  @override
  Widget build(BuildContext context) {
    return Scaffold(
    resizeToAvoidBottomPadding: true,
      body:  switchBody(),
       bottomNavigationBar: BottomNavyBar(
   selectedIndex: _selectedIndex,
   showElevation: true, // use this to remove appBar's elevation
   onItemSelected: (index) => setState(() {
              _selectedIndex = index;
    }),
   items: [
     BottomNavyBarItem(
       icon: Icon(FontAwesome.building),
       title: Text('Properties'),
       activeColor: Colors.red,
     ),
     BottomNavyBarItem(
         icon: Icon(Icons.local_airport),
         title: Text('Reservation'),
         activeColor: Colors.purpleAccent
     ),
     BottomNavyBarItem(
         icon: Icon(Icons.message),
         title: Text('Messages'),
         activeColor: Colors.pink
     ),
     BottomNavyBarItem(
         icon: Icon(Icons.supervised_user_circle),
         title: Text('Profile'),
         activeColor: Colors.blue
     ),
   ],
),
    );
  }

//Switching body, from one Screen to another
  switchBody(){

    if(_selectedIndex == 0){
       return ListOfProperty();

    }else if(_selectedIndex == 1){
     return FetchProperties(); 
   

    }else if(_selectedIndex == 2){ 
      return ItemsWidget();

    }else if(_selectedIndex == 3){ 
      return Text('');

    }
  }
}