import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/model/getReservationMode.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/model/getPropertiesModel.dart';

class MainReservationViewModel extends BaseModel{
     final AuthService _authService = locator<AuthService>();
final NavigationService _navigationService = locator<NavigationService>();
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();

List<GetReservationModel> _list = List<GetReservationModel>();
List<GetReservationModel> get list => _list;
String _errorMessage;
List<GetProperties> _propertlist = List<GetProperties>();
List<GetProperties> get properties => _propertlist;
String get getErrorMessage => _errorMessage;
String firstId, firstName;


void addReservation(){
_navigationService.navigateTo(addReservationRoute);
 //_graphQlConfiq.getUserToken(); //DEBUG ONLY
}


void tab1Initialize()async{
//   setBusy(true);
fetchProperties();
}


setErrorMessage({String erorr}){
_errorMessage = erorr;
notifyListeners();
}



void fetchProperties()async{
    setBusy(true);
  await _graphQlConfiq.getNeccessartyToken();

GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(getProperties),
      ),
).catchError((e){
      setBusy(false);
      print('Error Occur, ${e.toString()}');
      setErrorMessage(erorr: e.toString());

        }).timeout(Duration(seconds: 10,), onTimeout: (){
           setBusy(false);
          setErrorMessage(erorr: 'Server Timeout');
        },);

   if(result.data == null) {
      setBusy(false);
             print('Result is Null');
             print(result.exception);
              setErrorMessage(erorr: result.exception.graphqlErrors.toString());
              
         }else{
           if(result.data['getUserProperties'] == null){
             setBusy(false);
              print('*************Return Data is Null Exception **************');
              print(result.exception.graphqlErrors);
             setErrorMessage(erorr: result.exception.graphqlErrors.toString());

            }else{
               print('Result is not Null,becaue I have data with me');
               if(result.data["getUserProperties"].length == 0){
                 print('Am Empty');
                 _propertlist = null;
                 firstId = null;

               }else{
                 print('Am Getting response');
for (var index = 0; index < result.data["getUserProperties"].length; index++) {
  firstId = result.data["getUserProperties"][0]["id"];
  firstName = result.data["getUserProperties"][0]["name"];
            _propertlist.add(
                  GetProperties(
                  email: result.data["getUserProperties"][index]["email"],
                  id: result.data["getUserProperties"][index]["id"],
                  name: result.data["getUserProperties"][index]["name"],
                  rulesText: result.data["getUserProperties"][index]["rules"],
                  propertyPhone: PropertyPhone(
                  completePhone: result.data["getUserProperties"][index]["phone_meta"]['complete_phone'], 
                  countryCode: result.data["getUserProperties"][index]["phone_meta"]['country_code'], 
                  phoneNumber: result.data["getUserProperties"][index]["phone_meta"]['phone_number']),
                  address:
                  Address(street: result.data["getUserProperties"][index]["address"]['street'],
                  country: result.data["getUserProperties"][index]["address"]['country']),
                  terms: result.data["getUserProperties"][index]["terms"],
                    )
              );
             // print( result.data["getProperties"][index]["rules"]);
      } 
               }
               
      
      }
       setBusy(false);
       propertyReservations(propertyID: firstId);
         }
}

List<GetProperties> getPropertiesList() {
     return _propertlist;
   }

propertyReservations({String propertyID})async{
  print(_list.length);
  if(propertyID == null){
    _list = null;
  }else{
    if(_list.isNotEmpty){
      print('******************Am not Empty Jare************8');
      _list.clear();
    }
     String v = 'getPropertyReservations';
     loadingOther(true);

  await _graphQlConfiq.getNeccessartyToken();

GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(getReservationsQuery),
        variables: {
          'property_id' : propertyID
        }
      ),
).catchError((e){
      loadingOther(false);
      print('Error Occur, ${e.toString()}');
      setErrorMessage(erorr: e.toString());

        }).timeout(Duration(seconds: 10,), onTimeout: (){
           loadingOther(false);
          setErrorMessage(erorr: 'Server Timeout');
        },);

   if(result.data == null) {
      loadingOther(false);
             print('Result is Null, There is Server Erorr');
             setErrorMessage(erorr: 'Server Error, Please try again');
             
         }else{
            if(result.data[v] == null){
              print('*************Return Data is Null Exception **************');
             print(result.exception.graphqlErrors);
             print(result.data[v].toString());
            setErrorMessage(erorr: result.exception.graphqlErrors.toString());

            }else{
               print('Result is not Null,becaue I hve data with me');
                //print(result.data['getUserReservations'].toString());
               // print(result.data["getUserReservations"][0]["booking_channel"]);
                if(result.data[v].length == 0){
                 print('Am Empty');
                 _list = null;

               }else{
                  for (var index = 0; index < result.data[v].length; index++) {
            _list.add(
                  GetReservationModel(
                  id: result.data[v][index]["id"],
                  name: result.data[v][index]["name"],
                  alreadyCheckedin: result.data[v][index]["already_checkedin"],
                  bookingChannel: result.data[v][index]["booking_channel"],
                  checkedinAat: result.data[v][index]["checkedin_at"],
                  checkInDate: result.data[v][index]["checkin_date"],
                  checkinUrl: result.data[v][index]["checkin_url"],
                  approved: result.data[v][index]["approved"],
                  instrucstions: result.data[v][index]["instruction"],
                  checkoutDate: result.data[v][index]["checkout_date"],
                  property: Property(id: result.data[v][index]["property"]['id'],
                   name: result.data[v][index]["property"]['name'],),
                    )
              );
             
      }}
            }
       loadingOther(false);
         }

  }
 
}
movetoSettings(){
   _navigationService.navigateTo(settingsRoute);
}

}