import 'package:hostapp/src/model/getReservationMode.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:hostapp/src/util/customFunctions.dart';


class SingleReservationDetailsViewModel extends BaseModel{
  final CustomFuntion _customFuntion = locator<CustomFuntion>();
  final GraphQLConfiguration _graphQlConfiq = locator<GraphQLConfiguration>();
  final NavigationService _navigationService = locator<NavigationService>();

  
String _errorMessage;
String get errorM => _errorMessage;
String _inviteLink;
String get getinviteLink => _inviteLink;
bool linkUIVisisblity = false;
GetReservationModel reservationModel;
GetReservationModel get getReservationModel => getReservationModel;
String _apiError;
String get getErrorMessage => _apiError;
bool appoved = false;
String bookingC,  chekinD,  checkoutD,  invitelink, 
 propertyName,  guestName,  instructions;

void initialize({String id, })async{
  setBusy(true);
await _graphQlConfiq.getNeccessartyToken();
     String v = 'getReservation';

GraphQLClient _client = _graphQlConfiq.clientToQuery();
QueryResult result = await _client.query(
   QueryOptions(
        document: gql(getSingleReservationDetails),
        variables: {
          'reservationID' : id
        }
      ),
).catchError((e){
      setBusy(false);
      print('Error Occur, ${e.toString()}');
      showMessage(erorr: e.toString());

        }).timeout(Duration(seconds: 10,), onTimeout: (){
           setBusy(false);
          showMessage(erorr: 'Server Timeout');
        },);

   if(result.data == null) {
      setBusy(false);
             print('Result is Null, There is Server Erorr');
             showMessage(erorr: 'Server Error, Please try again');
             
         }else{
            if(result.data[v] == null){
              print('*************Return Data is Null Exception **************');
             print(result.exception.graphqlErrors);
             print(result.data[v].toString());
            showMessage(erorr: result.exception.graphqlErrors.toString());

            }else{
               print('Result is not Null,becaue I hve data with me');
                //print(result.data['getUserReservations'].toString());
               // print(result.data["getUserReservations"][0]["booking_channel"]);
                if(result.data[v].length == 0){
                 print('Am Empty');

               }else{

               reservationModel =  GetReservationModel(
                  id: result.data[v]["id"],
                  name: result.data[v]["name"],
                  alreadyCheckedin: result.data[v]["already_checkedin"],
                  bookingChannel: result.data[v]["booking_channel"],
                  checkedinAat: result.data[v]["checkedin_at"],
                  checkInDate: result.data[v]["checkin_date"],
                  checkinUrl: result.data[v]["checkin_url"],
                  approved: result.data[v]["approved"],
                  instrucstions: result.data[v]["instruction"],
                  checkoutDate: result.data[v]["checkout_date"],
                  property: Property(id: result.data[v]["property"]['id'],
                  name: result.data[v]["property"]['name'],),
                    );

                chekinD = reservationModel.getCheckInDate();
                checkoutD = reservationModel.getCheckOutDate();
                invitelink  = reservationModel.getUrl();
                 bookingC  = reservationModel.getBookingChannel();
                  propertyName  = reservationModel.property.getPropertyName();
                  guestName  = reservationModel.getName();
                  instructions  = reservationModel.getInstructions();
                  appoved = reservationModel.getIsApproved();
      }
            }
       setBusy(false);
         }
  }




showMessage({String erorr}){
_errorMessage = erorr;
notifyListeners();
}

setLinkUIVisibilty({bool status}){
   linkUIVisisblity = status;
   notifyListeners();
}

  setApiError({String erorr}){
  _errorMessage = erorr;
  print(erorr);
   notifyListeners();
}




}