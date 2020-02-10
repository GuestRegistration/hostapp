import 'package:flutter/foundation.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/service/dialog_service.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';

class LoginViewModel extends BaseModel{
  final AuthService _authService = locator<AuthService>();
final DialogService _dialogService = locator<DialogService>();
final NavigationService _navigationService = locator<NavigationService>();


 Future login({@required String email, @required String password})async{
     setBusy(true); //For Loading..
       var result = await _authService.loginWithEmail(
         email: email,
         password: password
       );
       setBusy(false);

       if(result is bool){
         if(result){
           _navigationService.navigateTo(dashboardRoute);
         }else{
            await _dialogService.showDialog(
              title: 'Login Failure',
              description: 'Login fail, Please try again later',

            );
         }
       }else {
         await _dialogService.showDialog(
          title: 'Login Failure',
          description: result,
         );
       }
 }

 void navigateToSignUp() {
    _navigationService.navigateTo(signUpViewRoute);
  }

}