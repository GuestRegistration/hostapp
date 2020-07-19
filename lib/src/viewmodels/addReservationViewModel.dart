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
import 'package:flutter/material.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:hostapp/src/model/getPropertiesModel.dart'; 
import 'package:hostapp/src/model/BookingChannelModel.dart'; 



class AddReservationViewModel extends BaseModel{
final CustomFuntion _customFuntion = locator<CustomFuntion>();
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
  final NavigationService _navigationService = locator<NavigationService>();


String _errorMessage;
String get errorM => _errorMessage;
String _inviteLink;
String get getinviteLink => _inviteLink;
bool linkUIVisisblity = false;
List<GetProperties> _propertlist = List<GetProperties>();
List<GetProperties> get properties => _propertlist;
List<BookingChannelModel> _bookingList = List<BookingChannelModel>();
List<BookingChannelModel> get bookingList => _bookingList;
List<Map<String, dynamic>> _plist = List<Map<String, dynamic>>();
List<Map<String, dynamic>> get gerPlist => _plist;
String selectedProperty;
String _pId, _gName, _gEmail, _bookingC, _checkinD, _checkoutD, _instruction; 
String _apiError;
String get getErrorMessage => _apiError;

void initialize()async{
  loadingOther(true);
await _graphQlConfiq.getNeccessartyToken();

GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(getProperties),
      ),

).catchError((e){
      setBusy(false);
      print('Error Occur, ${e.toString()}');
      setApiError(erorr: e.toString());

        }).timeout(Duration(seconds: 10,), onTimeout: (){
           setBusy(false);
          setApiError(erorr: 'Server Timeout');
        },);

   if(result.data == null) {
      loadingOther(false);
             print('Result is Null');
         }else{
            print('Result is not Null');
            if(result.data['getUserProperties'] == null){
              print('*************Return Data is Null Exception **************');
             print(result.exception.graphqlErrors);
            setApiError(erorr: result.exception.graphqlErrors.toString());

            }else{
              if(result.data["getUserProperties"].length == 0){
                 print('Am Empty');
                 _propertlist = null;

               }else{
for (var index = 0; index < result.data["getUserProperties"].length; index++) {   
            GetProperties v  =  new GetProperties(
                  email: result.data["getUserProperties"][index]["email"],
                  id: result.data["getUserProperties"][index]["id"],
                  name: result.data["getUserProperties"][index]["name"],
                  propertyPhone: PropertyPhone(
                    completePhone: result.data["getUserProperties"][index]["phone_meta"]['complete_phone'], 
                  countryCode: result.data["getUserProperties"][index]["phone_meta"]['country_code'], 
                  phoneNumber: result.data["getUserProperties"][index]["phone_meta"]['phone_number']),
                  address:
                  Address(street: result.data["getUserProperties"][index]["address"]['street'],
                  country: result.data["getUserProperties"][index]["address"]['country']),
                  terms: result.data["getUserProperties"][index]["terms"],
                    );
           
            _propertlist.add(v);
            
      } 
               }
              
      }
          loadingOther(false);
         }

           getBookinChannel(); //fetch list of reservation  
       
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
  @required String bookChanl,
  @required String checkinD,
   @required String checkoutD,
    @required String propertyID,
})async{

  if(guestName.isEmpty){
showMessage(error: 'Guest Name required');

//   } else if(guestEmail.isEmpty){
// showMessage(error: 'Guest Email required');

  } else if(bookChanl.isEmpty){
showMessage(error: 'Booking Channel required');

  } else if(checkinD.isEmpty){
showMessage(error: 'Check-in Date required');

  }else if(checkoutD.isEmpty){
showMessage(error: 'Check-out Date required');

  }else if(guestName.isNotEmpty && bookChanl.isNotEmpty && checkinD.isNotEmpty && checkoutD.isNotEmpty && errorM == null){
     
    _pId = propertyID; _gName = guestName; _bookingC = bookChanl;  _checkinD = checkinD; 
    _checkoutD = checkoutD; 

//AM USING LIST SO THAT THE DAT Won't be null when moving to another screen with the same Viewmodel.
    List<String> transfetData = List<String>();
     transfetData.add(_pId);
     transfetData.add(_gName);
     transfetData.add(_bookingC);
     transfetData.add(_checkinD);
     transfetData.add(_checkoutD); 
    
     //TODO SEND RESERVATION DATA TO NEXT SCREEEN
   _navigationService.navigateTo(reservationInstructionRoute, arguments: transfetData); 
  }
  
  }

  checkInInstrusion({@required String instruction, @required List moved})async{
    _instruction = instruction;
    //Move to loading Page and send data to API

    //  print(_pId);
    //  print(_gName);
    //  print(_bookingC);
    //  print(_checkinD);
    //  print(_checkoutD);
    //   print(_instruction);
      moved.add(_instruction);
        //TODO SEND RESERVATION DATA TO LOADING SCREEN THEN SEND TO SERVER
   _navigationService.navigateToandRemove(addReservationloadingRoute, arguments: moved); 

  }


  getBookinChannel()async{
      loadingOther2(true);
GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(getBookingChannel),
      ),
);
   if(result.data == null) {
      loadingOther2(false);
             print('Result is Null');
         }else{
            print('Result is not Null');

            if(result.data['getBookingChannels'] == null){
              print('*************Return Data is Null Exception **************');
             print(result.exception.graphqlErrors);
            setApiError(erorr: result.exception.graphqlErrors.toString());

            }else{
              print('Result is not Null');
            for (var index = 0; index < result.data["getBookingChannels"].length; index++) {
             
            BookingChannelModel v =  new BookingChannelModel(
                  code: result.data["getBookingChannels"][index]["channel_code"],
                  name: result.data["getBookingChannels"][index]["channel_name"], );
            _bookingList.add(v);
      }
       loadingOther2(false); 
      }
          loadingOther(false);
         }
}

List<BookingChannelModel> getBookingList() {
     return _bookingList;
  }

  setApiError({String erorr}){
  _errorMessage = erorr;
  print(erorr);
   notifyListeners();
}

   
} 