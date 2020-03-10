import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';

class CRUDpropertyloadingViewmodel extends BaseModel{
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
final NavigationService _navigationService = locator<NavigationService>();
String _errorMessage;
String get getErrorMessage => _errorMessage;

  addPropertyAPI({List data})async{
    String pName = data[0]; //propertyName
    String pAddress = data[1]; //Address
    String phoneN = data[2]; //PhoneNumber
    String country = data[3]; //Country
    String cEmail = data[4]; //comtact email
    String phoneIcode = data[5]; //phonce icode
      String rules = data[6]; //Rules
      String docLink = data[7]; //Rules

      // print('**************** COMING DATA *****************');
      //  print(pName); 
      //   print(pAddress); 
      //   print(phoneN); 
      //   print(country); 
      //   print(cEmail); 
      //    print(rules); 
      //    print(docLink); 
      //    print('**************** *****************');

setBusy(true);

 await _graphQlConfiq.getNeccessartyToken();
    GraphQLClient _client = _graphQlConfiq.clientToQuery();
    QueryResult result = await _client.mutate(
      MutationOptions(
          documentNode: gql(addPropertyQuery),
          onError: (error) {
            print('******************Error Occur: ${error.toString()}');
          },
          onCompleted: (data) {
            //Note: Don't compare data here or do anything that's pertaining to returened Data, This will definately return even if it's error

          },
 //"userID": Constants().dummyUseriD,
          
          variables: <String, dynamic>{
              "name": pName,
              "phone": phoneN,
              "email": cEmail,
              "street": pAddress,
              "rules": rules,
              'phoneCountry_code': phoneIcode,
              "terms": docLink,
              "country": country
          }
      )
    ).catchError((e){
      setBusy(false);
      print('Error Occur, ${e.toString()}');
      setErrorMessage(erorr: e.toString());

        }).timeout(Duration(seconds: 5,), onTimeout: (){
           setBusy(false);
          setErrorMessage(erorr: 'Server Timeout');
        },);


     if (result.data == null) {
             print('Result is Null');
              setBusy(false);
         }else{
            setBusy(false);
            print('Result is not Null');
            print(result.data['createProperty']['id']);
             _navigationService.navigateTo(dashboardRoute, arguments: 1); //Show index 1 when lauching dashborad
         }
  }

updatePropertyAPI({List data})async{

   String propertyID = data[0]; 
    String propertyName = data[1]; 
    String address = data[2];
    String phoneN = data[3];
    String country = data[4]; 
    String contactEmail = data[5]; 
    String phoneIcode = data[6]; 
    String rules = data[7]; 
    String doclink = data[8]; 

    // print(propertyID);
    // print(propertyName);
    // print(address);
    // print(phoneN);
    // print(country);
    // print(contactEmail);
    // print(phoneIcode);
    //   print(rules);
    //     print(doclink);


          setBusy(true);
     GraphQLClient _client = _graphQlConfiq.clientToQuery();
    QueryResult result = await _client.mutate(
      MutationOptions(
          documentNode: gql(updatePropertyQuery),
          onError: (error) {
            print('******************Error Occur: ${error.toString()}');
          },
          onCompleted: (data) {
            //Note: Don't compare data here or do anything that's pertaining to returened Data, 
            //This will definately return even if it's error
           
          },
          //Later (Rules and document)
          variables: <String, dynamic>{
            "user_id": Constants().dummyUseriD,
             "id": propertyID,
              "phone": phoneN,
              "email": contactEmail,
              "street": address,
              "name": propertyName,
              'phoneCountry_code': phoneIcode,
              "country": country,
              "rules": rules,
               "terms": doclink
          }
      )
    ).catchError((e){
      setBusy(false);
      print('Error Occur, ${e.toString()}');
      setErrorMessage(erorr: e.toString());

        }).timeout(Duration(seconds: 5,), onTimeout: (){
           setBusy(false);
          setErrorMessage(erorr: 'Server Timeout');
        },);


     if (result.data == null) {
        setBusy(false);
             print('Result is Null');
         }else{
            setBusy(false);
            print('Result is not Null');
            print(result.data['updateProperty']['name']);
             _navigationService.navigateTo(dashboardRoute, arguments: 1); //Show index 1 when lauching dashborad
         }

}

setErrorMessage({String erorr}){
_errorMessage = erorr;
notifyListeners();
}

}