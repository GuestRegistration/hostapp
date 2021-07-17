import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/viewmodels/CreateProfileVM.dart';
import 'package:hostapp/src/style/AppText.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:stacked/stacked.dart';
import 'package:hostapp/src/service/navigation_service.dart';

import 'package:hostapp/src/locator.dart';

class CreateProfileLoadingS extends StatefulWidget {
   final String email;
  final String phoneNumber, lastname, name,authuid,phoneCountryCode;

  CreateProfileLoadingS(
      {this.email,
      this.phoneNumber,
      this.phoneCountryCode,
      this.lastname,
      this.name,
      this.authuid,});
      
  @override
  _CreateProfileLoadingSState createState() => _CreateProfileLoadingSState();
}

class _CreateProfileLoadingSState extends State<CreateProfileLoadingS> {

  final NavigationService _navigationService = locator<NavigationService>();
  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<CreateProfileVM>.reactive(
      viewModelBuilder: () => CreateProfileVM(),
      onModelReady: (model) => model.initialize(email: widget.email,
          authuid: widget.authuid, lastname: widget.lastname,
          phoneCode: widget.phoneCountryCode,
          name: widget.name, phoneNumber: widget.phoneNumber, context: context),
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
                    child: Text(AppText.createProfile,
                     textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.grey,
                    fontSize: AppFontSizes.medium,
                    fontWeight: FontWeight.bold
                              ),),
                             
                  ),
                ],
              ),
            ): errorWidget(model)
        )
      ),
    );


  }
  errorWidget(CreateProfileVM model,){
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
                    model.initialize(email: widget.email, 
      authuid: widget.authuid, lastname: widget.lastname, phoneCode: widget.phoneCountryCode,
      context: context,
      name: widget.name, phoneNumber: widget.phoneNumber);
                    model.setErrorMessage(error: null);
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
                   // _navigationService.navigateToandRemove(authRoute);
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(
                        builder: (context) {
                          return CreateProfileLoadingS(
                            phoneNumber:  widget.phoneNumber,
                            phoneCountryCode: widget.phoneCountryCode,
                            name:  widget.name,//name.text,
                            lastname:   widget.lastname,
                            email: widget.email,
                            authuid:  widget.authuid,
                          );
                         
                        },
                      ),
    );
                  },
                        ),

              ],
            );
  }
  
}