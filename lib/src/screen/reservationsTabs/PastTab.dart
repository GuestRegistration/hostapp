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
    return (model.list == null ? Center(
      child: CircularProgressIndicator(
                    strokeWidth: 4,
                          valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                          backgroundColor: AppColor.borderColor,
                    ),
    ) : ListView.builder(
            itemCount: model.list.length,
            shrinkWrap: true,
            scrollDirection: Axis.vertical,
            itemBuilder: (BuildContext context , int index){
              
              if(model.list.length == 0){
              return Center(child: Text('You do not have any reservation. '
                  'Click on the ‘’+ icon’’ button below to add one reservation for free.',
                style:  TextStyle(
                  color: Colors.red,
                  fontStyle: FontStyle.normal,
                  fontSize: 16,
                )
              ),
              );
            } //model.list[index].checkoutDate, model.list, index
            return  datechecker(checkoutDate: model.list[index].checkoutDate,
            list:  model.list, index: index);
               },))
               ;
  }


  datechecker({String checkoutDate, List<GetReservationModel> list, int index}){
    if(checkoutDate == null){
        return SizedBox.shrink();
    }else{
      //print('Server => $checkoutDate');    
  DateTime date = DateTime.now();
  String today = '${date.day}-${date.month}-${date.year}';
  //print('Me => $today');

  if(equals(checkoutDate, today)){
   // print('Sane $today => $checkoutDate');

    return SizedBox.shrink();
  }else{
     return ReservationWidget(
                getReservation: list[index],
                type: 'Past',
                );
  }
  // print(date);
 }
  }
  
}