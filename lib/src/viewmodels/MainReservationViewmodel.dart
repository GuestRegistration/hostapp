import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/model/getReservationMode.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';

class MainReservationViewModel extends BaseModel{
     final AuthService _authService = locator<AuthService>();
final NavigationService _navigationService = locator<NavigationService>();
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();

List<GetReservationModel> _list = List<GetReservationModel>();
List<GetReservationModel> get list => _list;
String _errorMessage;
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
}


setErrorMessage({String erorr}){
_errorMessage = erorr;
notifyListeners();
}

}