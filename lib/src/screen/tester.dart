import 'dart:async';

import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/material.dart';

class TesterMain extends StatefulWidget {
  @override
  _TesterMainState createState() => _TesterMainState();
}

class _TesterMainState extends State<TesterMain> {
  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
        future: setupRemoteConfig(),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
           if (snapshot.connectionState == ConnectionState.waiting) {
          return Center(child: CircularProgressIndicator());

          } else if (snapshot.hasError) {
          final error = snapshot.error;
          
          return  Text(error.toString());

          } else if (snapshot.hasData) {
            return WelcomeWidget(result: snapshot.data);

          } else if(!snapshot.hasData) {
            return Text('Unable to get Data, Please retry');
          }else {
            return Text('');
          }
        },
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
      body: Center(child: Text('Welcome $result')),
      floatingActionButton: FloatingActionButton(
          child: const Icon(Icons.refresh),
          onPressed: () async {
            // try {
            //   // Using default duration to force fetching from remote server.
            //   await remoteConfig.fetch(expiration: const Duration(seconds: 0));
            //   await remoteConfig.activateFetched();
            // } on FetchThrottledException catch (exception) {
            //   // Fetch throttled.
            //   print(exception);
            // } catch (exception) {
            //   print(
            //       'Unable to fetch remote config. Cached or default values will be '
            //       'used');
            // }
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
              result = remoteConfig.getString('key');

              
  // print('**************************Get from Server');

  // print(remoteConfig.getString('key'));
  //  print('**************************************');

  // remoteConfig.setDefaults(<String, dynamic>{
  //   'welcome': 'default welcome',
  //   'hello': 'default hello',
  // });
              
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