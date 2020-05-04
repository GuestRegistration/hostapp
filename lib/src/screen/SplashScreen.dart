import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:hostapp/src/screen/auth_screen.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppImage.dart';
import 'package:hostapp/src/style/AppText.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  StreamSubscription<int> subscription;
  @override
  void initState() {
    counter();// start counting.
    super.initState();
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: new BoxDecoration(
              gradient: new LinearGradient(
                  colors: [
                     AppColor.primary,
                    AppColor.secondary,
                  ],
                  begin: const FractionalOffset(1.0, 0.0),
                  end: const FractionalOffset(2.1, 1.0),
                  stops: [0.0, 1.0],
                  tileMode: TileMode.clamp),
            ),
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Image.asset(AppImage.appLogo, height: 150,),
                Text(AppText.appName,
                  style: AppTextStyle.h1(context)),
                SizedBox(height: 5,),
                Text(AppText.slogan,
                  style: AppTextStyle.subText(context)),
                SizedBox(height: 5,),
                SpinKitRipple(color: AppColor.white10, duration: new Duration(seconds: 1), borderWidth: 5.0,),
            ],
          )
    ),
      )
    );
  }

   @override
  void dispose() {
    subscription.cancel(); //dispose when this page is closed.
    super.dispose();
  }

  counter(){
    Duration interval = Duration(seconds: 0); //Interval btw counting,
    Stream<int> stream = Stream<int>.periodic(interval, transform);
    subscription = stream.listen((int counter){

      if(counter == 2){ //if counter == 3
        subscription.cancel(); // cancel stream
        //Navigate to  passwordLess Screen
         Navigator.push(
            context,
            MaterialPageRoute(
                builder: (context) => AuthScreen()));
      }else{
        subscription.pause(Future.delayed(const Duration(seconds: 1))); //paused for some seconds before moving to next counter.
        
      }
    });
  }

  //Stream Reader.
  int transform(int i){
      return (i++);
  }
}