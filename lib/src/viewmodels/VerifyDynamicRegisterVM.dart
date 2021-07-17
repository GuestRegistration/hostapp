import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:hostapp/src/widget/ShareLinkDialog.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class VerifyDynamicRegisterVM extends BaseModel{
final NavigationService _navigationService = locator<NavigationService>();
String _errorMessage;
String get getErrorMessage => _errorMessage;


  initialize({var data, BuildContext context})async {

  SharedPreferences prefs = await SharedPreferences.getInstance();
      String getEnteredEmail =  prefs.getString(Constants.enteredEmail,);
    final FirebaseAuth user = FirebaseAuth.instance;
    print('***** FROM DYNAMIC LINK EnteredEmail is $getEnteredEmail');
    bool validLink = await user.isSignInWithEmailLink(data.toString());
    if (validLink) {
      try {
        UserCredential  authResult = await user.signInWithEmailLink(email: getEnteredEmail, emailLink: data.toString());
       if(authResult.user.email != null){
         //Move to create Profile.
         _navigationService.navigateToandRemove(passwordLessRoute);
       }else{
         //Failed
         setErrorMessage(erorr: 'Failed while Register.');
       }
      } catch (e) {
        print(e);
        
      }
    }
  }

  setErrorMessage({String erorr}){
_errorMessage = erorr;
notifyListeners();
}

}