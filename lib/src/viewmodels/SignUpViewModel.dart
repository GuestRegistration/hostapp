import 'package:flutter/foundation.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/service/dialog_service.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';

//Business Login for SigUp
class SignUpViewModel extends BaseModel{
final AuthService _authService = locator<AuthService>();
final DialogService _dialogService = locator<DialogService>();
final NavigationService _navigationService = locator<NavigationService>();

Future signUp({
    @required String email,
    @required String password,
  }) async {
    setBusy(true);

    var result = await _authService.signUpWithEmail(
        email: email,
        password: password,
       );

    setBusy(false);

    if (result is bool) {
      if (result) {
        _navigationService.navigateTo(dashboardRoute);
      } else {
        await _dialogService.showDialog(
          title: 'Sign Up Failure',
          description: 'General sign up failure. Please try again later',
        );
      }
    } else {
      await _dialogService.showDialog(
        title: 'Sign Up Failure',
        description: result,
      );
    }
  }
}