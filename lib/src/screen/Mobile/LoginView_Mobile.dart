import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/login_view.dart';
import 'package:hostapp/src/viewmodels/LoginViewModel.dart';
import 'package:provider_architecture/provider_widget.dart';

class LoginViewPortrait extends ProviderWidget<LoginViewModel> {
  @override
  Widget build(BuildContext context, LoginViewModel model) {
    print('AM Prostrait***************');
    return Scaffold(
      body: LoginUI(model),
    );
  }
}

class LoginViewLandscape extends ProviderWidget<LoginViewModel> {
  @override
  Widget build(BuildContext context, LoginViewModel model) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Container(child: 
     SingleChildScrollView(
         child: LoginUI(model),
     ) 
    ,),
      ),
      
    );
  }
}