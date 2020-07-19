import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:hostapp/src/util/constants.dart';

class SignwithEmailScreenViewModel extends BaseModel{

String _errorMessage;
String get errorM => _errorMessage;
int _errorMessageType;
int get errorType => _errorMessageType;

 final CustomFuntion _customFuntion = locator<CustomFuntion>();
 final FirebaseAuth _auth = FirebaseAuth.instance;

 signIn(String email)async{
if(email.isEmpty){
showMessage(error: 'Email required');
  
  } else if(email != null){
    print('Am here');
     String check = _customFuntion.validateEmail(email);
    
     if(check != null){
        showMessage(error: 'The email you entered is invalid');

       }else if(email.isNotEmpty){
         setBusy(true);
     bool sent = await _sendLinkToProvidedEmail(providedEmail: email);
     if(sent){
       _customFuntion.entredEmail(email); //save enteredEmail
       showMessage(error: 'Link sent to $email,', type: 1);
     }else{
       showMessage(error: 'Not Send', type: 0);
     }
  
  }
  }
 }
 showMessage({String error, int type}){
_errorMessage = error;
_errorMessageType = type;
notifyListeners();
}

Future<bool> _sendLinkToProvidedEmail({String providedEmail}) async {
  try {
  _auth.sendSignInWithEmailLink(
    email: providedEmail,
    androidInstallIfNotAvailable: true,
    androidMinimumVersion: '18',
        androidPackageName: 'com.macaulaygidado.hostapp',
        handleCodeInApp: true,
        iOSBundleID: 'com.macaulaygidado.hostapp',
        url: Constants.passwordlessDynamicUrl
  );
 } catch (e) {
      return false;
    }
   
    return true;
  
}
 
}