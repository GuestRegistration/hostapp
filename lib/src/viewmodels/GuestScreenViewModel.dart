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
String _simpleError;
String get getSimpleMessage => _simpleError;
ReservationCheckinModel _reservationCheckinModel;
ReservationCheckinModel get reservationData => _reservationCheckinModel;
 int _errorType = 0;
 int get getErrorType => _errorType;

void initialize({String id,}){
  print('Rservation ID is $id');
getCheckedIn(id: id);
}


//Get reservation Check-in
getCheckedIn({id})async{
   setBusy(true);
   await _graphQlConfiq.getNeccessartyToken();
GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(getReservationCheckin),
        variables: <String, dynamic>{
            "id": id,
          }
      ),
).catchError((e){
      setBusy(false);
      print('Error Occur, ${e.toString()}');
      setErrorMessage(erorr: e.toString());

        }).timeout(Duration(seconds: 10,), onTimeout: (){
           setBusy(false);
          setErrorMessage(erorr:'Server Timeout', type: 0);
        },);


   if(result.data == null) {
      setBusy(false);
             print('Result is Null');
              setErrorMessage(erorr: 'Server Error, Please try again',  type: 0);
         }else{           
            if(result.data['getReservationCheckin'] == null){
              print('*************Return Data is Null Exception **************');
              setBusy(false);
             print('Error: ${result.exception.graphqlErrors.toString()}');
            setErrorMessage(erorr: result.exception.graphqlErrors.toString(),  type: 0);
             
            }else{
              
             String val = 'getReservationCheckin'; //Value path to get Data
             ReservationCheckinModel model = new ReservationCheckinModel(

                user: User(
                  id: result.data[val]['user']['id'],
                  phone: PhoneModel(
              countryCode: result.data[val]['user']['phone']['country_code'],
              phoneNumber: result.data[val]['user']['phone']['phone_number'],
              completePhone: result.data[val]['user']['phone']['complete_phone'],),
                  name: Name(fname: result.data[val]['user']['name']["first_name"],
                  lname: result.data[val]['user']['name']["last_name"],
                  ),
                  email: result.data[val]['user']['email']),
                  identity: Identity(
                    identity_country: result.data[val]['identity']["country"],
                    identity_documentType: result.data[val]['identity']["document_type"],
                    identity_documentUrl: result.data[val]['identity']["document_url"],
                    identity_userId: result.data[val]['identity']["user_id"],
                  ),
                  reservation: Reservation(reservation_name:  result.data[val]['reservation']["name"], )
             );
             _reservationCheckinModel = model;
      }
          setBusy(false);
         }
}

setErrorMessage({String erorr, int type}){
  _apiError = erorr;
  _errorType = type;
  //print(erorr);
   notifyListeners();
}
simpleErrorMesage({String erorr, int type}){
 _simpleError = erorr;
  _errorType = type;
   notifyListeners();
}


//Button clicked to approve User and pass reservation ID
approveGuest({String id})async{
 
loadingOther(true);
 await _graphQlConfiq.getNeccessartyToken();
GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.mutate(
   MutationOptions(
        documentNode: gql(approveReservation),
        variables: <String, dynamic>{
            "id": id,
          }
      ),
      
).catchError((e){
      loadingOther(false);
      print('Error Occur, ${e.toString()}');
      simpleErrorMesage(erorr: e.toString());

        }).timeout(Duration(seconds: 10,), onTimeout: (){
           loadingOther(false);
          simpleErrorMesage(erorr:'Server Timeout',  type: 0);
        },);


   if(result.data == null) {
      setBusy(false);
             print('Result is Null');
              simpleErrorMesage(erorr: 'Server Error, Please try again');
               loadingOther(false);
         }else{           
            if(result.data['getReservationCheckin'] == null){
              print('*************Return Data is Null Exception **************');
              loadingOther(false);
             print('Error: ${result.exception.graphqlErrors.toString()}');
            simpleErrorMesage(erorr: result.exception.graphqlErrors.toString(),  type: 0);
             
            }else{
            //  String val = 'approveReservationCheckin'; //Value path to get Data
            //  print(result.data[val]['already_checkedin']);
            //  print(result.data[val]['approved']);
            //  print(result.data[val]['approved_at']);
             simpleErrorMesage(erorr: 'Guest Approved',  type: 1);
      }
          loadingOther(false);
         }
}

gotoDashboard(){
  _navigationService.navigateTo(dashboardRoute); //GOTO DASBHOARD..
}

test(){
  loadingOther(true);
}
}
