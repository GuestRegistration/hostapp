import 'package:encrypt/encrypt.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:encrypt/encrypt.dart' as Key;

class CustomFuntion{
   IV iv; Encrypter encrypter; Encrypted encrypted;

   snackBarMessage({String message}){
return SnackBar(content: Text(message));
  }

   saveUserID({String userId})async{
     final SharedPreferences prefs = await SharedPreferences.getInstance();
     prefs.setString(sheref_Uid, userId);
   }

   getUserID()async{
     final SharedPreferences prefs = await SharedPreferences.getInstance();
     String uid = prefs.getString(sheref_Uid);
     return uid;
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
      child: SpinKitRipple(color: AppColor.colorassence, duration: new Duration(seconds: 1),)
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

  errorUimessage({String errorMessage}){
   return  (errorMessage == null ? SizedBox.shrink() : Row(children: <Widget>[
              Icon(Icons.error, color: Colors.red,),
              SizedBox(width: 10,),
              Text(errorMessage,
                      style: TextStyle(
                        color: AppColor.kErrorRed,
                        fontSize: 17.0,
                        fontWeight: FontWeight.normal
                      ),),

            ],));
  }

void util(){
    final key = Key.Key.fromLength(32);
     iv = IV.fromLength(16);
     encrypter = Encrypter(AES(key));
  }
  //Encryp User Data, create a file and store it into.
  encryptUserData({String plainText}){
     encrypted = encrypter.encrypt(plainText, iv: iv);
    print(encrypted.base16.toString());
  }

  deecryptUserData()async{
    String decrypted = encrypter.decrypt(encrypted, iv: iv);
     print(decrypted);
     return decrypted;
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

}