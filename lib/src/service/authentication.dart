import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/model/UserDetails.dart';
import 'package:hostapp/src/screen/Dashboard.dart';
import 'package:hostapp/src/service/FirestoreService.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/util/customFunctions.dart';

class AuthService{

final FirebaseAuth _auth = FirebaseAuth.instance;
var customlogic = locator<CustomFuntion>(); //Creating an injection of CustomFunction class

final FirebaseAuth _firebaseAuth = FirebaseAuth.instance;
  final FirestoreService _firestoreService = locator<FirestoreService>();

  UserDetails _currentUser;
  UserDetails get currentUser => _currentUser;

  Future loginWithEmail({
    @required String email,
    @required String password,
  }) async {
    try {
      var authResult = await _firebaseAuth.signInWithEmailAndPassword(
        email: email,
        password: password,
      );
      await _populateCurrentUser(authResult.user);
      return authResult.user != null;
    } catch (e) {
      return e.message;
    }
  }

  Future signUpWithEmail({
    @required String email,
    @required String password,
  }) async {
    try {
      var authResult = await _firebaseAuth.createUserWithEmailAndPassword(
        email: email,
        password: password,
      );

      // create a new user profile on firestore
      _currentUser = UserDetails(
        id: authResult.user.uid,
        email: email,
      );

      await _firestoreService.createUser(_currentUser);

      return authResult.user != null;
    } catch (e) {
      return e.message;
    }
  }

  Future<bool> isUserLoggedIn() async {
    var user = await _firebaseAuth.currentUser();
    await _populateCurrentUser(user);
    return user != null;
  }

  Future _populateCurrentUser(FirebaseUser user) async {
    if (user != null) {
      _currentUser = await _firestoreService.getUser(user.uid);
    }
  }

  //Sign Out
   Future signOut()async{
     try{
        return await _auth.signOut();

     }catch(e){
    print('******signInAnonymous ERROR ${e.toString()}');
    return null;
     }
   }


}

//   Future<bool> loginWithEmailLink({String mail})async{

//   try {
//      _auth.sendSignInWithEmailLink(
//         email: mail,
//         url: dynamicLink, //Constant link from constant file
//         androidInstallIfNotAvailable: true,
//         androidMinimumVersion: '18',
//         androidPackageName: 'net.harbdollar.hostapp',
//         handleCodeInApp: true,
//         iOSBundleID: 'net.harbdollar.hostapp');

//   } catch (e) {
//     return false;
//   }
//   print(mail + " sent");
//   return true;
// }


// Future<AuthResult> signInWithEmailAndLink({String email, link, BuildContext context}) async {
//   final FirebaseAuth user = FirebaseAuth.instance;
//   bool validLink = await user.isSignInWithEmailLink(link);
//   if (validLink) {
//     try {
//       await user.signInWithEmailAndLink(email: email, link: link);
//       MyInjection().customlogic.saveUserID(userId: user.toString()); //save into local data
//       Navigator.pushReplacement( context,
//           MaterialPageRoute(builder: (context) => Dashboard()));
//     } catch (e) {
//       print(e);
// //customlogic.dialog(context: context, message: e.toString(), title: 'Error');
//     }
//   }