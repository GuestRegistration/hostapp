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


class AddReservationViewModel extends BaseModel{
final CustomFuntion _customFuntion = locator<CustomFuntion>();
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();

String _errorMessage;
String get errorM => _errorMessage;
String _inviteLink;
String get getinviteLink => _inviteLink;
bool linkUIVisisblity = false;
List<GetProperties> _propertlist = List<GetProperties>();
List<GetProperties> get properties => _propertlist;
List<Map<String, dynamic>> _plist = List<Map<String, dynamic>>();
List<Map<String, dynamic>> get gerPlist => _plist;
String selectedProperty;
String _pId, _gName, _gEmail, _bookingC, _checkinD, _checkoutD, _instruction; 

void initialize()async{
  loadingOther(true);
GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(getProperties),
      ),
);
   if(result.data == null) {
      loadingOther(false);
             print('Result is Null');
         }else{
            print('Result is not Null');
            for (var index = 0; index < result.data["getProperties"].length; index++) {
             Map<String, dynamic> map = new Map<String, dynamic>();
             map[result.data["getProperties"][index]["id"]] = result.data["getProperties"][index]["name"];

              gerPlist.add(
                map
              );
            // _propertlist.add(
            GetProperties v  =  new GetProperties(
                  email: result.data["getProperties"][index]["email"],
                  id: result.data["getProperties"][index]["id"],
                  name: result.data["getProperties"][index]["name"],
                  propertyPhone: PropertyPhone(
                    completePhone: result.data["getProperties"][index]["phone"]['complete_phone'], 
                  countryCode: result.data["getProperties"][index]["phone"]['country_code'], 
                  phoneNumber: result.data["getProperties"][index]["phone"]['phone_number']),
                  address:
                  Address(street: result.data["getProperties"][index]["address"]['street'],
                  country: result.data["getProperties"][index]["address"]['country']),
                  terms: result.data["getProperties"][index]["terms"],
                    );
            //   );

            _propertlist.add(v);
             
      }
       loadingOther(false);
         }
}
List<GetProperties> getPropertiesList() {
     return _propertlist;
   }

showMessage({String error}){
_errorMessage = error;
notifyListeners();
}
setLinkUIVisibilty({bool status}){
   linkUIVisisblity = status;
   notifyListeners();
}

authenticateReservation({
  @required String guestName,
  @required String guestEmail,
  @required String bookChanl,
  @required String checkinD,
   @required String checkoutD,
    @required String propertyID,
})async{

  if(guestName.isEmpty){
showMessage(error: 'Guest Name required');

  } else if(guestEmail.isEmpty){
showMessage(error: 'Guest Email required');

  } else if(bookChanl.isEmpty){
showMessage(error: 'Booking Channel required');

  } else if(checkinD.isEmpty){
showMessage(error: 'Check-in Date required');

  }else if(checkoutD.isEmpty){
showMessage(error: 'Check-out Date required');

  }else if(guestEmail != null){

     String check = _customFuntion.validateEmail(guestEmail);

     if(check != null){
        showMessage(error: 'Guest email you entered is invalid');

  }else if(guestName.isNotEmpty && guestEmail.isNotEmpty  && bookChanl.isNotEmpty && checkinD.isNotEmpty && checkoutD.isNotEmpty){
    // print(guestName);
    //  print(guestEmail);
    //  print(bookChanl);
    //  print(checkinD);
    //  print(checkoutD);  
    _pId = propertyID; _gName = guestName; _gEmail = guestEmail; _bookingC = bookChanl;  _checkinD = checkinD; 
    checkoutD = _checkoutD; 
  }
  }

  }
  
  checkInInstrusion({@required String instruction,})async{
    _instruction = instruction;
    //Move to loading Page and send data to API

  }

  //TODO **********************************Adding Reservation Loading ViewModel**********************************
    addReservationAPI()async{
      setBusy(true);
     
    //  GraphQLClient _client = _graphQlConfiq.clientToQuery();
    // QueryResult result = await _client.mutate(
    //   MutationOptions(
    //       documentNode: gql(addReservationQuery),
    //       onError: (error) {
    //         print('******************Error Occur: ${error.toString()}');
    //       },
    //       onCompleted: (data) {
    //         //Note: Don't compare data here or do anything that's pertaining to returened Data, 
    //         //This will definately return even if it's error
           
    //       },
    //       //Later (Rules and document)
    //       variables: <String, dynamic>{
    //         "user_id": Constants().dummyUseriD,
    //         "property_id": _pId,
    //         "name": _gName,
    //         "email": _gEmail,
    //         "booking_channel": _bookingC,
    //         "checkin_date": _checkinD,
    //         "checkout_date": _checkoutD,
    //         "instruction": _instruction,
    //       }
    //   )
    // );
    //  if (result.data == null) {
    //     setBusy(false);
    //          print('Result is Null');
    //      }else{
    //         setBusy(false);
    //         print('Result is not Null');
    //         _inviteLink = result.data['createReservation']['checkin_url'];
    //         setLinkUIVisibilty(status: true); //enable(Make it visible) link Textfield UI
    //         print(result.data['createReservation']['checkin_url']);
    //         // _navigationService.navigateTo(dashboardRoute, arguments: 1); //Show index 1 when lauching dashborad
    //      }

  }
    
}