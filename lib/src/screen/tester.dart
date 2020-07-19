import 'dart:async';

import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/material.dart';
import 'package:flutter_google_places/flutter_google_places.dart';
import 'package:google_maps_webservice/places.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';

class TesterMain extends StatefulWidget {
  @override
  _TesterMainState createState() => _TesterMainState();
}

class _TesterMainState extends State<TesterMain> {
 bool loading = false;
  TextEditingController propertyNameController =  TextEditingController();
  TextEditingController addressController =  TextEditingController();
  String key;

  @override
  void initState() {
    super.initState();
    setupRemoteConfig(); //Vijay! Check if you can see the key here.
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('hostApp Google Place'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
children: <Widget>[
  (loading ?  CircularProgressIndicator() :
               GestureDetector(
                      child:  TextFormField(
                        controller: propertyNameController,
                    keyboardType: TextInputType.number,
                    decoration:  InputDecoration(
                      enabledBorder: new OutlineInputBorder(
                      borderRadius: BorderRadius.circular(8.0),
                      borderSide: new BorderSide(color: AppColor.borderColor,
                      ),
                  ),
                    border: new OutlineInputBorder(
                      borderRadius: BorderRadius.circular(8.0),
                      borderSide: new BorderSide(color: AppColor.borderColor
                      ),
                  ),
                    hintStyle: AppTextStyle.inputHint(context),
                  ),
                   onTap: ()async{
                       Prediction prediction = await PlacesAutocomplete.show(
                          context: context,
                          apiKey: key,
                          mode: Mode.overlay, // Mode.fullscreen
                          
                          );
         propertyNameController.text=prediction.structuredFormatting.mainText;
          setState(() {
            addressController.text = prediction.structuredFormatting.secondaryText;
          });
          },
                  ), 
                  
                  )
                  
                  ),
  
],
          ),
        )
      );
   
  }

  startLoading(){
    setState((){
      loading = true;
    });
  }

  stopLoading(){
    setState((){
      loading = false;
    });
  }

  
     Future setupRemoteConfig() async {
   startLoading();
  final RemoteConfig remoteConfig = await RemoteConfig.instance;
  // Enable developer mode to relax fetch throttling
   var result;

   try {
             remoteConfig.setConfigSettings(RemoteConfigSettings(debugMode: true));
              await remoteConfig.fetch(expiration: const Duration(seconds: 0));
              await remoteConfig.activateFetched();
             result = remoteConfig.getString('key');
             key = result.toString(); //Store API key in this string.
             print('API KEY Fetched is : $key'); //If it's null, that means no API key. 

            } on FetchThrottledException catch (exception) {
              // Fetch throttled.
              print(exception);
            } catch (exception) {
              print('Unable to fetch remote config. Cached or default values will be used');
            }

             stopLoading();
  return result;
}
}
