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


void addReservation(){
  _navigationService.navigateTo(addReservationRoute);
}


void tab1Initialize()async{
  setBusy(true);

  await _graphQlConfiq.getNeccessartyToken();


GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(getReservationsQuery),
      ),
).catchError((e){
      setBusy(false);
      print('Error Occur, ${e.toString()}');
      setErrorMessage(erorr: e.toString());

        }).timeout(Duration(seconds: 5,), onTimeout: (){
           setBusy(false);
          setErrorMessage(erorr: 'Server Timeout');
        },);

   if(result.data == null) {
      setBusy(false);
             print('Result is Null, There is Server Erorr');
             setErrorMessage(erorr: 'Server Error, Please try again');
             
         }else{
            if(result.data['getReservations'] == null){
              print('*************Return Data is Null Exception **************');
             print(result.exception.graphqlErrors);
             print(result.data['getReservations'].toString());
            setErrorMessage(erorr: result.exception.graphqlErrors.toString());

            }else{
               print('Result is not Null,becaue I hve data with me');
                print(result.data['getReservations'].toString());
                print(result.data["getReservations"][0]["booking_channel"]);

 for (var index = 0; index < result.data["getReservations"].length; index++) {
            list.add(
                  GetReservationModel(
                  id: result.data["getReservations"][index]["id"],
                  name: result.data["getReservations"][index]["name"],
                  alreadyCheckedin: result.data["getReservations"][index]["already_checkedin"],
                  bookingChannel: result.data["getReservations"][index]["booking_channel"],
                  checkedinAat: result.data["getReservations"][index]["checkedin_at"],
                  checkInDate: result.data["getReservations"][index]["checkin_date"],
                  checkinUrl: result.data["getReservations"][index]["checkin_url"],
                  approved: result.data["getReservations"][index]["approved"],
                  instrucstions: result.data["getReservations"][index]["instruction"],
                  checkoutDate: result.data["getReservations"][index]["checkout_date"],
                  property: Property(id: result.data["getReservations"][index]["property"]['id'],
                   name: result.data["getReservations"][index]["property"]['name'],),
                   //guest: result.data["getReservations"][index]["guests"],
                  guest: (result.data["getReservations"][index]["guests"] == [] ||
                   result.data["getReservations"][index]["guests"] == null
                  ?  [] : result.data["getReservations"][index]["guests"]
                    ))
              );
      }
            }
      print(list.length);
       setBusy(false);
         }
         // fetchProperties();
}


setErrorMessage({String erorr}){
_errorMessage = erorr;
notifyListeners();
}



void fetchProperties()async{
 loadingOther(true);

GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(getProperties),
      ),
).catchError((e){
      loadingOther(false);
      print('Error Occur, ${e.toString()}');
      setErrorMessage(erorr: e.toString());

        }).timeout(Duration(seconds: 5,), onTimeout: (){
           loadingOther(false);
          setErrorMessage(erorr:'Server Timeout');
        },);

        
   if(result.data == null) {
      loadingOther(false);
             print('Result is Null');
         }else{
            print('Result is not Null');
            if(result.data['getUserProperties'] == null){
              print('*************Return Data is Null Exception **************');
             print(result.exception.graphqlErrors);
            setErrorMessage(erorr: result.exception.graphqlErrors.toString());

            }else{
              for (var index = 0; index < result.data["getUserProperties"].length; index++) {
           
            GetProperties v  =  new GetProperties(
                  email: result.data["getUserProperties"][index]["email"],
                  id: result.data["getUserProperties"][index]["id"],
                  name: result.data["getUserProperties"][index]["name"],
                  propertyPhone: PropertyPhone(
                    completePhone: result.data["getUserProperties"][index]["phone"]['complete_phone'], 
                  countryCode: result.data["getUserProperties"][index]["phone"]['country_code'], 
                  phoneNumber: result.data["getUserProperties"][index]["phone"]['phone_number']),
                  address:
                  Address(street: result.data["getUserProperties"][index]["address"]['street'],
                  country: result.data["getUserProperties"][index]["address"]['country']),
                  terms: result.data["getUserProperties"][index]["terms"],
                    );
           
            _propertlist.add(v);
            
      } 
      }
          loadingOther(false);
         }
}
List<GetProperties> getPropertiesList() {
     return _propertlist;
   }

}