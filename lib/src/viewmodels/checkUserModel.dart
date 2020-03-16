import 'dart:io';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/src/widgets/editable_text.dart';
import 'package:hostapp/src/locator.dart';
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

class CheckUserModel extends BaseModel{
    final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
final NavigationService _navigationService = locator<NavigationService>();
String _errorMessage;
String get getErrorMessage => _errorMessage;


void initialize(String userEmail, BuildContext context)async{
  setBusy(true);
  //Those two code below, will firstly launch before their next line, We have use await to delay.
  await _graphQlConfiq.getFromServerClientToken();
  await _graphQlConfiq.getNeccessartyToken();

    GraphQLClient _client = _graphQlConfiq.clientToQuery();
                        QueryResult result = await _client.mutate(
                          MutationOptions(
                            documentNode: gql(selectdata),
                            //document: selectdata,
                            variables: {
                              'email': userEmail,
                            },
                          ),
                        ).catchError((e){
                            setBusy(false);
                            setErrorMessage(erorr: e.toString());

                            }).timeout(Duration(seconds: 5,), onTimeout: (){
                               setBusy(false);
                              setErrorMessage(erorr: 'Server Timeout');
                            },);

                        if (result.data["getUserByEmail"] == null) {
                          print("******* THIS IS NEW USER*************");
                          //Move to LoginPage
                          Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => LoginPage(
                                        existingemail: userEmail.toString(),
                                      )));
                          
                        } else {
                           print("******* THIS IS EXISTING USER*************");
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