import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';

//******************************************************************
// This file contain Text Styling Codes  that will use throughout the entire App
//***********************************************************************
class AppTextStyle{

  static TextStyle subText(BuildContext context) {
    return GoogleFonts.alike(
      fontSize: AppFontSizes.medium,
      textStyle: TextStyle(
          fontWeight: FontWeight.normal,
          color: AppColor.white
          )
    );
  }

  static TextStyle h1(BuildContext context) {
    return GoogleFonts.alike(
        fontSize: AppFontSizes.large,
        textStyle: TextStyle(
            fontWeight: FontWeight.bold,
            color: AppColor.white
        )
    );
  }

}