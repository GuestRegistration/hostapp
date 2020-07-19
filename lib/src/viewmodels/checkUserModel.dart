import 'dart:io';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/src/widgets/editable_text.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/screen/CreateProfileScreen.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:hostapp/src/service/FirestoreService.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/screen/login_page.dart';
import 'package:hostapp/src/screen/AddPropertyLoadingScreen.dart';
import 'package:hostapp/src/screen/Dashboard.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/model/createUserModel.dart';
import 'package:hostapp/src/util/customFunctions.dart';

class CheckUserModel extends BaseModel{
    final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
final NavigationService _navigationService = locator<NavigationService>();
String _errorMessage;
String get getErrorMessage => _errorMessage;
   final CustomFuntion _customFuntion = locator<CustomFuntion>();


void initialize(String userEmail, BuildContext context, String userID, String fname, String lname)async{
  setBusy(true);
  //Those two code below, will firstly launch before their next line, We have use await to delay.
  await _graphQlConfiq.getFromServerClientToken();
  await _graphQlConfiq.getNeccessartyToken();

    GraphQLClient _client = _graphQlConfiq.clientToQuery();
                        QueryResult result = await _client.mutate(
                          MutationOptions(
                            documentNode: gql(selectdata),
                            variables: {
                              'email': userEmail,
                            },
                          ),
                        ).catchError((e){
                            setBusy(false);
                            setErrorMessage(erorr: e.toString());

                            }).timeout(Duration(seconds: 10,), onTimeout: (){
                               setBusy(false);
                              setErrorMessage(erorr: 'Server Timeout');
                            },);

     if (result.data == null) {
               setBusy(false);
               print(result.exception.graphqlErrors);
               //print(result.exception.clientException);
             print('Result is Null and Error Occur');
             setErrorMessage(erorr: result.exception.graphqlErrors.toString());

     }else if (result.data["getUserByEmail"] == null) {
                          print("******* Already register but hasn't create a profile*************");
                          //Move to LoginPage
                          Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => CreateProfileScreen(
                                        userEmail: userEmail.toString(),
                                        userid: userID.toString(),
                                      )));
                          
                        } else {
                          //Fetch details and store data.
                           String v = 'getUserByEmail';
                          CreateUserModel createUserModel = new CreateUserModel(
                            email: result.data[v][0]['email'],
                            id:result.data['getUserByEmail'][0]['id'],
                            name: Name(fName: result.data[v][0]['name']['first_name'],
                              lName: result.data[v][0]['name']['last_name'],),
                              phone: Phone(
                                completePhone: result.data[v][0]['phone_meta']['complete_phone'],
                              countryCode: result.data[v][0]['phone_meta']['country_code'],
                              phoneNumber: result.data[v][0]['phone_meta']['phone_number'],)
                              );
                              
                                //Save details to Secure Storage
                                _customFuntion.saveUserData(
                                  email: createUserModel.email,
                                  fname: createUserModel.name.fName,
                                  userID: createUserModel.id,
                                  lname: createUserModel.name.lName,
                                  phoneN: createUserModel.phone.phoneNumber,
                                  completePhone: createUserModel.phone.completePhone,
                                  phoneCode: createUserModel.phone.countryCode,
                                );
                          
                          //Move to Dashboard
                          Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => Dashboard(showIndex: 0,
                                      )));
                        }
}


setErrorMessage({String erorr}){
_errorMessage = erorr;
notifyListeners();
}




}