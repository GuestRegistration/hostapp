import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/viewmodels/CheckUserModel.dart';
import 'package:hostapp/src/style/AppText.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:provider_architecture/provider_architecture.dart';

class CheckUserScreen extends StatefulWidget {
  final String userEmail, userid;
  CheckUserScreen({this.userEmail, this.userid});

  @override
  _CheckUserScreenState createState() => _CheckUserScreenState();
}

class _CheckUserScreenState extends State<CheckUserScreen> {
  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<CheckUserModel>.withConsumer(
      viewModel: CheckUserModel(),
      onModelReady: (model) => model.initialize(widget.userEmail, context, widget.userid),
      builder: (context, model, child) =>
          Scaffold(
        body:  (model.getErrorMessage == null || model.busy ?
                   Center(
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
                    child: Text(AppText.checkinUser,
                     textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.grey,
                    fontSize: AppFontSizes.medium,
                    fontWeight: FontWeight.bold
                              ),),
                             
                  ),
                ],
              ),
            ): errorWidget(model, widget.userEmail)
        )
      ),
    );
  }
  errorWidget(CheckUserModel model, String data){
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
                    model.initialize(widget.userEmail, context, widget.userid);
                    model.setErrorMessage(erorr: null);
                  },
                        ),
              ],
            );
  }
  
}