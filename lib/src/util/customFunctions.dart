import 'package:encrypt/encrypt.dart';
import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter/services.dart';
import 'package:share/share.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:encrypt/encrypt.dart' as Key;
import 'package:url_launcher/url_launcher.dart';

class CustomFuntion{
    final storage = new FlutterSecureStorage();

  //Save Email and Id to secure storage
  saveEmailandID({String email, String uid, String idToken})async{
      await storage.write(key: Constants.constEmail, value: email.toString());
        await storage.write(key: Constants.constID, value: uid.toString());
         await storage.write(key: Constants.constUserToken, value: idToken);
  }

  saveUserData({String email, String fname, String lname, String phoneN, String completePhone, String userID, String phoneCode})async{
     await storage.write(key: Constants.constmail, value: email.toString());
     await storage.write(key: Constants.constFname, value: fname.toString());
     await storage.write(key: Constants.constLname, value: lname.toString());
     await storage.write(key: Constants.constPhoneN, value: phoneN.toString());
     await storage.write(key: Constants.constPhoneContryCode, value: phoneCode.toString());
      await storage.write(key: Constants.constCompletePhone, value: completePhone.toString());
      await storage.write(key: Constants.constID, value: userID.toString());
  }

  

  dialog({BuildContext context, String message, title}) {
   return showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: new Text(title),
          content: new Text(message.toString()),
          actions: <Widget>[
            new FlatButton(
              child: new Text("Close"),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  showToast({String message}){
     Fluttertoast.showToast(
      msg: message,
      toastLength: Toast.LENGTH_LONG,
      gravity: ToastGravity.CENTER,
      timeInSecForIos: 1,
      backgroundColor: AppColor.accents,
      textColor: Colors.white,
      fontSize: 16.0,
    );
  }

  loadingWidget(){
    return Center(
      child: CircularProgressIndicator(
                    strokeWidth: 4,
                    valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                    backgroundColor: AppColor.borderColor,
                    ),
    );
  }

  Widget errorWidget(String message){
    return Center(child: Text(message.toString(),
        textAlign: TextAlign.center,
        style: GoogleFonts.alikeAngular
          (textStyle: TextStyle(fontSize: 15.0, color: Colors.red),
        )
    ),
    );
  }

  errorUimessage({String errorMessage, int type}){
   return  (errorMessage == null ? SizedBox.shrink() : Center(
     child: Row(
       mainAxisAlignment: MainAxisAlignment.center,
       children: <Widget>[
         (type == 1 ? Icon(Icons.check_circle, color: Colors.green,): Icon(Icons.error, color: Colors.red,)),
         SizedBox(width: 10,),
         Text(errorMessage,
           style: TextStyle(
               color: (type == 1 ? Colors.green : AppColor.kErrorRed),
               fontSize: 17.0,
               fontWeight: FontWeight.normal
           ),),

       ],),
   ));
  }
String validateEmail(String value) {
    Pattern pattern =
        r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$';
    RegExp regex = new RegExp(pattern);
    if (!regex.hasMatch(value))
      return 'Enter Valid Email';
    else
      return null;
}

shareReservationLink({String link})async{
    Share.share('Click on this link to access the property $link');
  }


   String returnMonth({int value}){
    switch(value){
    case 1:
	return "January";
	  break;
	  
	  case 2:
	return "Feb.";
	  break;
	  
	  case 3:
	return "March";
	  break;
	  
	  case 4:
	return "April";
	  break;
	  
	  case 5:
	return "May";
	  break;
	  
	  case 6:
	return "June";
	  break;
	  
	  case 7:
	return "July";
	  break;
	  
	  case 8:
	return "August";
	  break;
	  
	  case 9:
	return "Sept.";
	  break;
	  
	  case 10:
	return "Oct.";
	  break;
	  
	  case 11:
	return "Nov.";
	  break;
	  
	  case 12:
	return "Dec.";
	  break;
    
    default:
    return '';
    }
  }
   //getting data from remote config
  Future getTermconditions() async {
    final RemoteConfig remoteConfig = await RemoteConfig.instance;
    var result;
    try {
      remoteConfig.setConfigSettings(RemoteConfigSettings(debugMode: true));
      await remoteConfig.fetch(expiration: const Duration(seconds: 0));
      await remoteConfig.activateFetched();
      //result = remoteConfig.getString('TermsConditions');
      result = remoteConfig.getString('Termsurl');
    } on FetchThrottledException catch (exception) {
      print(exception);
    } catch (exception) {
      print("unable to fetch remote config");
    }
    return launch(result);
  }

     //getting data from remote config
  Future havingProblemCondition() async {
    final RemoteConfig remoteConfig = await RemoteConfig.instance;
    var result;
    try {
      remoteConfig.setConfigSettings(RemoteConfigSettings(debugMode: true));
      await remoteConfig.fetch(expiration: const Duration(seconds: 0));
      await remoteConfig.activateFetched();
      //result = remoteConfig.getString('TermsConditions');
      result = remoteConfig.getString('havingProblem');
    } on FetchThrottledException catch (exception) {
      print(exception);
    } catch (exception) {
      print("unable to fetch remote config");
    }
    return launch(result);
  }

   loadingIndicator() {
     return Center(
      child: CircularProgressIndicator(
        strokeWidth: 8,
        valueColor: AlwaysStoppedAnimation<Color>(
          Color(0xFF45A1C9),
        ),
        backgroundColor: Color(0xFFC6DEE9),
      )
    );
   }
   
   String validateMobile(String value) {
  String patttern = r'(^[0-9]*$)';
  RegExp regExp = new RegExp(patttern);
  if (value.length == 0) {
    return "Mobile is Required";
  } else if (value.length >= 15) {
    return "Mobile number can't be more than 15 digits";
  } else if (!regExp.hasMatch(value)) {
    return "Mobile Number must be digits";
  }
  return null;
}
textInputField({
      final TextEditingController controller,
  final TextInputType textInputType,
  final bool password = false,
  final bool isReadOnly = false,
  final String placeholder,
  final String validationMessage,
  final Function enterPressed,
  final bool smallVersion = false,
  final FocusNode fieldFocusNode,
  final FocusNode nextFocusNode,
  final TextInputAction textInputAction,
  final String additionalNote,
  final Function(String) onChanged,
  final InputDecoration decoration,
  final TextInputFormatter formatter,
  final BuildContext context,
  final String hintText,
 }
  ){


  double fieldHeight = 55;

   return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Row(
            children: <Widget>[
              Expanded(
                child: Theme(
                  data: new ThemeData(
            primaryColor: AppColor.borderColor,
            primaryColorDark: AppColor.borderColor,
          ),
           child: TextFormField(
                    controller: controller,
                    keyboardType: textInputType,
                    focusNode: fieldFocusNode,
                    textInputAction: textInputAction,
                    onChanged: onChanged,
                    
                    inputFormatters: formatter != null ? [formatter] : null,
                    onEditingComplete: () {
                      if (enterPressed != null) {
                        FocusScope.of(context).requestFocus(FocusNode());
                        enterPressed();
                      }
                    },
                    onFieldSubmitted: (value) {
                      if (nextFocusNode != null) {
                        nextFocusNode.requestFocus();
                      }
                    },
                    obscureText: password,
                    readOnly: isReadOnly,
                    
                    decoration: (decoration == null ? InputDecoration(
                        hintText: hintText,
                        border: new OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8.0),
                                  borderSide: new BorderSide(color: AppColor.primary,
                                  
                                  ),
                              ),
                               enabledBorder: new OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8.0),
                                  borderSide: new BorderSide(color: AppColor.primary,
                                  ),
                              ),
                        hintStyle:TextStyle(fontSize: smallVersion ? 12 : 15)) : 
                          decoration)
                  ),
                ),
              ),
            ],
          ),
      ],
    );
}

}