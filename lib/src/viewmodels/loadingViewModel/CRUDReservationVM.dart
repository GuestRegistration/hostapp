import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:hostapp/src/widget/ShareLinkDialog.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:flutter/material.dart';

class CRUDReservationVM extends BaseModel{
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
final NavigationService _navigationService = locator<NavigationService>();
String _errorMessage;
String get getErrorMessage => _errorMessage;


addReservationAPI({List data, BuildContext context})async{
  String pId = data[0]; //propertyName
    String gName = data[1]; //Address
    String bookingC = data[2]; //PhoneNumber
    String checkinD = data[3]; //Country
    String checkoutD = data[4]; //comtact email
    String instruction = data[5]; //phonce icode
     
    //  print(pId);
    //  print(gName);
    //  print(bookingC);
    //  print(checkinD);
    //  print(checkoutD);
    //   print(instruction);

     setBusy(true);
       await _graphQlConfiq.getNeccessartyToken(); //MuST CALL THIS BEFRE API CALL

     GraphQLClient _client = _graphQlConfiq.clientToQuery();
    QueryResult result = await _client.mutate(
      MutationOptions(
          documentNode: gql(addReservationQuery),
          onError: (error) {
            print('******************Error Occur: ${error.toString()}');
          },
          onCompleted: (data) {
            //Note: Don't compare data here or do anything that's pertaining to returened Data, 
            //This will definately return even if it's error
           
          },
          //Later (Rules and document)
          variables: <String, dynamic>{
            "property_id": pId,
            "name": gName,
            "booking_channel": bookingC,
            "checkin_date": checkinD,
            "checkout_date": checkoutD,
            "instruction": instruction
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
             print('Result is Null and Error Occur');
              setErrorMessage(erorr: 'Server Error Occur, Please try Again');

         }else{

         if(result.data['createReservation'] == null || result.data['createReservation']['checkin_url'] == null){
             setBusy(false);
              print('*************Return Data is Null Exception **************');
             print(result.exception.graphqlErrors);
            setErrorMessage(erorr: result.exception.graphqlErrors.toString());

            }else{
              setBusy(false);
            print(result.data['createReservation']['checkin_url']);
            display(context, result.data['createReservation']['checkin_url']);
           
      }
          
         }

}
display(BuildContext context, String linkUrl){
  return showDialog(
            context: context,
            builder: (BuildContext context) {
              return ShareLinkDialog(link: linkUrl,);});
}

setErrorMessage({String erorr}){
_errorMessage = erorr;
notifyListeners();
}

}