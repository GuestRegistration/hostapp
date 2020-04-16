import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_icons/flutter_icons.dart'; 
import 'package:google_fonts/google_fonts.dart';
import 'package:hostapp/src/screen/ListOfProperty.dart';
import 'package:hostapp/src/screen/MainReservationScreen.dart';
import 'package:hostapp/src/screen/PersonalDetailsScreen.dart';
import 'package:hostapp/src/screen/SettingsScreen.dart';
import 'package:hostapp/src/style/AppColor.dart';

class Dashboard extends StatefulWidget {
  final int showIndex;

const Dashboard({this.showIndex});

  @override
  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard>{
  int _selectedIndex;

@override
  void initState() {
    super.initState();
    _selectedIndex = widget.showIndex;
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
    resizeToAvoidBottomPadding: true,
      body:  switchBody(),
       bottomNavigationBar:  BottomNavigationBar(
            type: BottomNavigationBarType.fixed,
            selectedItemColor: Colors.blue,
            backgroundColor: Colors.white,
             onTap: (index) => _onItemTapped(index),
            items: <BottomNavigationBarItem>[  
//Home
              BottomNavigationBarItem(
                icon:  Icon(Icons.calendar_today,  color: (_selectedIndex == 0 ? AppColor.primary : Colors.grey), size: 25,),
                title: new Text("RESERVATIONS", 
                  style: TextStyle(
                      color:(_selectedIndex == 0 ? AppColor.primary :  Colors.grey),
                      fontSize: 13,
                  ),
              
                ),
              //  activeIcon:  Icon(Icons.calendar_today,  color: Colors.blue, size: 30,),
              ),
              //Order List
              BottomNavigationBarItem(
                icon: Icon(MaterialIcons.domain,  color: (_selectedIndex == 1 ? AppColor.primary : Colors.grey),  size: 25,), 
                title: new Text("PROPERTIES",
                  style: TextStyle(
                    color: (_selectedIndex == 1 ? AppColor.primary :  Colors.grey),
                     fontSize: 16,
                  ),
                ),
                 //activeIcon:  Icon(FontAwesome.building,  color: Colors.blue, size: 30,),
                 backgroundColor: Colors.red,
              ),
              //Section
              BottomNavigationBarItem(
                icon: Icon(
                  MaterialIcons.settings,
                  color: (_selectedIndex == 2 ? AppColor.primary : Colors.grey), size: 25,),
                title: new Text("SETTINGS",
                  style: TextStyle(
                     color: (_selectedIndex == 2 ? AppColor.primary :  Colors.grey),
                      fontSize: 16,
                  ),
                ),
                    //activeIcon:  Icon(FontAwesome.building,  color: Colors.blue, size: 25,),
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
       return MainReservationScreen();

    }else if(_selectedIndex == 1){
     return ListOfProperty();
   

    }else if(_selectedIndex == 2){ 
     return SettingsScreen();
    }
  }
  
  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }
}