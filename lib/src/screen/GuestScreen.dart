import 'package:flutter/material.dart';
import 'package:hostapp/src/model/getPropertiesModel.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:hostapp/src/viewmodels/GuestScreenViewModel.dart'; 
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppImage.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';

class GuestScreen extends StatefulWidget {
  @override
  _GuestScreenState createState() => _GuestScreenState();
}

class _GuestScreenState extends State<GuestScreen> {
  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<GuestScreenViewModel>.withConsumer(
      viewModel: GuestScreenViewModel(),
      //onModelReady: (model) => model.initialize(),
      builder: (context, model, child) =>

      Scaffold(
        body: SingleChildScrollView(child: Column(children: <Widget>[
          horizontalSpaceLarge,
                horizontalSpaceLarge,
               headerButton(),
               Padding(
                 padding: const EdgeInsets.only(left: 10.0),
                 child: Row(
                   mainAxisAlignment: MainAxisAlignment.start,
                   children: <Widget>[
                    Padding(
                       padding: const EdgeInsets.only(top: 8.0),
                       child: Text('Guest Details', style:  TextStyle(
              color: AppColor.black,
              fontSize: AppFontSizes.larger,
              fontWeight: FontWeight.bold
            )
          ),),  
                 ],),
               ),
                  Image.asset(AppImage.icode, height: 200, width: 200,),
                  Padding(
                  padding: const EdgeInsets.only(left:10.0, top: 10.0),
                  child: Row(
                    children: <Widget>[
                      SizedBox(width: 10,),
                      Text(('Lucy Smith'),
                  style: AppTextStyle.subTitle(context),),
                  SizedBox(width: 10,),
              Icon(Icons.verified_user, color: Colors.grey)
                    ],
                ),),

                SizedBox(width: 15,),

                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(children: <Widget>[
                    Image.asset(AppImage.board2, height: 50, width: 50,),
                     SizedBox(width: 10,),
                    Text('United State', style: AppTextStyle.titleLarge(context, Colors.grey),)
                  ],),
                ),

                 Padding(
                   padding: const EdgeInsets.all(8.0),
                   child: Row(children: <Widget>[
                   Icon(Icons.email, size: 30,),
                     SizedBox(width: 10,),
                    Text('United State', style: AppTextStyle.titleLarge(context,  AppColor.primary),),
                ],),
                 ),

                 Padding(
                   padding: const EdgeInsets.all(8.0),
                   child: Row(children: <Widget>[
                   Icon(Icons.phone, size: 30,),
                     SizedBox(width: 10,),
                    Text('+234818576666', style: AppTextStyle.titleLarge(context,  AppColor.primary),),
                ],),
                 ),
 verticalSpaceSmall,
 verticalSpaceLarge,
                     GestureDetector(
                  child: Padding(
                    padding: const EdgeInsets.only(left: 10.0, right:10.0, bottom: 20),
                    child: Container(
                      height: 50,
                      child: Material(
                        child: Center(
                          child: Text('Approve Guest',
                            style: TextStyle(
                                color: AppColor.white,
                                fontSize: 17.0,
                                fontWeight: FontWeight.bold
                            ),),
                        ),
                        color: Color(0xFF45A1C9),
                        shape: RoundedRectangleBorder(
                            borderRadius: new BorderRadius.circular(18.0),
                            side: BorderSide(color: AppColor.borderColor)
                        ),

                      ),
                    ),
                  ),
                  onTap: (){
                   

                  },
                )

        ],),),
      )
    );
  }
  

headerButton(){
return Row(
          mainAxisAlignment: MainAxisAlignment.start,
         // crossAxisAlignment: Cros,
          children: <Widget>[
            GestureDetector(child: Padding(
        padding: const EdgeInsets.only(left: 6.0, top: 30, bottom: 10),
        child: Container(
          child: Material(
          child: Row(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(left: 5.0),
                  child: Icon(Icons.arrow_back_ios,   color: AppColor.primary,),
                ),
                Center(
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text('Back',
                style: TextStyle(
                  color: AppColor.primary,
                  fontSize: 17.0,
                  fontWeight: FontWeight.bold
                ),),
              )
                )],
          ),
          color: AppColor.primaryLight,
          shape: RoundedRectangleBorder(
borderRadius: new BorderRadius.circular(18.0),
side: BorderSide(color: AppColor.primaryLight)
),
    ),
        ),
      ),
            onTap: (){
               Navigator.pop(context);
            },
            ),   ],
                    );
}
   
}