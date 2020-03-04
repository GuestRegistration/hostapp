import 'package:flutter/material.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppText.dart';
import 'package:hostapp/src/viewmodels/AddReservationViewModel.dart';
import 'package:provider_architecture/provider_architecture.dart';


class AddReservationLoadingWidget extends StatefulWidget {

  @override
  _AddReservationLoadingWidgetState createState() => _AddReservationLoadingWidgetState();
}

class _AddReservationLoadingWidgetState extends State<AddReservationLoadingWidget> {
  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<AddReservationViewModel>.withConsumer(
      viewModel: AddReservationViewModel(),
      onModelReady: (model) => model.addReservationAPI(),
      builder: (context, model, child) =>
          Scaffold(
        body:  Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
               Container(
                  height: 60,
                  width: 60,
                  child: CircularProgressIndicator(
                  strokeWidth: 8,
                        valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                        backgroundColor: AppColor.borderColor,
                  ),
                ),
                SizedBox(height: 30,),
                Center(
                  child: Text(AppText.addPHoldOnReservation,
                   textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.grey,
                  fontSize: AppFontSizes.medium,
                  fontWeight: FontWeight.bold
                            ),),
                           
                ),
              ],
            ),
          )
      ),
    );
  }
}