import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/PersonalDetailsScreen.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:hostapp/src/screen/auth_screen.dart';
import 'package:hostapp/src/screen/sign_in.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:flutter_icons/flutter_icons.dart'; 
import 'package:hostapp/src/screen/ListOfProperty.dart';
import 'package:hostapp/src/screen/MainReservationScreen.dart';
import 'package:hostapp/src/screen/NotificationScreen.dart';

class SettingsScreen extends StatefulWidget {
  @override
  _SettingsScreenState createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
   GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();

  int _selectedIndex;

@override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: switchBody(),
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
                  MaterialIcons.notifications,
                  color: (_selectedIndex == 2 ? AppColor.primary : Colors.grey), size: 25,),
                title: new Text("NOTIFICATION",
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


  Future geturl(String url) async {
    print("url" + url);
    final RemoteConfig remoteConfig = await RemoteConfig.instance;
    var result;
    try {
      remoteConfig.setConfigSettings(RemoteConfigSettings(debugMode: true));
      await remoteConfig.fetch(expiration: const Duration(seconds: 0));
      await remoteConfig.activateFetched();
      result = remoteConfig.getString(url);
    } on FetchThrottledException catch (exception) {
      print(exception);
    } catch (exception) {
      print("unable to fetch remote config");
    }
    return launch(result);
  }

void signOut() async {
    //.... code for signOut
    await FirebaseAuth.instance.signOut().whenComplete(() => navigate());
    await googleSignIn.signOut().whenComplete(() => navigate());
    graphQLConfiguration.logout();
  }

  navigate() {
    //print("inside navigate");
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(
        builder: (context) {
          //Navigate to Let's get started screen
          return AuthScreen();
        },
      ),
    );
  }


switchBody(){

    if(_selectedIndex == 0){
       return MainReservationScreen();

    }else if(_selectedIndex == 1){
     return ListOfProperty();
   

    }else if(_selectedIndex == 2){ 
     return NotificationScreen();

    }else{

      return settingsBody();
    }
    
  }
  
  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  settingsBody(){
    return SingleChildScrollView(
        child: Padding(
             padding: const EdgeInsets.only(left: 15.0, right: 15.0),
              child: Column(children: <Widget>[
                 verticalSpaceMedium2,
                  Padding(
              padding: const EdgeInsets.only(top: 10.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                 Padding(
                   padding: const EdgeInsets.all(8.0),
                   child: Text('Settings', style:  TextStyle(
            color: AppColor.black,
            fontSize: AppFontSizes.largest,
            fontWeight: FontWeight.bold
          )
        ),), ],),
            ),

                //Personal Details
                Container(
                alignment: Alignment.center,
                decoration: new BoxDecoration(
                    color: Colors.white,
                    borderRadius: new BorderRadius.circular(
                      10.0,
                    ),
                    border: Border.all(color: Color(0xffC6DEE9))),
                child: new FlatButton(
                  onPressed: () {
                   Navigator.push( context,
                   MaterialPageRoute(builder: (context) => PersonalDetailsScreen(
                   ))); 
                  },
                  child: ListTile(leading: Text(
                          'Personal details',
                          style: TextStyle(
                            color: Color(0xff8F8F8F),
                            fontSize: 18.0,
                          ),
                        ),
                        trailing: Icon(
                            Icons.arrow_forward_ios,
                            color: Color(0xff808080),
                            size: 18.0,
                          ),
                        )
                ),
              ),
                 
                 verticalSpaceMedium,
                  //Terms and services
                  Container(
                alignment: Alignment.center,
                decoration: new BoxDecoration(
                    color: Colors.white,
                    borderRadius: new BorderRadius.circular(
                      10.0,
                    ),
                    border: Border.all(color: Color(0xffC6DEE9))),
                child: new FlatButton(
                  onPressed: () {
                    geturl('Termsofserviceurl');
                  },
                  child: ListTile(leading: Text(
                          'Terms and Service',
                          style: TextStyle(
                            color: Color(0xff8F8F8F),
                            fontSize: 18.0,
                          ),
                        ),
                        trailing: Icon(
                            Icons.arrow_forward_ios,
                            color: Color(0xff808080),
                            size: 18.0,
                          ),
                        )
                ),
              ),


              //Privacy Policy
               verticalSpaceMedium,
                 Container(
                alignment: Alignment.center,
                decoration: new BoxDecoration(
                    color: Colors.white,
                    borderRadius: new BorderRadius.circular(
                      10.0,
                    ),
                    border: Border.all(color: Color(0xffC6DEE9))),
                child: new FlatButton(
                  onPressed: () {
                    geturl('Privacypolicyurl');
                  },
                  child: ListTile(leading: Text(
                          'Privacy Policy',
                          style: TextStyle(
                            color: Color(0xff8F8F8F),
                            fontSize: 18.0,
                          ),
                        ),
                        trailing: Icon(
                            Icons.arrow_forward_ios,
                            color: Color(0xff808080),
                            size: 18.0,
                          ),
                        )
                ),
              ),

                //contact Us
               verticalSpaceMedium,
                 Container(
                alignment: Alignment.center,
                decoration: new BoxDecoration(
                    color: Colors.white,
                    borderRadius: new BorderRadius.circular(
                      10.0,
                    ),
                    border: Border.all(color: Color(0xffC6DEE9))),
                child: new FlatButton(
                  onPressed: () {
                    geturl('Contactusurl');
                  },
                  child: ListTile(leading: Text(
                          'Contact Us',
                          style: TextStyle(
                            color: Color(0xff8F8F8F),
                            fontSize: 18.0,
                          ),
                        ),
                        trailing: Icon(
                            Icons.arrow_forward_ios,
                            color: Color(0xff808080),
                            size: 18.0,
                          ),
                        )
                ),
              ),
                
//SignOUT
                 verticalSpaceMedium,
                 Container(
                alignment: Alignment.center,
                decoration: new BoxDecoration(
                    color: Colors.white,
                    borderRadius: new BorderRadius.circular(
                      10.0,
                    ),
                    border: Border.all(color: Color(0xffC6DEE9))),
                child: new FlatButton(
                  onPressed: () {
                     signOut();
                  },
                  child: ListTile(leading: Text(
                          'Sign Out',
                          style: TextStyle(
                            color: Color(0xff8F8F8F),
                            fontSize: 18.0,
                          ),
                        ),
                        trailing: Icon(
                            Icons.arrow_forward_ios,
                            color: Color(0xff808080),
                            size: 18.0,
                          ),
                        )
                ),
              ),
                
             
              ],)
        )
      );
  }
}