import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/SplashScreen.dart';
import 'package:hostapp/src/screen/login_view.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppText.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:intro_slider/intro_slider.dart';
import 'package:intro_slider/slide_object.dart';

class OnboardScreen extends StatefulWidget {
  @override
  _OnboardScreenState createState() => _OnboardScreenState();
}

class _OnboardScreenState extends State<OnboardScreen> {
  List<Slide> slides = [];

  @override
  void initState() {
    for (int i = 0; i < AppText.onBoardingData.length; i++) {
      Slide slide = Slide(
        title: AppText.onBoardingData[i]['title'],
        description: AppText.onBoardingData[i]['desc'],
        colorBegin: AppColor.primary,
        colorEnd: AppColor.secondary,
        styleTitle: AppTextStyle.h1(context),
        directionColorBegin: Alignment.topRight,
        directionColorEnd: Alignment.bottomLeft,
        maxLineTextDescription: 2,
        marginDescription: EdgeInsets.fromLTRB(20.0, 150.0, 20.0, 0),
        styleDescription: AppTextStyle.subText(context),
//        foregroundImageFit: BoxFit.cover,
      );
      slide.pathImage = AppText.onBoardingData[i]['image'];
      slides.add(slide);
    }
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return IntroSlider(
      slides: slides,
      nameSkipBtn: AppText.skip,
      styleNameSkipBtn: TextStyle(color: AppColor.white),
      styleNameDoneBtn: TextStyle(color: AppColor.white),
      nameNextBtn: AppText.next,
      colorActiveDot: AppColor.white,
      colorDot: Colors.white70,
      nameDoneBtn: AppText.done,
      onDonePress: () async {
        //Navigate to SplashScreen
        Navigator.push(
            context,
            MaterialPageRoute(
                builder: (context) => LoginView()));
      },
    );
  }
}