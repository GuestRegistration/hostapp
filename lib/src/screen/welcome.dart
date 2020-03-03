import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/setting.dart';


class WelcomeScreen extends StatefulWidget {
  final String email;

  // List list;
  WelcomeScreen({this.email});
  @override
  _WelcomeScreenState createState() => new _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen> {
  var email;

  int _selectedIndex;
  void initState() {

    super.initState();
  }

  void dispose() {
    super.dispose();
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      resizeToAvoidBottomPadding: false,
      body: switchBody(),
      //_children[_currentIndex],
      /*new Container(
    
          child: new Center(
            
              child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
           //switchBody(),
          Center(
            child: Text(
              "Sign In Complete!",
              style:
                  TextStyle(color: Colors.black, fontWeight: FontWeight.bold,fontSize: 30.0),
            ),
          ),
         SizedBox(
                   
                  height: 30.0,),
             SizedBox(
                  width: 150.0,
                  height: 60.0,
                  child: Container(
                    color: Colors.black,
                    child: RaisedButton(
                      onPressed: () {
                      update();
                      },
                      child: const Text(
                        'Log out',
                        style: TextStyle(
                            color: Colors.white, fontWeight: FontWeight.bold),
                      ),
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.all(Radius.circular(2))),
                      color: Colors.white12,
                    ),
                  ),
                ),
                SizedBox(
                   
                  height: 30.0,),
          
                
           
         ],
     )
     )
     ),*/

      bottomNavigationBar: BottomNavigationBar(
        onTap: (index) => _onItemTapped(index),
        items: [
          BottomNavigationBarItem(
              icon: Icon(Icons.calendar_today),
              title: Text('RESERVATION'),
              backgroundColor: Color(0xff808080)),
          BottomNavigationBarItem(
              icon: Icon(Icons.mms),
              title: Text('PROPERTIES'),
              backgroundColor: Color(0xff808080)),
          BottomNavigationBarItem(
              icon: Icon(Icons.settings),
              title: Text('SETTINGS'),
              backgroundColor: Color(0xff45A1C9)
               )
        ],
      ),
    );
  }

  switchBody(){
    if (_selectedIndex == 0) {
      print("navigate to Reservation");
      return Text('');
    } else if (_selectedIndex == 1) {
      print("navigate to Property");

      return Text('');
    } else if (_selectedIndex == 2) {
      print("navigate to settings");

      return SettingScreen();
    }
  }
}
