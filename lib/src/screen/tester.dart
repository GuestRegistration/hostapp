import 'dart:async';

import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/model/getPropertiesModel.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/viewmodels/addReservationViewModel.dart';
import 'package:provider_architecture/provider_architecture.dart';

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
    return ViewModelProvider<AddReservationViewModel>.withConsumer(
      viewModel: AddReservationViewModel(),
      onModelReady: (model) => model.initialize(),
      builder: (context, model, child) =>
         Scaffold(
        appBar: AppBar(
          title: const Text('Remote Config Example'),
        ),
        body: (model.busy ?  CircularProgressIndicator(
                    strokeWidth: 4,
                          valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                          backgroundColor: AppColor.borderColor,
                    ) : Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Expanded(
                    child: DropdownButton<GetProperties>(
                      elevation: 6,
                      style: AppTextStyle.inputStyle(context),
                      hint: Text(
                        "اختر النوع", //Choose type
                        textAlign: TextAlign.center,
                      ),
                       items: model.getPropertiesList().map((GetProperties lang) {
                        return DropdownMenuItem<GetProperties>(
                          value: lang,
                          child: Row(
                            mainAxisAlignment:
                            MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Text(
                                lang.name,
                                style: TextStyle(
                                  color: AppColor.secondary,
                                ),
                              )
                            ],
                          ),
                        );
                      }).toList(),
                      isExpanded: true, 
                      value: _seletUsertype,
                      onChanged: (value) {
                        setState(() {
                          _seletUsertype = value;
                          print(_seletUsertype.id);
                        });
                      },
                    ),
                ),
            ],
          ),
        ))
      ),
    );
   
    
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