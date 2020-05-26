import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppText.dart';
import 'package:hostapp/src/viewmodels/VerifyDynamicRegisterVM.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/navigation_service.dart';


class VerifyDynamicRegister extends StatefulWidget {
    var data;

   VerifyDynamicRegister({this.data});
  @override
  _VerifyDynamicRegisterState createState() => _VerifyDynamicRegisterState();
}

class _VerifyDynamicRegisterState extends State<VerifyDynamicRegister> {
  final NavigationService _navigationService = locator<NavigationService>();

  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<VerifyDynamicRegisterVM>.withConsumer(
      viewModel: VerifyDynamicRegisterVM(),
      onModelReady: (model) => model.initialize(data: widget.data, context: context),
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
            ): errorWidget(model, widget.data)
        )
      ),
    );
  }
   errorWidget(VerifyDynamicRegisterVM model, List<String> data){
    return Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
               Container(
                  height: 60,
                  width: 60,
                  child: Icon(Icons.cancel, size: 70, color: Colors.red,)
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
                    model.initialize(data: widget.data, context: context);
                    model.setErrorMessage(erorr: null);
                  },
                        ),

                        //***GO BACK BUTTON */
                        verticalSpaceMedium,
                        verticalSpaceMedium,
                GestureDetector(child: Padding(
                    padding: const EdgeInsets.all(1.0),
                    child: Container(
                      width: 150,
                      height: 50,
                      child: Material(
                      child: Center(
                          child: Text('Back',
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
                    Navigator.pop(context);
                    _navigationService.navigateToandRemove(authRoute);
                  },
                        ),
              ],
            );
  }
  
}