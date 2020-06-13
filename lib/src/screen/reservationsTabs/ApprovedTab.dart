import 'package:flutter/material.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/widget/ReservationWidget.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:hostapp/src/viewmodels/MainReservationViewModel.dart';
import 'package:string_validator/string_validator.dart';

class ApprovedTab extends ProviderWidget<MainReservationViewModel> {
  @override
  Widget build(BuildContext context, MainReservationViewModel model) {
    return (model.busy ? Center(
      child: CircularProgressIndicator(
                    strokeWidth: 4,
                          valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                          backgroundColor: AppColor.borderColor,
                    ),
    ): (model.list == null ? Center(child: Text('You do not have any reservation. '
                  'Click on the ‘’Add icon’’ button below to add one reservation for free.',
                   textAlign: TextAlign.center,
                style:  TextStyle(
                  color: Colors.red,
                  fontStyle: FontStyle.normal,
                  fontSize: 16,
                )
              ),
              ): 
    ListView.builder(
            itemCount: model.list.length,
            shrinkWrap: true,
            scrollDirection: Axis.vertical,
            itemBuilder: (BuildContext context , int index){
              String  checkoutDate = model.list[index].checkoutDate;
  //             if(checkoutDate == null){
  //       return SizedBox.shrink();
  //   }else{
  //     //print('Server => $checkoutDate');    
  DateTime date = DateTime.now();
  String today = '${date.day}-${date.month}-${date.year}';
//print('Me => $today');

  // if(equals(checkoutDate, today)){
  //  // print('Sane $today => $checkoutDate');

  //   return SizedBox.shrink();
  // }else{
  //    return ReservationWidget(
  //               getReservation: list[index],
  //               type: 'Past',
  //               );
  // }
  // print(date);
 //}
                return   (model.list[index].approved && model.list[index].alreadyCheckedin && 
                equals(checkoutDate, today) ? ReservationWidget(
                getReservation: model.list[index],
                type: 'Approved',
                ) :
                 SizedBox.shrink());
               },))
               
               )
               ;
  }


}