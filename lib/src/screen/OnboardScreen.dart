import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/DynamicLinkService.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppImage.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:liquid_swipe/liquid_swipe.dart';


class OnboardScreen extends StatefulWidget {
  @override
  _OnboardScreenState createState() => _OnboardScreenState();
}

final NavigationService _navigationService = locator<NavigationService>();

class _OnboardScreenState extends State<OnboardScreen> {
  int page = 0;
   final DynamicLinkService _dynamicLinkService = locator<DynamicLinkService>();
  
  final pages = [
 Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          colors: [AppColor.b1, AppColor.b2],
          tileMode: TileMode.repeated
        )
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Image.asset(
            AppImage.board1,
            fit: BoxFit.cover,
          ),
          Padding(padding: const EdgeInsets.all(20.0)),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
               Expanded(
                 child: Padding(
                   padding: const EdgeInsets.all(8.0),
                   child: Text(
                    "Verify your guests and protect your property against bad actors",
                    textAlign: TextAlign.center,
                    style: GoogleFonts.sura(
                        fontSize: AppFontSizes.medium,
                        textStyle: TextStyle(
                            fontWeight: FontWeight.normal,
                            color: AppColor.white
                        )
                    )
              ),
                 ),
               ),

            ],
          )
        ],
      ),
    ),
    Container(
      decoration: BoxDecoration(
          gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [AppColor.b1, AppColor.b2],
              tileMode: TileMode.repeated
          )
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Image.asset(
            AppImage.board2,
            fit: BoxFit.cover,
          ),
          Padding(padding: const EdgeInsets.all(20.0)),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                      "Customize your registration flow, depending on what you require from guest",
                      textAlign: TextAlign.center,
                      style: GoogleFonts.sura(
                          fontSize: AppFontSizes.medium,
                          textStyle: TextStyle(
                              fontWeight: FontWeight.normal,
                              color: AppColor.white
                          )
                      )
                  ),
                ),
              ),

            ],
          )
        ],
      ),
    ),

    Container(
      decoration: BoxDecoration(
          gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [AppColor.b1, AppColor.b2],
              tileMode: TileMode.repeated
          )
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Image.asset(
            AppImage.board3,
            fit: BoxFit.cover,
          ),
          Padding(padding: const EdgeInsets.all(20.0)),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                      "Share your unique link with guest so they can walk through ahead of time",
                      textAlign: TextAlign.center,
                      style: GoogleFonts.sura(
                          fontSize: AppFontSizes.medium,
                          textStyle: TextStyle(
                              fontWeight: FontWeight.normal,
                              color: AppColor.white
                          )
                      )
                  ),
                ),
              ),

            ],
          )
        ],
      ),
    ),

  Container(
    decoration: BoxDecoration(
        gradient: AppColor.primaryGradient
    ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Image.asset(
            AppImage.board4,
            fit: BoxFit.cover,
          ),
          Padding(padding: const EdgeInsets.all(20.0)),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                      "Once guest go through your registration flow, You will receive all the documentation instantly",
                      textAlign: TextAlign.center,
                      style: GoogleFonts.sura(
                          fontSize: AppFontSizes.medium,
                          textStyle: TextStyle(
                              fontWeight: FontWeight.normal,
                              color: AppColor.white
                          )
                      )
                  ),
                ),
              ),

            ],
          ),                GestureDetector(
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          width: 150,
                          height: 50,
                          child: Material(
                          child: Center(
                            child: Text(('Proceed'),  //model.isPropertyRulesSet ? 'Complete' : 'Skip' If all field is entered, Display complete else Skip
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 17.0,
                              fontWeight: FontWeight.bold
                            ),),
                          ),
                          color: AppColor.b4,
                          shape: RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(18.0),
              side: BorderSide(color: AppColor.rimary)
    ),  ),
                        ),
                      ),
                      onTap: (){
                       _navigationService.navigateTo(authRoute);
                                 
                      },
                    ),
        ],
      ),
    ),
   ];

  @override
  void initState() {
    initializeDynamicLink();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
        debugShowCheckedModeBanner: false,
        home: new Scaffold(
        body: LiquidSwipe(
      pages: pages,
      onPageChangeCallback: (value) {
        print('Invalid $value');
      },
      fullTransitionValue: 500,
      enableSlideIcon: true,
        )));
  }
  
 initializeDynamicLink()async{
   await _dynamicLinkService.handleDynamicLinks(); //Initialize dynamic 
 }

}