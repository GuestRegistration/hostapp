import 'package:android_intent/android_intent.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppImage.dart';
import 'package:hostapp/src/style/AppText.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:hostapp/src/locator.dart';
import 'package:url_launcher/url_launcher.dart';
import'dart:io' show Platform;

class CheckInboxScreen extends StatefulWidget {
  final String email;
  CheckInboxScreen({this.email});

  @override
  _CheckInboxScreenState createState() => _CheckInboxScreenState();
}

class _CheckInboxScreenState extends State<CheckInboxScreen> {
  
    final CustomFuntion _customFuntion = locator<CustomFuntion>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: <Widget>[
          SizedBox(height: 15,),
           Padding(
             padding: const EdgeInsets.all(8.0),
             child: Image.asset(AppImage.checkEmail,),
           ),
          Center(
                  child: Container(
                    child: Text(
                      "Check your email!",
                      style: TextStyle(
                          color: Colors.black,
                          fontWeight: FontWeight.bold,
                          fontSize: 24.0),
                    ),
                  ),
                ),
                 verticalSpaceTiny,
                
                Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Expanded(
                          child: Text(
                          "${AppText.emailText} ${widget.email} \n ${AppText.emailText2}",
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Color(0xff8F8F8F),
                            fontSize: 14.0,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                 verticalSpaceTiny,

                    verticalSpaceMedium, //Enable space btw
                    Container(
                  width: 318.0,
                  height: 47.0,
                  decoration: new BoxDecoration(
                    borderRadius: new BorderRadius.circular(
                      13.0,
                    ),
                  ),
                  child: RaisedButton(
                    color: const Color(0xffF1F1F1),
                    child: new Row(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                            Text('Go to Inbox',
                            style: TextStyle(
                                color: AppColor.black,
                                fontSize: 17.0,
                                fontWeight: FontWeight.bold
                            ),),
                      ],
                    ),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(12))),
                    onPressed: () async {
                    openMail();
                    },
                  ),
                ),
                 verticalSpaceMedium,
                FlatButton(
                    onPressed: () {
                      _customFuntion.havingProblemCondition();
                    },
                    child: const Text(
                      'Having problems click here',
                      style: TextStyle(
                        color: Color(0xff8F8F8F),
                        fontSize: 12.0,
                        fontWeight: FontWeight.w600,
                        decoration: TextDecoration.underline,
                      ),
                    ),
                  ),
        ],
      )
    );
  }

  openMail(){
    if (Platform.isAndroid) {
  AndroidIntent intent = AndroidIntent(
    action: 'android.intent.action.MAIN',
    category: 'android.intent.category.APP_EMAIL',
  );
  intent.launch().catchError((e) {
    
  });
} else if (Platform.isIOS) {
 launch("message://").catchError((e){
    
  });
}
  }
}