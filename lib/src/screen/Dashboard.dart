import 'package:bottom_navy_bar/bottom_navy_bar.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hostapp/src/screen/ListOfProperty.dart';
import 'package:hostapp/src/screen/FetchProperties.dart';

class Dashboard extends StatefulWidget {
  @override
  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard>{
  int _selectedIndex = 0;


  @override
  Widget build(BuildContext context) {
    return Scaffold(
    resizeToAvoidBottomPadding: true,
      body:  switchBody(),
       bottomNavigationBar:  BottomNavigationBar(
            type: BottomNavigationBarType.fixed,
            iconSize: 20.3,
            fixedColor: Colors.white,
            backgroundColor: Colors.white,
             onTap: (index) => _onItemTapped(index),
            items: <BottomNavigationBarItem>[  
//Home
              BottomNavigationBarItem(
                icon:  Icon(FontAwesome.building,  color: Colors.black, size: 30,),
                title: new Text("Properties",
                  style: TextStyle(
                      color: Colors.black
                  ),
              
                ),
              ),
              //Order List
              BottomNavigationBarItem(
                icon: Icon(Icons.local_airport,  color: Colors.black, size: 30,),
                title: new Text("Reservation",
                  
                  style: TextStyle(
                    color: Colors.black,

                  ),
                ),
              ),

              //Section
              BottomNavigationBarItem(
                icon: Icon(
                  Icons.settings,
                  color: Colors.black, size: 30,),
                title: new Text("Settings",
                  style: GoogleFonts.alice(
                    textStyle: TextStyle(
                      color: Colors.black
                  ),
                  )
                ),

              ),
                    //Profile
              // BottomNavigationBarItem(
              //   icon: Icon(Icons.person, color: Colors.black,),
              //   title: new Text("No",
              //     style: TextStyle(
              //         color: Colors.black
              //     ),

              //   ),
              // ),
            ]

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
      return Text('');

    }else if(_selectedIndex == 3){ 
      return Text('');

    }
  }
  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }
}