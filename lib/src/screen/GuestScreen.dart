import 'package:flutter/material.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:hostapp/src/viewmodels/GuestScreenViewModel.dart'; 
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppImage.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:country_code_picker/country_code_picker.dart';

class GuestScreen extends StatefulWidget {
   final String reservationID;
   final bool isApproved;

  const GuestScreen({this.reservationID, this.isApproved});
  @override
  _GuestScreenState createState() => _GuestScreenState();
}

class _GuestScreenState extends State<GuestScreen> {
  final CustomFuntion _customFuntion = locator<CustomFuntion>();
  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<GuestScreenViewModel>.withConsumer(
      viewModel: GuestScreenViewModel(),
      onModelReady: (model) => model.initialize(id: widget.reservationID),
      builder: (context, model, child) =>
      //If busy, start loading else
      //{ if error ocur, show errorMessage else show Data UI}
  Scaffold(
        body: (model.busy ? _customFuntion.loadingWidget() :
         (SingleChildScrollView(
           child: (model.getErrorMessage == null ? 
            Column(children: <Widget>[
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
                  //height: 200, width: 200,
                  (model.reservationData.identity.identity_documentUrl == null ?  Image.asset(AppImage.board2, height: 50, width: 50,)
                  : FadeInImage.assetNetwork(
                    placeholder: AppImage.loadinggif,
                    image: model.reservationData.identity.identity_documentUrl,
                    height: 200,
                    width: MediaQuery.of(context).size.width,
                  )),
                  
                  Padding(
                  padding: const EdgeInsets.only(left:10.0, top: 10.0),
                  child: Row(
                    children: <Widget>[
                      SizedBox(width: 10,),
                      Text((model.reservationData.user.name.fname == null ? '' : '${model.reservationData.user.name.fname} ${model.reservationData.user.name.lname}'),
                  style: AppTextStyle.subTitle(context),),
                  SizedBox(width: 10,),
              Icon(Icons.verified_user, color: Colors.grey)
                    ],
                ),),

 Padding(
   padding: const EdgeInsets.only(left: 15.0,),
   child: Row(
     children: <Widget>[
     AbsorbPointer(
       absorbing: true,
            child: Container(
          child:  CountryCodePicker(
                      initialSelection: model.reservationData.identity.identity_country == null 
                      ? '+1' : '${model.reservationData.identity.identity_country}', //just same mean as default country
                      favorite: ['+39','FR'],
                      alignLeft: false,
                      showFlag: true,
                      showOnlyCountryWhenClosed: true,
                      textStyle: AppTextStyle.titleLarge(context,  AppColor.primary),
                    ),
                    ),
     ),
                  // Text(model.reservationData.identity.identity_country == null ? '' : '${model.reservationData.identity.identity_country}',
                  //      style: AppTextStyle.titleLarge(context,  AppColor.primary),),

   ],)
 ),

                 Padding(
                   padding: const EdgeInsets.only(left: 15.0, right: 5.0, bottom: 5.0, top: 5.0),
                   child: Row(children: <Widget>[
                   Icon(Icons.email, size: 30,),
                     SizedBox(width: 10,),
                    Text(model.reservationData.user.email == null ? '' : '${model.reservationData.user.email}',
                       style: AppTextStyle.titleLarge(context,  AppColor.primary),),
                ],),
                 ),

                 Padding(
                   padding: const EdgeInsets.only(left: 15.0, right: 5.0, bottom: 5.0, top: 5.0),
                   child: Row(children: <Widget>[
                   Icon(Icons.phone, size: 30,),
                     SizedBox(width: 10,),
                    Text(model.reservationData.user.phone.completePhone == null ? '' : '${model.reservationData.user.phone.completePhone}',
                    style: AppTextStyle.titleLarge(context,  AppColor.primary),),
                ],),
                 ),
 verticalSpaceSmall,
 verticalSpaceLarge,
                  //If approve is true, disapper appove button else appear.
                     (widget.isApproved ? SizedBox.shrink() : GestureDetector(
                  child: Padding(
                    padding: const EdgeInsets.only(left: 10.0, right:10.0, bottom: 20),
                    child: Container(
                      height: 50,
                      child: (model.loadingOthers ? _customFuntion.loadingIndicator() : Material(
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
                      ))
                    ),
                  ),
                  onTap: (){
                   model.approveGuest(id: widget.reservationID);
                  },
                ))
        ],)
        : Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
          errorWidget(model)
        ],)
        )
        ) ))
    ),
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
   

   errorWidget(GuestScreenViewModel model){
    return Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
               Container(
                  height: 60,
                  width: 60,
                  child: CircularProgressIndicator(
                  strokeWidth: 1,
                        valueColor: AlwaysStoppedAnimation<Color>(AppColor.borderColor,),
                        backgroundColor: AppColor.borderColor,
                  ),
                ),
                SizedBox(height: 30,),
                Center(
                  child: Text(model.getErrorMessage,
                   textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.red,
                  fontSize: AppFontSizes.medium,
                  fontWeight: FontWeight.bold
                            ),),
                           
                ),
                verticalSpaceLarge,
                GestureDetector(child: Padding(
                    padding: const EdgeInsets.all(1.0),
                    child: Container(
                      width: 150,
                      height: 50,
                      child: Material(
                      child: Center(
                          child: Text('Retry',
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
                    model.initialize(id: widget.reservationID);
                    model.setErrorMessage(erorr: null); //clear error message data;
                  },
                        ),
              ],
            );
  }
}