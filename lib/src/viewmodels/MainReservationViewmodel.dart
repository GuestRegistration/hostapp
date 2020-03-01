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

void addReservation(){
  _navigationService.navigateTo(addReservationRoute);
}


void tab1Initialize()async{
  setBusy(true);
GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        documentNode: gql(getReservationsQuery),
      ),
);
   if(result.data == null) {
      setBusy(false);
             print('Result is Null');
         }else{
            print('Result is not Null');
            for (var index = 0; index < result.data["getReservations"].length; index++) {
            list.add(
                  GetReservationModel(
                  id: result.data["getReservations"][index]["id"],
                  name: result.data["getReservations"][index]["name"],
                  alreadyCheckedin: result.data["getReservations"][index]["already_checkedin"],
                  bookingChannel: result.data["getReservations"][index]["booking_channel"],
                  checkedinAat: result.data["getReservations"][index]["checkedin_at"],
                  checkinUrl: result.data["getReservations"][index]["checkin_url"],
                  checkoutDate: result.data["getReservations"][index]["checkout_date"],
                    )
              );
      }
      print(list.length);
       setBusy(false);
         }
}
}