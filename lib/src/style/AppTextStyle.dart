import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTextStyle{

  static double fieldHeight = 55;
  static EdgeInsets fieldPadding = const EdgeInsets.symmetric(horizontal: 15);
  // Box Decorations

static BoxDecoration fieldDecortaion = BoxDecoration(
    borderRadius: BorderRadius.circular(10), 
    color: Color(0xFFededed)); //

static BoxDecoration disabledFieldDecortaion = BoxDecoration(
    borderRadius: BorderRadius.circular(5), color: Colors.grey[100]);

  static TextStyle categoryText(BuildContext context) {
    return TextStyle(
        fontFamilyFallback: ["Raleway-Thin"],
        fontSize: AppFontSizes.smallest,
        fontWeight: FontWeight.w700,
        color: Colors.grey);
  }
  // For snackbar/Toast text
  static TextStyle snackbar(BuildContext context) {
    return TextStyle(
        fontFamily: "Metropolis",
        fontFamilyFallback: ["RobotoRegular"],
        fontSize: AppFontSizes.small,
        fontWeight: FontWeight.w700,
        color: AppColor.erroColor);
  }
  static TextStyle inputStyle(BuildContext context) {
    return TextStyle(
        fontFamily: "Metropolis",
        fontFamilyFallback: ["RobotoRegular"],
        fontSize: AppFontSizes.medium,
        fontWeight: FontWeight.w700,
        color: Colors.grey);
  }

  // For headers
  static TextStyle header(BuildContext context) {
    return TextStyle(
        fontFamily: "Metropolis",
        fontFamilyFallback: ["RobotoRegular"],
        fontSize: AppFontSizes.largest,
        fontWeight: FontWeight.w700,
        color: AppColor.loginGradientEnd);
  }
  static TextStyle subTitle(BuildContext context) {
    return TextStyle(
        fontFamily: "Metropolis",
        fontFamilyFallback: ["RobotoRegular"],
        fontSize: AppFontSizes.medium,
        fontWeight: FontWeight.w700,
        color: AppColor.black);
  }

  // For small headers
  static TextStyle editTextSmall(BuildContext context) {
    return TextStyle(
        fontFamily: "Metropolis",
        fontFamilyFallback: ["Lobster"],
        fontSize: AppFontSizes.medium,
        fontWeight: FontWeight.w500,
        color: AppColor.loginGradientEnd);
  }
  static TextStyle error(BuildContext context, Color color ) {
    return TextStyle(
        fontFamily: "Metropolis",
        fontFamilyFallback: ["Lobster"],
        fontSize: AppFontSizes.medium,
        fontWeight: FontWeight.w800,
        color: color);
  }
  static TextStyle help(BuildContext context) {
    return GoogleFonts.alike(
      textStyle: TextStyle(
          fontSize: AppFontSizes.medium,
          fontWeight: FontWeight.w800,
          color: AppColor.loginGradientEnd)
    );
  }
  static TextStyle helpWhite(BuildContext context) {
    return GoogleFonts.alike(
        textStyle: TextStyle(
            fontSize: AppFontSizes.medium,
            fontWeight: FontWeight.w800,
            color: Colors.white70)
    );
  }
  static TextStyle siginText(BuildContext context) {
    return TextStyle(
        fontFamily: "Metropolis",
        fontFamilyFallback: ["Lobster"],
        fontSize: 14.0,
        fontWeight: FontWeight.w800,
        color: AppColor.loginGradientEnd);

  }

  static TextStyle headerSmall(BuildContext context) {
    return TextStyle(
        fontFamily: "Metropolis",
        fontFamilyFallback: ["RobotoRegular"],
        fontSize: AppFontSizes.medium,
        fontWeight: FontWeight.w500,
        color: AppColor.black);
  }
  static TextStyle headerSmallWhite(BuildContext context) {
    return TextStyle(
        fontFamily: "Metropolis",
        fontFamilyFallback: ["RobotoRegular"],
        fontSize: AppFontSizes.medium,
        fontWeight: FontWeight.w500,
        color: AppColor.loginGradientEnd);
  }

  static TextStyle headerSmall2(BuildContext context) {
    return TextStyle(
        fontFamily: "Metropolis",
        fontFamilyFallback: ["RobotoRegular"],
        fontSize: AppFontSizes.medium,
        fontWeight: FontWeight.w700,
        color: Colors.white);
  }
  static TextStyle inputHint(BuildContext context) {
    return TextStyle(
        fontFamily: "Metropolis",
        fontFamilyFallback: ["RobotoRegular"],
        fontSize: AppFontSizes.small,
        color: Colors.white);
  }
  static TextStyle emailheaderSmall(BuildContext context, Color color) {
    return TextStyle(
        fontFamily: "Metropolis",
        fontFamilyFallback: ["RobotoRegular"],
        fontSize: AppFontSizes.small,
        fontWeight: FontWeight.w500,
        color: color);
  }
  static double formRadius = 20;
  static double hzPadding = 37;
  static double vtFormPadding = 18;

  static Color primaryColor = AppColor.primary;
  static Color secondaryColor = AppColor.erroColor;
  static Color baseColor = Color(0xff4a4a4a);

  static Color lightGrayColor = Color(0xffe6e6e6);
  static Color grayColor = Color(0xff505050);
  static Color darkGrayColor = Color(0xff2d2d2d);

  static Color helperColor = Color(0xff787878);
  static Color optionalColor = Color(0xffA7A7A7);
  static Color errorColor = Color(0xffea6060);

  static final BoxDecoration formContainerDecoration = BoxDecoration(
    color: Colors.white,
    boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 8)],
    border: Border.all(color: Color(0xffd4d4d4)),
    borderRadius: BorderRadius.vertical(
      top: Radius.circular(AppTextStyle.formRadius),
    ),
  );

  static TextStyle barlow = TextStyle(fontFamily: "Barlow");
  static TextStyle baloo = TextStyle(fontFamily: "Baloo");

  static TextStyle appTitle1 = barlow.copyWith(
    color: AppTextStyle.primaryColor,
    fontWeight: FontWeight.w800,
    fontSize: 8,
    letterSpacing: 1.95,
  );
  static TextStyle appTitle2 = baloo.copyWith(
      color: AppTextStyle.primaryColor,
      fontSize: 32,
      letterSpacing: -1.08,
      height: 1.1,
      decoration: TextDecoration.underline,
      decorationThickness: 1.2);

  static TextStyle formTitle = baloo.copyWith(color: AppTextStyle.primaryColor,
      height: 1, fontSize: 30, letterSpacing: 0.22);

  static TextStyle formSection = barlow.copyWith(fontSize: 16, fontWeight: FontWeight.w600, letterSpacing: 0.5, color: secondaryColor);

  static TextStyle imageBatch = barlow.copyWith(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 16, letterSpacing: 0.5);

  static TextStyle productName =
  barlow.copyWith(fontWeight: FontWeight.w600, color: AppTextStyle.secondaryColor, letterSpacing: 0.63, fontSize: 20);
  static TextStyle productPrice = barlow.copyWith(fontWeight: FontWeight.w500, fontSize: 20, height: 1.8, letterSpacing: 0.63);
  static TextStyle orderLabel = barlow.copyWith(fontSize: 14, color: AppTextStyle.baseColor, letterSpacing: 0.44, fontWeight: FontWeight.w500);
  static TextStyle orderPrice = barlow.copyWith(fontSize: 14, color: AppTextStyle.baseColor, letterSpacing: 0.44, fontWeight: FontWeight.w600);
  static TextStyle orderTotalLabel =
  barlow.copyWith(fontSize: 16, color: AppTextStyle.baseColor, letterSpacing: 0.5, fontWeight: FontWeight.w500);
  static TextStyle orderTotal = barlow.copyWith(fontSize: 20, color: AppTextStyle.baseColor, letterSpacing: 0.63, fontWeight: FontWeight.bold);

  static TextStyle helperStyle = barlow.copyWith(fontSize: 16, color: helperColor, letterSpacing: 0.5, fontWeight: FontWeight.w500);
  static TextStyle inpuTStyle = barlow.copyWith(fontSize: 16, color: AppTextStyle.baseColor, letterSpacing: 0.5, fontWeight: FontWeight.w500);

  static TextStyle submitButtonText = barlow.copyWith(fontSize:
  16, color: Colors.white, letterSpacing: 0.44, fontWeight: FontWeight.bold);

  static TextStyle labelOptional = barlow.copyWith(fontSize: 8, color: optionalColor, fontWeight: FontWeight.bold, letterSpacing: 1);
  static TextStyle labelNotValid = barlow.copyWith(fontSize: 8, color: errorColor, fontWeight: FontWeight.bold, letterSpacing: 1);
  static TextStyle labelRequired = barlow.copyWith(fontSize: 6, color: grayColor, fontWeight: FontWeight.bold, letterSpacing: .5);

  static TextStyle textButton =
  barlow.copyWith(fontSize: 16, color: AppTextStyle.secondaryColor, letterSpacing: 0.5, fontWeight: FontWeight.bold);
  static TextStyle optionsTitle =
  barlow.copyWith(fontSize: 20, color: AppTextStyle.darkGrayColor, letterSpacing: 0.63, fontWeight: FontWeight.w600);

  static TextStyle iconDropdown = baloo.copyWith(
    color: AppTextStyle.secondaryColor,
    fontSize: 27,
  );

  static TextStyle formError =
  barlow.copyWith(fontSize: 12, color: errorColor, fontStyle:
  FontStyle.italic, letterSpacing: 0.38, fontWeight: FontWeight.w500);

  static TextStyle inputLabel = barlow.copyWith(fontSize: 16, color: AppTextStyle.baseColor, letterSpacing: 0.5, fontWeight: FontWeight.w600);

  static InputDecoration getInputDecoration({String helper}) {
    return InputDecoration(
      helperStyle: AppTextStyle.helperStyle,
      focusedBorder: OutlineInputBorder(borderSide: BorderSide(color: AppTextStyle.secondaryColor)),
      errorBorder: OutlineInputBorder(borderSide: BorderSide(color: AppTextStyle.errorColor)),
      enabledBorder: OutlineInputBorder(borderSide: BorderSide(color: AppTextStyle.lightGrayColor)),
      border: OutlineInputBorder(),
      errorStyle: TextStyle(color: Colors.transparent),
      helperText: '',
      hintText: helper,
      hintStyle: AppTextStyle.helperStyle,
    );
  }
  
static TextStyle buttonTitleTextStyle = const TextStyle(fontWeight: FontWeight.w700, color: Colors.white);


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