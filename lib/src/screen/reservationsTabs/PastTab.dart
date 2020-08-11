import 'package:flutter/material.dart';
import 'package:hostapp/src/model/getReservationMode.dart';
import 'package:string_validator/string_validator.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/widget/ReservationWidget.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:hostapp/src/viewmodels/MainReservationViewModel.dart';


class PastTab extends ProviderWidget<MainReservationViewModel> {
  @override
  Widget build(BuildContext context, MainReservationViewModel model) {
    return (model.busy ? Center(
      child: CircularProgressIndicator(
                    strokeWidth: 4,
                          valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                          backgroundColor: AppColor.borderColor,
                    ),
    ) : (model.list == null ? Center(child: Text('You do not have any reservation. '
                  'Click on the ‘’Add icon’’ button below to add one reservation for free.',
                   textAlign: TextAlign.center,
                style:  TextStyle(
                  color: Colors.red,
                  fontStyle: FontStyle.normal,
                  fontSize: 16,
                )
              ),
              )
    : ListView.builder(
            itemCount: model.list.length,
            shrinkWrap: true,
            scrollDirection: Axis.vertical,
            itemBuilder: (BuildContext context , int index){
             return  datechecker(checkoutDate: model.list[index].checkoutDate,
            list:  model.list, index: index);
               },))
               );
  }


  datechecker({String checkoutDate, List<GetReservationModel> list, int index}){

    if(checkoutDate == null){
      print('Checkout>>>>> $checkoutDate');
        return SizedBox.shrink();
    }else{    
  DateTime date = DateTime.now();
  String today = '${date.day}-${date.month}-${date.year}';

  if(equals(checkoutDate, today)){ 
    print('Sane $today => $checkoutDate');
   

    return SizedBox.shrink();
  }else{
    if(!list[index].alreadyCheckedin){ //IF (Have not check-in) is true, Don't show the card
       print('$index \n ${list[index].alreadyCheckedin}');
       return SizedBox.shrink();
    }else{
      return ReservationWidget(
                getReservation: list[index],
                type: 'Past',
                );

    }
   
     
  }
  // print(date);
 }
  }
  
}