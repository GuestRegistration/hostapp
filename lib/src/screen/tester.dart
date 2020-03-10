import 'dart:async';

import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/model/getPropertiesModel.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/viewmodels/addReservationViewModel.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:hostapp/src/widget/ShareLinkDialog.dart';

class TesterMain extends StatefulWidget {
  @override
  _TesterMainState createState() => _TesterMainState();
}

class _TesterMainState extends State<TesterMain> {
   List<String> userType = new List<String>();
     GetProperties _seletUsertype ;
     String myV;

   
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Remote Config Example'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
children: <Widget>[
  GestureDetector(child: Padding(
                    padding: const EdgeInsets.all(1.0),
                    child: Container(
                      width: 150,
                      height: 50,
                      child: Material(
                      child: Center(
                          child: Text('Show Dialog',
                          style: TextStyle(
                            color: AppColor.white,
                            fontSize: 17.0,
                            fontWeight: FontWeight.bold
                          ),),
                      ),
                      color: Color(0xFF45A1C9),
                      shape: RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(18.0),
            side: BorderSide(color: AppColor.borderColor)
    ),
                   
                ),
                    ),
                  ),
                  onTap: (){
                    
                  },
                        ),
],
          ),
        )
      );
   
    
  }
  display(BuildContext context){
   showDialog(
            context: context,
            builder: (BuildContext context) {
              return ShareLinkDialog(link: 'https://pub.dev/packages?q=dialog',);});
}
}
class WelcomeWidget extends StatelessWidget {
  WelcomeWidget({this.result});

   var result;

  @override
  Widget build(BuildContext context) {
    print(result);
    return Scaffold(
      appBar: AppBar(
        title: const Text('Remote Config Example'),
      ),
      body: Center(child: Text('$result')),
      floatingActionButton: FloatingActionButton(
          child: const Icon(Icons.refresh),
          onPressed: () async {
           
          }
          
          ),
    );
  }
}

Future setupRemoteConfig() async {
  final RemoteConfig remoteConfig = await RemoteConfig.instance;
  // Enable developer mode to relax fetch throttling
   var result;

   try {
             remoteConfig.setConfigSettings(RemoteConfigSettings(debugMode: true));
       
              await remoteConfig.fetch(expiration: const Duration(seconds: 0));
              await remoteConfig.activateFetched();
               remoteConfig.setDefaults(<String, dynamic>{
                'welcome': 'default welcome',
                'hello': 'default hello',
              });
              result = remoteConfig.getString('tester');
   
            } on FetchThrottledException catch (exception) {
              // Fetch throttled.
              print(exception);
            } catch (exception) {
              print(
                  'Unable to fetch remote config. Cached or default values will be '
                  'used');
            }

  return result;
}

//  return Container(
//       child: FutureBuilder(
//           future: setupRemoteConfig(),
//           builder: (BuildContext context, AsyncSnapshot snapshot) {
//              if (snapshot.connectionState == ConnectionState.waiting) {
//             return Center(child: CircularProgressIndicator());

//             } else if (snapshot.hasError) {
//             final error = snapshot.error;
            
//             return  Text(error.toString());

//             } else if (snapshot.hasData) {
//               return WelcomeWidget(result: snapshot.data);

//             } else if(!snapshot.hasData) {
//               return Text('Unable to get Data, Please retry');
//             }else {
//               return Text('');
//             }
//           },
//         ),
//     );