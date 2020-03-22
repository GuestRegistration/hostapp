import 'package:hostapp/src/model/ReservationCheckinModel.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'dart:io';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/src/widgets/editable_text.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:hostapp/src/service/FirestoreService.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/service/CloudStorageService.dart';
import 'package:hostapp/src/service/dialog_service.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:image_picker/image_picker.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:hostapp/src/model/getPropertiesModel.dart'; 
import 'package:hostapp/src/model/BookingChannelModel.dart'; 


class GuestScreenViewModel extends  BaseModel{
final CustomFuntion _customFuntion = locator<CustomFuntion>();
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
  final NavigationService _navigationService = locator<NavigationService>();
String _apiError;
String get getErrorMessage => _apiError;
ReservationCheckinModel _reservationCheckinModel;
ReservationCheckinModel get reservationData => _reservationCheckinModel;

void initialize({String id,}){
getCheckedIn(id: id);
}


//Get reservation Check-in
getCheckedIn({id})async{
   setBusy(true);
   //await _graphQlConfiq.getNeccessartyToken();
   
GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(getReservationCheckin),
        variables: <String, dynamic>{
            "id": 'APybtA61hyOXRF1Ilsqn'//id,
                        }
      ),
).catchError((e){
      setBusy(false);
      print('Error Occur, ${e.toString()}');
      setErrorMessage(erorr: e.toString());

        }).timeout(Duration(seconds: 5,), onTimeout: (){
           setBusy(false);
          setErrorMessage(erorr:'Server Timeout');
        },);


   if(result.data == null) {
      setBusy(false);
             print('Result is Null');
              setErrorMessage(erorr: 'Server Error, Please try again');
         }else{
            

            if(result.data['getReservationCheckin'] == null){
              print('*************Return Data is Null Exception **************');
              setBusy(false);
             print('Error: ${result.exception.graphqlErrors.toString()}');
            setErrorMessage(erorr: result.exception.graphqlErrors.toString());
             

            }else{
              String val = 'getReservationCheckin'; //Value path to get Data
             ReservationCheckinModel model = new ReservationCheckinModel(

                user: User(
                  phoneNumber: result.data[val]["phone"],
                  name: Name(fname: result.data[val]["first_name"],
                  lname: result.data[val]["last_name"],
                  )),

                  identity: Identity(
                    identity_country: result.data[val]["country"],
                    identity_documentType: result.data[val]["document_type"],
                    identity_documentUrl: result.data[val]["document_url"],
                    identity_userId: result.data[val]["user_id"],
                  ),
                  reservation: Reservation(reservation_name:  result.data[val]["name"], )
             );

             _reservationCheckinModel = model;

             print(_reservationCheckinModel.identity.identity_userId);
      }
          setBusy(false);
         }
}

setErrorMessage({String erorr}){
  _apiError = erorr;
  //print(erorr);
   notifyListeners();
}


//Button clicked to approve User
approveGuest(){

}
}